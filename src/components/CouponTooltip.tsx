import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useSubscription } from '../contexts/SubscriptionContext';

const STORAGE_KEY = 'jp_coupon_tooltip_dismissed';

export default function CouponTooltip() {
  const { user, loading: authLoading } = useAuth();
  const { hasAccess, loading: subLoading } = useSubscription();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (authLoading || subLoading) return;
    if (!user || hasAccess) return;
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    const timer = setTimeout(() => setVisible(true), 1200);
    return () => clearTimeout(timer);
  }, [user, hasAccess, authLoading, subLoading]);

  const dismiss = () => {
    setVisible(false);
    sessionStorage.setItem(STORAGE_KEY, '1');
  };

  if (!visible) return null;

  return (
    <div className="coupon-tooltip">
      <button className="coupon-tooltip-close" onClick={dismiss} aria-label="닫기">&times;</button>
      <div className="coupon-tooltip-icon">
        <i className="fa-solid fa-ticket" />
      </div>
      <p className="coupon-tooltip-msg">
        쿠폰이 있으신가요?<br />
        <strong>쿠폰 등록</strong>으로 바로 이용하세요!
      </p>
      <Link to="/coupon" className="coupon-tooltip-btn" onClick={dismiss}>
        쿠폰 등록하기 <i className="fa-solid fa-arrow-right" />
      </Link>
    </div>
  );
}
