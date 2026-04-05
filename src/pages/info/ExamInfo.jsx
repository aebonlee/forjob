import SEOHead from '../../components/SEOHead';
import { SUBJECTS } from '../../config/site';

export default function ExamInfo() {
  return (
    <>
      <SEOHead title="시험 안내" description="직업상담사 2급 자격시험 안내" />
      <div className="page-header">
        <div className="container">
          <h1><i className="fa-solid fa-circle-question" /> 시험 안내</h1>
          <p className="page-desc">직업상담사 2급 국가기술자격 시험에 대해 안내합니다</p>
        </div>
      </div>

      <div className="container" style={{ paddingBottom: 80 }}>
        {/* Overview */}
        <div className="exam-info-section">
          <h2>직업상담사 2급이란?</h2>
          <p>
            직업상담사 2급은 한국산업인력공단에서 시행하는 국가기술자격으로,
            구직자와 구인자에게 직업정보를 제공하고 직업상담을 수행할 수 있는 전문 인력을 양성하기 위한 자격입니다.
          </p>
        </div>

        {/* Eligibility */}
        <div className="exam-info-section">
          <h2>응시 자격</h2>
          <div className="info-box">
            <p><strong>제한 없음</strong> - 학력, 경력, 연령 제한 없이 누구나 응시 가능합니다.</p>
          </div>
        </div>

        {/* Written Exam */}
        <div className="exam-info-section">
          <h2>필기시험</h2>
          <table className="exam-info-table">
            <tbody>
              <tr><td>과목 수</td><td>5과목</td></tr>
              <tr><td>문항 수</td><td>총 100문항 (과목당 20문항)</td></tr>
              <tr><td>문제 유형</td><td>4지선다 객관식</td></tr>
              <tr><td>시험 시간</td><td>150분 (2시간 30분)</td></tr>
              <tr><td>합격 기준</td><td>평균 60점 이상 + 과목당 40점 이상</td></tr>
            </tbody>
          </table>

          <h3 className="mt-3">필기 과목</h3>
          <div className="exam-info-subjects">
            {SUBJECTS.map((subject, idx) => (
              <div key={subject.code} className="exam-info-subject" style={{ borderLeftColor: subject.color }}>
                <span className="exam-info-subject-num" style={{ color: subject.color }}>{idx + 1}</span>
                <div>
                  <strong style={{ color: subject.color }}>{subject.name}</strong>
                  <p>
                    {subject.code === 'counseling' && '직업상담의 개념, 상담이론, 상담기법, 직업상담 과정, 직업적응이론 등'}
                    {subject.code === 'psychology' && '직업발달이론, 직업심리검사, 직업적성검사, 직업흥미검사, 성격검사 등'}
                    {subject.code === 'jobinfo' && '직업정보의 제공, 직업분류, 한국표준직업분류(KSCO), 한국표준산업분류(KSIC) 등'}
                    {subject.code === 'labor_market' && '노동시장의 이론, 임금이론, 실업이론, 인적자본론, 노동이동 등'}
                    {subject.code === 'labor_law' && '근로기준법, 고용보험법, 직업안정법, 근로자직업능력개발법, 파견법 등'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Practical Exam */}
        <div className="exam-info-section">
          <h2>실기시험</h2>
          <table className="exam-info-table">
            <tbody>
              <tr><td>과목</td><td>직업상담 실무</td></tr>
              <tr><td>문제 유형</td><td>주관식 (단답형, 서술형, 계산형)</td></tr>
              <tr><td>시험 시간</td><td>150분 (2시간 30분)</td></tr>
              <tr><td>합격 기준</td><td>100점 만점 중 60점 이상</td></tr>
            </tbody>
          </table>
        </div>

        {/* Schedule */}
        <div className="exam-info-section">
          <h2>시험 일정 (2026년)</h2>
          <table className="exam-info-table">
            <thead>
              <tr><th>구분</th><th>접수 기간</th><th>시험일</th><th>합격 발표</th></tr>
            </thead>
            <tbody>
              <tr><td>1회 필기</td><td>1월</td><td>2월</td><td>3월</td></tr>
              <tr><td>1회 실기</td><td>3월</td><td>4~5월</td><td>6월</td></tr>
              <tr><td>2회 필기</td><td>4월</td><td>5월</td><td>6월</td></tr>
              <tr><td>2회 실기</td><td>6월</td><td>7~8월</td><td>9월</td></tr>
              <tr><td>3회 필기</td><td>6월</td><td>8월</td><td>9월</td></tr>
              <tr><td>3회 실기</td><td>9월</td><td>10~11월</td><td>12월</td></tr>
            </tbody>
          </table>
          <p className="mt-2" style={{ color: 'var(--text-light)', fontSize: 13 }}>
            * 정확한 일정은 Q-Net(큐넷) 홈페이지에서 확인하세요.
          </p>
        </div>

        {/* Links */}
        <div className="exam-info-section">
          <h2>유용한 링크</h2>
          <ul className="exam-info-links">
            <li><a href="https://www.q-net.or.kr" target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-external-link-alt" /> Q-Net (큐넷) - 시험 접수 및 정보</a></li>
            <li><a href="https://www.work.go.kr" target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-external-link-alt" /> 워크넷 - 직업정보</a></li>
            <li><a href="https://www.keis.or.kr" target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-external-link-alt" /> 한국고용정보원</a></li>
          </ul>
        </div>
      </div>
    </>
  );
}
