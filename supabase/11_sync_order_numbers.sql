-- ============================================
-- ForJob - PortOne ↔ DB 주문번호 불일치 동기화
-- Supabase SQL Editor에서 실행
-- 작성일: 2026-04-20
-- ============================================

-- ■ 1. 이화연: DB JP-260418-2ANFN8 → PortOne JP-260417-Z1BLVV 로 일치시킴
-- (2중 결제 후 하나 취소, PortOne 원본 주문번호로 통일)
UPDATE forjob_orders
SET order_number = 'JP-260417-Z1BLVV'
WHERE order_number = 'JP-260418-2ANFN8'
  AND user_name = '이화연';

-- ■ 2. 성예종: DB JP-RECOVER-260413 → PortOne JP-260414-LA7HWJ 로 일치시킴
-- (localStorage 복구 건, PortOne 원본 주문번호로 통일)
UPDATE forjob_orders
SET order_number = 'JP-260414-LA7HWJ'
WHERE order_number = 'JP-RECOVER-260413'
  AND user_name LIKE '%성예종%';

-- ■ 3. 변경 확인
SELECT order_number, user_name, user_email, payment_status, expires_at
FROM forjob_orders
WHERE user_name LIKE '%이화연%'
   OR user_name LIKE '%성예종%';
