import { Link } from 'react-router-dom';
import SEOHead from '../../components/SEOHead';
import { SUBJECTS } from '../../config/site';

export default function ExamInfo() {
  return (
    <>
      <SEOHead title="시험 안내" description="직업상담사 2급 자격시험 안내" />
      <div className="page-header">
        <div className="container">
          <h1>직업상담사 2급 시험 안내</h1>
          <p className="page-desc">국가기술자격 시험에 대한 핵심 정보를 안내합니다</p>
        </div>
      </div>

      <div className="container info-page">
        {/* Overview */}
        <section className="info-card">
          <div className="info-card-header">
            <span className="info-card-icon overview"><i className="fa-solid fa-clipboard-list" /></span>
            <h2>직업상담사 2급이란?</h2>
          </div>
          <p className="info-card-text">
            직업상담사 2급은 <strong>한국산업인력공단</strong>에서 시행하는 국가기술자격으로,
            구직자와 구인자에게 직업정보를 제공하고 직업상담을 수행할 수 있는 전문 인력을 양성하기 위한 자격입니다.
          </p>
          <div className="info-highlight-row">
            <div className="info-highlight">
              <span className="info-highlight-label">응시 자격</span>
              <span className="info-highlight-value">제한 없음</span>
            </div>
            <div className="info-highlight">
              <span className="info-highlight-label">시행 기관</span>
              <span className="info-highlight-value">한국산업인력공단</span>
            </div>
            <div className="info-highlight">
              <span className="info-highlight-label">연 시행</span>
              <span className="info-highlight-value">3회</span>
            </div>
          </div>
        </section>

        {/* Two Column: Written + Practical */}
        <div className="info-grid-2">
          {/* Written Exam */}
          <section className="info-card">
            <div className="info-card-header">
              <span className="info-card-icon pilgi"><i className="fa-solid fa-pen-to-square" /></span>
              <h2>필기시험</h2>
            </div>
            <table className="info-table">
              <tbody>
                <tr><th>과목 수</th><td>5과목</td></tr>
                <tr><th>문항 수</th><td>총 100문항 (과목당 20문항)</td></tr>
                <tr><th>문제 유형</th><td>4지선다 객관식</td></tr>
                <tr><th>시험 시간</th><td><strong>150분</strong> (2시간 30분)</td></tr>
                <tr><th>합격 기준</th><td>평균 <strong>60점</strong> 이상 + 과목당 40점 이상</td></tr>
              </tbody>
            </table>
            <div className="info-card-action">
              <Link to="/pilgi" className="btn btn-primary">필기 학습 시작</Link>
            </div>
          </section>

          {/* Practical Exam */}
          <section className="info-card">
            <div className="info-card-header">
              <span className="info-card-icon silgi"><i className="fa-solid fa-file-pen" /></span>
              <h2>실기시험</h2>
            </div>
            <table className="info-table">
              <tbody>
                <tr><th>과목</th><td>직업상담 실무</td></tr>
                <tr><th>문제 유형</th><td>주관식 (단답형, 서술형, 계산형)</td></tr>
                <tr><th>시험 시간</th><td><strong>150분</strong> (2시간 30분)</td></tr>
                <tr><th>합격 기준</th><td>100점 만점 중 <strong>60점</strong> 이상</td></tr>
              </tbody>
            </table>
            <div className="info-card-action">
              <Link to="/silgi" className="btn btn-primary">실기 학습 시작</Link>
            </div>
          </section>
        </div>

        {/* Subjects */}
        <section className="info-card">
          <div className="info-card-header">
            <span className="info-card-icon subjects"><i className="fa-solid fa-book-open" /></span>
            <h2>필기 과목 (5과목)</h2>
          </div>
          <div className="info-subjects-grid">
            {SUBJECTS.map((subject, idx) => (
              <div key={subject.code} className="info-subject-item" style={{ '--accent': subject.color }}>
                <div className="info-subject-num">{idx + 1}</div>
                <div className="info-subject-body">
                  <h4>{subject.name}</h4>
                  <p>
                    {subject.code === 'counseling' && '직업상담의 개념, 상담이론, 상담기법, 직업상담 과정, 직업적응이론'}
                    {subject.code === 'psychology' && '직업발달이론, 직업심리검사, 직업적성검사, 직업흥미검사, 성격검사'}
                    {subject.code === 'jobinfo' && '직업정보의 제공, 직업분류, 한국표준직업분류(KSCO), 한국표준산업분류(KSIC)'}
                    {subject.code === 'labor_market' && '노동시장의 이론, 임금이론, 실업이론, 인적자본론, 노동이동'}
                    {subject.code === 'labor_law' && '근로기준법, 고용보험법, 직업안정법, 근로자직업능력개발법, 파견법'}
                  </p>
                </div>
                <Link to={`/learn/${subject.code}`} className="info-subject-link" title={`${subject.name} 학습하기`}>
                  <i className="fa-solid fa-arrow-right" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Schedule */}
        <section className="info-card">
          <div className="info-card-header">
            <span className="info-card-icon schedule"><i className="fa-solid fa-calendar-days" /></span>
            <h2>2026년 시험 일정</h2>
          </div>
          <div className="info-table-wrap">
            <table className="info-table schedule">
              <thead>
                <tr><th>구분</th><th>접수 기간</th><th>시험일</th><th>합격 발표</th></tr>
              </thead>
              <tbody>
                <tr><td><span className="info-round-badge">1회 필기</span></td><td>1월</td><td>2월</td><td>3월</td></tr>
                <tr><td><span className="info-round-badge silgi">1회 실기</span></td><td>3월</td><td>4~5월</td><td>6월</td></tr>
                <tr><td><span className="info-round-badge">2회 필기</span></td><td>4월</td><td>5월</td><td>6월</td></tr>
                <tr><td><span className="info-round-badge silgi">2회 실기</span></td><td>6월</td><td>7~8월</td><td>9월</td></tr>
                <tr><td><span className="info-round-badge">3회 필기</span></td><td>6월</td><td>8월</td><td>9월</td></tr>
                <tr><td><span className="info-round-badge silgi">3회 실기</span></td><td>9월</td><td>10~11월</td><td>12월</td></tr>
              </tbody>
            </table>
          </div>
          <p className="info-note">* 정확한 일정은 Q-Net(큐넷) 홈페이지에서 확인하세요.</p>
        </section>

        {/* Links */}
        <section className="info-card">
          <div className="info-card-header">
            <span className="info-card-icon links"><i className="fa-solid fa-link" /></span>
            <h2>유용한 링크</h2>
          </div>
          <div className="info-links-grid">
            <a href="https://www.q-net.or.kr" target="_blank" rel="noopener noreferrer" className="info-link-card">
              <div className="info-link-icon"><i className="fa-solid fa-award" /></div>
              <div>
                <strong>Q-Net (큐넷)</strong>
                <p>시험 접수 및 합격자 조회</p>
              </div>
              <i className="fa-solid fa-arrow-up-right-from-square info-link-ext" />
            </a>
            <a href="https://www.work.go.kr" target="_blank" rel="noopener noreferrer" className="info-link-card">
              <div className="info-link-icon"><i className="fa-solid fa-briefcase" /></div>
              <div>
                <strong>워크넷</strong>
                <p>직업정보 및 채용공고</p>
              </div>
              <i className="fa-solid fa-arrow-up-right-from-square info-link-ext" />
            </a>
            <a href="https://www.keis.or.kr" target="_blank" rel="noopener noreferrer" className="info-link-card">
              <div className="info-link-icon"><i className="fa-solid fa-building-columns" /></div>
              <div>
                <strong>한국고용정보원</strong>
                <p>고용동향 및 직업연구</p>
              </div>
              <i className="fa-solid fa-arrow-up-right-from-square info-link-ext" />
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
