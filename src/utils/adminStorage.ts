import { supabase, TABLES } from '../lib/supabase';

/**
 * 전체 쿠폰 목록 조회 (현재 forjob만 존재)
 */
export async function getAllCoupons() {
  const { data, error } = await supabase
    .from(TABLES.COUPONS)
    .select('*')
    .order('created_at', { ascending: false });
  if (error) console.error('[Admin] coupons 조회 오류:', error.message);
  return data || [];
}

/**
 * 전체 쿠폰 사용 내역 조회
 */
export async function getAllCouponRedemptions() {
  const { data, error } = await supabase
    .from(TABLES.COUPON_REDEMPTIONS)
    .select('*')
    .order('created_at', { ascending: false });
  if (error) console.error('[Admin] redemptions 조회 오류:', error.message);
  return data || [];
}
