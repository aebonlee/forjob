-- ============================================
-- ForJob - 쿠폰 이중 사용 방지 UNIQUE 제약조건
-- 같은 사용자가 같은 쿠폰을 두 번 사용하는 것을 DB 레벨에서 차단
-- Supabase SQL Editor에서 실행
-- 작성일: 2026-04-21
-- ============================================

-- ■ 1. 기존 중복 데이터 확인 (제약조건 추가 전 정리 필요)
SELECT coupon_id, user_id, COUNT(*) as cnt
FROM forjob_coupon_redemptions
GROUP BY coupon_id, user_id
HAVING COUNT(*) > 1;

-- ■ 2. 중복 데이터가 있다면 최신 1개만 남기고 삭제
-- (위 쿼리 결과가 0건이면 이 단계 건너뛰기)
/*
DELETE FROM forjob_coupon_redemptions
WHERE id NOT IN (
  SELECT DISTINCT ON (coupon_id, user_id) id
  FROM forjob_coupon_redemptions
  ORDER BY coupon_id, user_id, created_at DESC
);
*/

-- ■ 3. UNIQUE 제약조건 추가 (이중 사용 원천 차단)
ALTER TABLE forjob_coupon_redemptions
  ADD CONSTRAINT uq_coupon_redemption_user
  UNIQUE (coupon_id, user_id);

-- ■ 4. 확인
SELECT conname, contype
FROM pg_constraint
WHERE conrelid = 'forjob_coupon_redemptions'::regclass
  AND contype = 'u';
