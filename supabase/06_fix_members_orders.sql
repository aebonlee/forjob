-- ============================================
-- ForJob — 회원목록 + 주문목록 조회 불가 수정
-- 문제: 관리자가 회원/주문 조회 시 빈 배열 반환
-- 원인: SELECT RLS 정책 누락 + 프로필 트리거 미등록
-- Supabase SQL Editor에서 실행
-- 작성일: 2026-04-14
-- ============================================

-- ■ 1. is_forjob_admin() 함수 (재등록)
CREATE OR REPLACE FUNCTION is_forjob_admin()
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM auth.users
    WHERE id = auth.uid()
    AND email IN ('aebon@kakao.com', 'radical8566@gmail.com')
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER STABLE;

-- ■ 2. forjob_orders: 관리자 전체 조회 + 본인 조회 정책
DROP POLICY IF EXISTS "select_own" ON forjob_orders;
DROP POLICY IF EXISTS "admin_read_all_orders" ON forjob_orders;
CREATE POLICY "orders_select" ON forjob_orders
  FOR SELECT USING (
    auth.uid() = user_id
    OR is_forjob_admin()
  );

-- ■ 3. forjob_orders: INSERT 정책 (본인)
DROP POLICY IF EXISTS "insert_own" ON forjob_orders;
CREATE POLICY "orders_insert" ON forjob_orders
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- ■ 4. forjob_orders: UPDATE 정책 (관리자)
DROP POLICY IF EXISTS "admin_update_orders" ON forjob_orders;
CREATE POLICY "orders_admin_update" ON forjob_orders
  FOR UPDATE USING (is_forjob_admin());

-- ■ 5. forjob_coupon_redemptions: 관리자 + 본인 조회
DROP POLICY IF EXISTS "admin_read_all_redemptions" ON forjob_coupon_redemptions;
DROP POLICY IF EXISTS "redemptions_select_own" ON forjob_coupon_redemptions;
CREATE POLICY "redemptions_select" ON forjob_coupon_redemptions
  FOR SELECT USING (
    auth.uid() = user_id
    OR is_forjob_admin()
  );

-- ■ 6. forjob_coupons: 관리자 전체 관리
DROP POLICY IF EXISTS "admin_manage_coupons" ON forjob_coupons;
CREATE POLICY "coupons_admin_all" ON forjob_coupons
  FOR ALL USING (is_forjob_admin());

-- 쿠폰 조회는 누구나 (코드로 검색 필요)
DROP POLICY IF EXISTS "coupons_select" ON forjob_coupons;
CREATE POLICY "coupons_select" ON forjob_coupons
  FOR SELECT USING (true);

-- ■ 7. forjob_profiles: SELECT 정책 확인 (이미 USING(true)일 수 있음)
DROP POLICY IF EXISTS "profiles_select" ON forjob_profiles;
CREATE POLICY "profiles_select" ON forjob_profiles
  FOR SELECT USING (true);

-- ■ 8. 프로필 자동 생성 트리거 (재등록)
CREATE OR REPLACE FUNCTION handle_forjob_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO forjob_profiles (id, name, email, avatar_url)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.raw_user_meta_data->>'name', split_part(NEW.email, '@', 1)),
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'avatar_url', '')
  )
  ON CONFLICT (id) DO UPDATE SET
    name = EXCLUDED.name,
    email = EXCLUDED.email,
    avatar_url = EXCLUDED.avatar_url;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_forjob_auth_user_created ON auth.users;
CREATE TRIGGER on_forjob_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_forjob_new_user();

-- ■ 9. 기존 auth.users 중 forjob_profiles에 없는 회원 백필
INSERT INTO forjob_profiles (id, name, email, avatar_url)
SELECT
  u.id,
  COALESCE(u.raw_user_meta_data->>'full_name', u.raw_user_meta_data->>'name', split_part(u.email, '@', 1)),
  u.email,
  COALESCE(u.raw_user_meta_data->>'avatar_url', '')
FROM auth.users u
WHERE NOT EXISTS (SELECT 1 FROM forjob_profiles p WHERE p.id = u.id);

-- ■ 10. 확인 쿼리
SELECT 'forjob_profiles' AS tbl, COUNT(*) AS cnt FROM forjob_profiles
UNION ALL
SELECT 'forjob_orders', COUNT(*) FROM forjob_orders
UNION ALL
SELECT 'forjob_coupons', COUNT(*) FROM forjob_coupons
UNION ALL
SELECT 'forjob_coupon_redemptions', COUNT(*) FROM forjob_coupon_redemptions;
