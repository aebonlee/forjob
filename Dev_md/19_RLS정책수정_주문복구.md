# 19. RLS 정책 수정 + 결제 주문 수동 복구

## 작업일: 2026-04-14

## 문제

1. **관리자 대시보드에서 주문/회원 0건 표시**: RLS 정책 내 `(SELECT email FROM auth.users WHERE id = auth.uid())` 서브쿼리가 권한 부족으로 실패
2. **PortOne 결제 9건이 Supabase에 미저장**: 결제는 성공했지만 `forjob_orders` INSERT가 RLS 정책 문제로 실패
3. **www 관리자 대시보드도 동일 문제**: `orders` 테이블 SELECT 정책에서 같은 `auth.users` 서브쿼리 문제

## 근본 원인

RLS 정책에서 `auth.users` 테이블을 직접 조회하면 **인증된 사용자도 권한이 없어서 서브쿼리가 실패**함.
→ `auth.jwt()->>'email'`을 사용해야 JWT 토큰에서 직접 이메일을 읽을 수 있음.

### 잘못된 방식 (실패):
```sql
(SELECT email FROM auth.users WHERE id = auth.uid()) IN ('admin@example.com')
```

### 올바른 방식 (성공):
```sql
auth.jwt()->>'email' IN ('admin@example.com')
```

## 수정 내역

### 1. jobpath — forjob_orders RLS 정책

```sql
-- SELECT: 본인 주문 + 관리자 전체 조회
DROP POLICY IF EXISTS "forjob_orders_select" ON forjob_orders;
CREATE POLICY "forjob_orders_select" ON forjob_orders
  FOR SELECT USING (
    auth.uid() = user_id
    OR auth.jwt()->>'email' IN ('aebon@kakao.com', 'radical8566@gmail.com')
  );

-- UPDATE: 관리자만
DROP POLICY IF EXISTS "forjob_orders_update" ON forjob_orders;
CREATE POLICY "forjob_orders_update" ON forjob_orders
  FOR UPDATE USING (
    auth.jwt()->>'email' IN ('aebon@kakao.com', 'radical8566@gmail.com')
  );

-- INSERT: 본인만
CREATE POLICY "forjob_orders_insert" ON forjob_orders
  FOR INSERT WITH CHECK (auth.uid() = user_id);
```

### 2. jobpath — forjob_coupon_redemptions RLS 정책

```sql
DROP POLICY IF EXISTS "forjob_redemptions_select" ON forjob_coupon_redemptions;
CREATE POLICY "forjob_redemptions_select" ON forjob_coupon_redemptions
  FOR SELECT USING (
    auth.uid() = user_id
    OR auth.jwt()->>'email' IN ('aebon@kakao.com', 'radical8566@gmail.com')
  );
```

### 3. www — orders RLS 정책

```sql
DROP POLICY IF EXISTS "orders_select" ON orders;
CREATE POLICY "orders_select" ON orders
  FOR SELECT USING (
    auth.uid() = user_id
    OR user_email = auth.jwt()->>'email'
    OR auth.jwt()->>'email' IN ('aebon@kakao.com', 'radical8566@gmail.com')
  );

DROP POLICY IF EXISTS "orders_update" ON orders;
CREATE POLICY "orders_update" ON orders
  FOR UPDATE USING (
    auth.jwt()->>'email' IN ('aebon@kakao.com', 'radical8566@gmail.com')
  );
```

### 4. www — user_profiles SELECT 정책

```sql
DROP POLICY IF EXISTS "profiles_public_read" ON user_profiles;
CREATE POLICY "profiles_public_read" ON user_profiles
  FOR SELECT USING (true);
```

## 결제 주문 수동 복구

PortOne에서 결제 성공한 9건이 Supabase INSERT 실패로 미저장.
auth.users에서 user_id/email 매칭 후 수동 INSERT:

| 주문자 | 주문번호 | 이메일 | 금액 |
|--------|---------|--------|------|
| ☆임^승문 ☆ | JP-260414-NS9IC9 | bobo0827@naver.com | 9,900 |
| 이남주 | JP-260414-341OIZ | victoriasa0307@gmail.com | 9,900 |
| 여은아 | JP-260414-1LIZYT | syoo7@daum.net | 9,900 |
| 임연아 | JP-260414-8KTFFF | p01041705318@gmail.com | 9,900 |
| 박미영 | JP-260414-14GMXO | pmy_76@hanmail.net | 9,900 |
| 반은정 | JP-260414-4I1Z1K | notionfeel@kakao.com | 9,900 |
| 이미숙 | JP-260414-274CQH | tomot@kakao.com | 9,900 |
| 이미라 | JP-260414-4B8T8E | mira4855@naver.com | 9,900 |
| 봉은수 | JP-260414-DDGSK2 | bonguooree@naver.com | 9,900 |

## DB 정리

- 중복 INSERT된 주문 정리: `DELETE FROM forjob_orders a USING forjob_orders b WHERE a.order_number = b.order_number AND a.ctid > b.ctid;`
- www 테스트 주문 2건 삭제 (cancelled 상태)
- 기존 중복/불필요 RLS 정책 전체 정리

## 최종 상태

- jobpath `forjob_orders`: 10건 (9건 오늘 결제 + 1건 기존 복구)
- www `orders`: 0건 (테스트 주문 삭제, 실결제 없음)
- 두 사이트 모두 관리자 대시보드 정상 작동

## 교훈

1. **RLS 정책에서 `auth.users` 직접 조회 금지** → `auth.jwt()->>'email'` 사용
2. **UUID 컬럼에 `MIN()` 함수 사용 불가** → `ctid` 기반 중복 삭제 사용
3. **결제 성공 ≠ DB 저장 성공**: PortOne 결제와 Supabase INSERT는 별개, INSERT 실패 시 수동 복구 필요
