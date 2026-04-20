-- ============================================
-- ForJob - 박미영 결제자 접속 권한 수동 부여
-- PortOne 결제 완료 (JP-260414-14GMXO, 카드결제, 9900원)
-- DB에 주문 누락 확인됨
-- Supabase SQL Editor에서 실행
-- 작성일: 2026-04-20
-- ============================================

-- ■ 1. 박미영 프로필 확인 (user_id 조회)
SELECT id, name, email, role
FROM forjob_profiles
WHERE name LIKE '%박미영%';

-- ■ 2. 기존 주문 확인 (중복 방지)
SELECT * FROM forjob_orders
WHERE order_number = 'JP-260414-14GMXO'
   OR user_name LIKE '%박미영%';

-- ■ 3. 주문 수동 삽입 (프로필에서 user_id, email 자동 매칭)
INSERT INTO forjob_orders (
  order_number, user_id, user_email, user_name,
  plan_type, total_amount, payment_method, payment_status,
  paid_at, expires_at, created_at
)
SELECT
  'JP-260414-14GMXO',
  sub.id,
  sub.email,
  '박미영',
  '3month',
  9900,
  'card',
  'paid',
  '2026-04-14T11:20:01+09:00'::timestamptz,
  '2026-04-14T11:20:01+09:00'::timestamptz + INTERVAL '90 days',
  '2026-04-14T11:20:01+09:00'::timestamptz
FROM (
  SELECT id, email FROM forjob_profiles WHERE name = '박미영' LIMIT 1
) sub
ON CONFLICT DO NOTHING;

-- ■ 4. 삽입 확인
SELECT order_number, user_name, user_email, payment_status, expires_at
FROM forjob_orders
WHERE order_number = 'JP-260414-14GMXO';
