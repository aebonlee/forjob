# JobPath + WWW — 회원/주문 목록 조회 불가 수정

## 날짜
2026-04-14

## 문제 상황
- jobpath 관리자 대시보드에서 회원 목록이 비어있음
- www 관리자 주문관리에서 신규 주문 내역이 보이지 않음
- www에서 신규 회원도 확인 안됨

## 근본 원인

### 버그 1: orders SELECT RLS 정책 누락 (www)
- `orders` 테이블 원래 설계: "service_role만 조회" (Edge Function 경유)
- 프론트엔드 관리자 대시보드가 직접 Supabase client로 SELECT → 빈 배열
- 이전 수정에서 UPDATE 정책은 추가했으나 SELECT 정책 누락

### 버그 2: forjob_orders 관리자 SELECT 정책 미등록 (jobpath)
- `05_admin_rls.sql`의 `admin_read_all_orders` 정책이 Supabase에 등록되지 않았을 가능성
- 기본 정책 `select_own`만 존재 → 관리자도 자기 주문만 조회

### 버그 3: 프로필 자동 생성 트리거 미등록 (양쪽 프로젝트)
- `auth.users` INSERT 시 프로필 자동 생성 트리거가 Supabase에 미등록
- 신규 가입자의 프로필이 생성되지 않아 회원 목록에 안 나옴
- 기존 회원도 프로필 없을 수 있음 → 백필 필요

## 수정 SQL

### jobpath: `supabase/06_fix_members_orders.sql`
1. `is_forjob_admin()` 함수 재등록
2. `forjob_orders` SELECT 정책: 관리자 전체 + 본인 조회
3. `forjob_coupon_redemptions` SELECT 정책: 관리자 + 본인
4. `forjob_coupons` 관리자 전체 관리 + 일반 조회
5. `forjob_profiles` SELECT USING(true) 재확인
6. 프로필 자동 생성 트리거 재등록
7. 기존 auth.users → forjob_profiles 백필

### www: `Dev_md/migration_orders_select_rls.sql`
1. `orders` SELECT 정책: 관리자 전체 + 본인 조회
2. `user_profiles` 프로필 자동 생성 트리거 재등록
3. 기존 auth.users → user_profiles 백필

## 배포 후 필수 작업
1. Supabase SQL Editor에서 `supabase/06_fix_members_orders.sql` 실행 (jobpath)
2. Supabase SQL Editor에서 `Dev_md/migration_orders_select_rls.sql` 실행 (www)
3. 양쪽 관리자 대시보드에서 회원/주문 목록 확인
