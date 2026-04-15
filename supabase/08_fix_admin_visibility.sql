-- ============================================
-- ForJob — 관리자 대시보드 데이터 조회 불가 수정
-- 문제: 회원가입/결제는 되지만 관리자 대시보드에서 안 보임
-- 원인: is_forjob_admin() 함수가 role 기반인데, 프로필에 role 미설정
--       또는 기존 마이그레이션 미실행으로 RLS 정책 누락
-- Supabase SQL Editor에서 실행
-- 작성일: 2026-04-15
-- ============================================

-- ■ 1. forjob_profiles에 role 컬럼 확보
ALTER TABLE forjob_profiles
  ADD COLUMN IF NOT EXISTS role TEXT DEFAULT 'user';

-- ■ 2. is_forjob_admin() — 이메일 fallback + role 기반 (둘 다 지원)
CREATE OR REPLACE FUNCTION is_forjob_admin()
RETURNS BOOLEAN AS $$
BEGIN
  -- role 기반 체크
  IF EXISTS (
    SELECT 1 FROM forjob_profiles
    WHERE id = auth.uid()
    AND role IN ('admin', 'superadmin')
  ) THEN
    RETURN TRUE;
  END IF;
  -- 이메일 fallback (프로필 role 미설정 시에도 접근 보장)
  RETURN EXISTS (
    SELECT 1 FROM auth.users
    WHERE id = auth.uid()
    AND email IN ('aebon@kakao.com', 'radical8566@gmail.com')
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER STABLE;

-- ■ 3. 프로필 자동 생성 트리거 (최신 버전)
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

-- ■ 4. 기존 auth.users 중 forjob_profiles에 없는 회원 백필
INSERT INTO forjob_profiles (id, name, email, avatar_url)
SELECT
  u.id,
  COALESCE(u.raw_user_meta_data->>'full_name', u.raw_user_meta_data->>'name', split_part(u.email, '@', 1)),
  u.email,
  COALESCE(u.raw_user_meta_data->>'avatar_url', '')
FROM auth.users u
WHERE NOT EXISTS (SELECT 1 FROM forjob_profiles p WHERE p.id = u.id);

-- ■ 5. 관리자 role 설정
UPDATE forjob_profiles SET role = 'superadmin' WHERE email = 'aebon@kakao.com';
UPDATE forjob_profiles SET role = 'admin' WHERE email IN ('radical8566@gmail.com', 'aebon@kyonggi.ac.kr') AND role = 'user';

-- ■ 6. forjob_profiles: 누구나 조회 가능
DROP POLICY IF EXISTS "profiles_select" ON forjob_profiles;
CREATE POLICY "profiles_select" ON forjob_profiles
  FOR SELECT USING (true);

-- ■ 7. forjob_orders: 본인 + 관리자 조회
DROP POLICY IF EXISTS "select_own" ON forjob_orders;
DROP POLICY IF EXISTS "admin_read_all_orders" ON forjob_orders;
DROP POLICY IF EXISTS "orders_select" ON forjob_orders;
CREATE POLICY "orders_select" ON forjob_orders
  FOR SELECT USING (auth.uid() = user_id OR is_forjob_admin());

-- forjob_orders: 본인 INSERT
DROP POLICY IF EXISTS "insert_own" ON forjob_orders;
DROP POLICY IF EXISTS "orders_insert" ON forjob_orders;
CREATE POLICY "orders_insert" ON forjob_orders
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- forjob_orders: 관리자 UPDATE
DROP POLICY IF EXISTS "admin_update_orders" ON forjob_orders;
DROP POLICY IF EXISTS "orders_admin_update" ON forjob_orders;
CREATE POLICY "orders_admin_update" ON forjob_orders
  FOR UPDATE USING (is_forjob_admin());

-- ■ 8. forjob_coupons: 누구나 조회 + 관리자 전체 관리
DROP POLICY IF EXISTS "admin_manage_coupons" ON forjob_coupons;
DROP POLICY IF EXISTS "coupons_admin_all" ON forjob_coupons;
DROP POLICY IF EXISTS "coupons_select" ON forjob_coupons;

CREATE POLICY "coupons_select" ON forjob_coupons
  FOR SELECT USING (true);
CREATE POLICY "coupons_admin_all" ON forjob_coupons
  FOR ALL USING (is_forjob_admin());

-- ■ 9. forjob_coupon_redemptions: 본인 + 관리자 조회
DROP POLICY IF EXISTS "admin_read_all_redemptions" ON forjob_coupon_redemptions;
DROP POLICY IF EXISTS "redemptions_select_own" ON forjob_coupon_redemptions;
DROP POLICY IF EXISTS "redemptions_select" ON forjob_coupon_redemptions;
CREATE POLICY "redemptions_select" ON forjob_coupon_redemptions
  FOR SELECT USING (auth.uid() = user_id OR is_forjob_admin());

-- ■ 10. 확인 쿼리
SELECT 'forjob_profiles' AS tbl, COUNT(*) AS cnt FROM forjob_profiles
UNION ALL
SELECT 'forjob_orders', COUNT(*) FROM forjob_orders
UNION ALL
SELECT 'forjob_coupons', COUNT(*) FROM forjob_coupons
UNION ALL
SELECT 'forjob_coupon_redemptions', COUNT(*) FROM forjob_coupon_redemptions;

-- 관리자 확인
SELECT email, role FROM forjob_profiles WHERE role IN ('admin', 'superadmin');
