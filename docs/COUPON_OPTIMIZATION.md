# 쿠폰 시스템 최적화 가이드

> 현재 코드: `src/pages/payment/CouponRedeem.tsx`
> 작성일: 2026-04-20

---

## 현재 흐름 (AS-IS)

```
1. 쿠폰 조회         → forjob_coupons.select()
2. 유효성 검증        → is_active, used_count, expires_at 체크
3. 중복 사용 확인     → forjob_coupon_redemptions.select() (user_id + coupon_id)
4. 사용 기록 INSERT   → forjob_coupon_redemptions.insert()
5. used_count +1      → forjob_coupons.update()
6. 주문 생성          → forjob_orders.insert()
7. 접근 권한 부여     → grantAccess() (클라이언트 메모리)
```

---

## 발견된 문제점

### 1. 이중 사용 Race Condition (HIGH)
**파일**: `CouponRedeem.tsx:60-92`

```
시나리오:
  탭 A: step 3 → 중복 없음 ✓
  탭 B: step 3 → 중복 없음 ✓  (A의 insert 전에 체크)
  탭 A: step 4 → insert ✓
  탭 B: step 4 → insert ✓      ← 이중 사용 발생!
```

**현재 코드** (step 3):
```javascript
const { data: existing } = await supabase
  .from(TABLES.COUPON_REDEMPTIONS)
  .select('id')
  .eq('coupon_id', coupon.id)
  .eq('user_id', user.id)
  .limit(1);
// → check-then-act: 비원자적
```

**해결 방안**:
- **DB 레벨**: `forjob_coupon_redemptions`에 UNIQUE 제약조건 추가
  ```sql
  ALTER TABLE forjob_coupon_redemptions
    ADD CONSTRAINT uq_coupon_user UNIQUE (coupon_id, user_id);
  ```
  → INSERT 시 중복이면 DB 에러 → catch로 처리
- **클라이언트**: step 3 체크 제거 가능 (DB 제약이 대신함)

### 2. used_count 동시 초과 (HIGH)
**파일**: `CouponRedeem.tsx:88-92`

```
시나리오: max_uses=4, used_count=3
  유저 A: step 2 → 3 < 4 ✓
  유저 B: step 2 → 3 < 4 ✓
  유저 A: step 5 → used_count = 4
  유저 B: step 5 → used_count = 5  ← max 초과!
```

**현재 코드**:
```javascript
await supabase
  .from(TABLES.COUPONS)
  .update({ used_count: coupon.used_count + 1 })  // 읽은 값 기반 (stale)
  .eq('id', coupon.id);
```

**해결 방안 A — 낙관적 잠금 (Optimistic Lock)**:
```javascript
const { data: updated } = await supabase
  .from(TABLES.COUPONS)
  .update({ used_count: coupon.used_count + 1 })
  .eq('id', coupon.id)
  .eq('used_count', coupon.used_count)  // 읽은 시점 값과 같을 때만
  .select('id');

if (!updated || updated.length === 0) {
  // 다른 요청이 먼저 증가 → 롤백 (redemption 삭제)
  await supabase.from(TABLES.COUPON_REDEMPTIONS)
    .delete().eq('coupon_id', coupon.id).eq('user_id', user.id);
  showToast('동시 요청으로 실패했습니다. 다시 시도해주세요.', 'error');
  return;
}
```

**해결 방안 B — DB 함수 (가장 안전)**:
```sql
CREATE OR REPLACE FUNCTION redeem_coupon(
  p_coupon_id UUID,
  p_user_id UUID,
  p_user_email TEXT
) RETURNS JSON AS $$
DECLARE
  v_coupon RECORD;
  v_result JSON;
BEGIN
  -- 쿠폰 잠금 (FOR UPDATE)
  SELECT * INTO v_coupon FROM forjob_coupons
    WHERE id = p_coupon_id FOR UPDATE;

  IF v_coupon IS NULL THEN
    RETURN json_build_object('error', 'not_found');
  END IF;
  IF NOT v_coupon.is_active THEN
    RETURN json_build_object('error', 'inactive');
  END IF;
  IF v_coupon.used_count >= v_coupon.max_uses THEN
    RETURN json_build_object('error', 'exhausted');
  END IF;
  IF v_coupon.expires_at IS NOT NULL AND v_coupon.expires_at < NOW() THEN
    RETURN json_build_object('error', 'expired');
  END IF;

  -- 중복 사용 체크 + 기록 (한 트랜잭션)
  INSERT INTO forjob_coupon_redemptions (coupon_id, user_id, user_email)
    VALUES (p_coupon_id, p_user_id, p_user_email);
  -- UNIQUE 제약으로 이중 사용 시 여기서 에러 발생 → 자동 ROLLBACK

  -- used_count 증가
  UPDATE forjob_coupons SET used_count = used_count + 1
    WHERE id = p_coupon_id;

  -- 주문 생성
  INSERT INTO forjob_orders (
    user_id, user_email, order_number, plan_type,
    total_amount, payment_method, payment_status,
    paid_at, expires_at
  ) VALUES (
    p_user_id, p_user_email,
    'CP-' || EXTRACT(EPOCH FROM NOW())::BIGINT,
    CASE WHEN v_coupon.days = 1 THEN '1day_trial'
         ELSE v_coupon.days || 'day' END,
    0, 'coupon', 'paid', NOW(),
    NOW() + (v_coupon.days || ' days')::INTERVAL
  );

  RETURN json_build_object(
    'success', true,
    'days', v_coupon.days,
    'expires_at', (NOW() + (v_coupon.days || ' days')::INTERVAL)
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
```

**클라이언트 호출**:
```javascript
const { data, error } = await supabase.rpc('redeem_coupon', {
  p_coupon_id: coupon.id,
  p_user_id: user.id,
  p_user_email: user.email,
});
if (error || data?.error) {
  // 에러 메시지 매핑
}
```

### 3. 주문 생성 실패 시 불일치 (MEDIUM)
**파일**: `CouponRedeem.tsx:101-115`

```
현재 문제:
  step 4 ✓ (redemption 기록)
  step 5 ✓ (used_count 증가)
  step 6 ✗ (order INSERT 실패)
  → 쿠폰은 사용된 것으로 처리되었으나 주문 내역 없음
  → 사용자는 grantAccess()로 접근 가능하지만 주문 내역에 안 보임
```

**현재 코드**:
```javascript
if (orderErr) {
  console.error('Order creation error:', orderErr);
  // ← 에러 무시! 사용자에게 알림 없음
}
```

**해결 방안**:
```javascript
if (orderErr) {
  console.error('Order creation error:', orderErr);
  // 접근 권한은 이미 부여했으므로 사용자에게 안내
  showToast('쿠폰이 등록되었으나 주문 기록에 일시적 문제가 있습니다. 이용에는 문제 없습니다.', 'warning');
  // localStorage에 백업 (자동 복구용)
  try {
    const failed = JSON.parse(localStorage.getItem('jp_failed_order') || '[]');
    failed.push({ user_id: user.id, order_number: orderNumber, ... });
    localStorage.setItem('jp_failed_order', JSON.stringify(failed));
  } catch {}
}
```

### 4. coupon.days 미검증 (LOW)
**파일**: `CouponRedeem.tsx:95`

```javascript
const couponDays = coupon.days || 1;  // days가 0, -1, 999999이면?
```

**해결**:
```javascript
const couponDays = Math.max(1, Math.min(coupon.days || 1, 400));
```

### 5. Enter 키 이중 등록 (LOW)
**파일**: `CouponRedeem.tsx:167`

```javascript
onKeyDown={e => e.key === 'Enter' && handleRedeem()}
// loading 체크 없이 바로 호출 → 이미 처리 중에도 Enter로 재호출 가능
```

**해결**:
```javascript
onKeyDown={e => e.key === 'Enter' && !loading && handleRedeem()}
```

---

## 권장 구현 순서

### Phase 1 — 즉시 적용 (클라이언트만)
1. 낙관적 잠금으로 used_count 업데이트 (방안 A)
2. Enter 키 이중 등록 방지
3. coupon.days 유효성 검증
4. 주문 실패 시 사용자 안내 + localStorage 백업

### Phase 2 — DB 스키마 변경
5. `UNIQUE (coupon_id, user_id)` 제약조건 추가
6. step 3 중복 체크를 DB 제약으로 대체

### Phase 3 — 서버 함수 (가장 안전)
7. `redeem_coupon()` RPC 함수 배포
8. 클라이언트를 단일 RPC 호출로 변경
9. 5단계 분산 로직 → 1단계 원자적 트랜잭션

---

## 적용할 SQL (Phase 2)

```sql
-- forjob_coupon_redemptions에 중복 방지 제약조건 추가
ALTER TABLE forjob_coupon_redemptions
  ADD CONSTRAINT uq_coupon_redemption_user
  UNIQUE (coupon_id, user_id);
```

---

## 참고: 현재 테이블 구조

```
forjob_coupons:
  id, code, days, max_uses, used_count, is_active, expires_at, created_at

forjob_coupon_redemptions:
  id, coupon_id, user_id, user_email, created_at

forjob_orders:
  order_number, user_id, user_email, plan_type, total_amount,
  payment_method, payment_status, paid_at, expires_at
```
