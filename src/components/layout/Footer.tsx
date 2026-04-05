import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer" aria-label="사이트 푸터">
      <div className="container">
        <div className="footer-compact">
          <div className="footer-logo">
            <span className="brand-main">Job</span>
            <span className="brand-sub">Path</span>
          </div>

          <nav className="footer-nav">
            <Link to="/about">서비스 소개</Link>
            <Link to="/about/pricing">요금제</Link>
            <Link to="/info">시험 안내</Link>
            <Link to="/terms">이용약관</Link>
            <Link to="/privacy">개인정보처리방침</Link>
          </nav>

          <div className="footer-contact-line">
            <a href="mailto:aebon@dreamitbiz.com">aebon@dreamitbiz.com</a>
            <span>010-3700-0629</span>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 DreamIT Biz. All rights reserved. | 대표이사: 이애본 | 사업자등록번호: 601-45-20154</p>
        </div>
      </div>
    </footer>
  );
}
