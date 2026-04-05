/**
 * 직업상담사 2급 과목별 학습 커리큘럼 데이터
 * 5개 필기 과목 + 1개 실기 과목
 */

export const CURRICULUM = {
  counseling: {
    name: '직업상담학',
    code: 'counseling',
    color: '#3B82F6',
    icon: 'fa-solid fa-comments',
    description: '직업상담의 이론과 기법, 상담 과정 전반을 학습합니다.',
    chapters: [
      {
        title: '직업상담의 개념',
        topics: [
          {
            title: '직업상담의 정의와 목적',
            content: `<h4>직업상담의 정의</h4>
<p>직업상담이란 내담자가 자신의 적성, 흥미, 능력 등을 이해하고 직업세계에 대한 정보를 바탕으로 합리적인 직업선택과 적응을 할 수 있도록 도와주는 전문적 활동입니다.</p>
<ul>
  <li><strong>광의의 정의:</strong> 개인의 진로발달을 촉진하는 모든 활동 (정보제공, 심리검사, 상담 등)</li>
  <li><strong>협의의 정의:</strong> 상담자와 내담자 간의 1:1 면담을 통한 직업 관련 문제 해결</li>
</ul>
<h4>직업상담의 목적</h4>
<ul>
  <li>자기이해 증진: 적성, 흥미, 가치관, 성격 파악</li>
  <li>직업정보 제공: 직업세계에 대한 이해 증진</li>
  <li>합리적 의사결정: 직업선택 능력 향상</li>
  <li>직업적응 지원: 직장생활 적응 및 만족도 향상</li>
  <li>진로발달 촉진: 생애 전반의 진로발달 지원</li>
</ul>`
          },
          {
            title: '직업상담의 역사',
            content: `<h4>직업상담의 발전 과정</h4>
<ul>
  <li><strong>파슨스(Parsons, 1909):</strong> 직업지도 운동의 창시자, 보스턴에 직업국(Vocation Bureau) 설립</li>
  <li><strong>1920~1930년대:</strong> 심리검사의 발전, 특성요인 상담 이론 등장</li>
  <li><strong>1940~1950년대:</strong> 로저스의 인간중심 상담, 비지시적 상담 대두</li>
  <li><strong>1950~1960년대:</strong> Super의 진로발달이론, 직업발달 관점 도입</li>
  <li><strong>1970~1980년대:</strong> 인지행동 상담, Holland의 유형론 확산</li>
  <li><strong>1990년대 이후:</strong> 구성주의, 다문화 상담, 평생진로개발</li>
</ul>
<h4>한국의 직업상담 발전</h4>
<ul>
  <li>1960년대: 직업안정법 제정, 공공 직업안정기관 설립</li>
  <li>1998년: 직업상담사 국가자격 제도 도입</li>
  <li>2006년: 워크넷(Work-Net) 고도화</li>
  <li>현재: 고용센터, 대학 진로센터, 민간 상담기관 등 다양화</li>
</ul>`
          },
          {
            title: '직업상담의 윤리',
            content: `<h4>직업상담사의 윤리 원칙</h4>
<ul>
  <li><strong>비밀보장:</strong> 내담자의 개인정보 및 상담내용 비밀 유지</li>
  <li><strong>성실성:</strong> 전문적 역량 범위 내에서 성실하게 상담 수행</li>
  <li><strong>내담자 복지 우선:</strong> 내담자의 이익을 최우선으로 고려</li>
  <li><strong>자율성 존중:</strong> 내담자의 자기결정권 존중</li>
  <li><strong>전문성 유지:</strong> 지속적인 교육과 수련을 통한 전문성 향상</li>
</ul>
<h4>비밀보장의 예외</h4>
<ul>
  <li>내담자가 자신이나 타인의 생명을 위협하는 경우</li>
  <li>법적으로 보고 의무가 있는 경우 (아동학대 등)</li>
  <li>내담자가 동의한 경우</li>
  <li>법원의 명령이 있는 경우</li>
</ul>`
          }
        ]
      },
      {
        title: '직업상담 이론',
        topics: [
          {
            title: '파슨스의 특성요인이론',
            content: `<h4>특성요인이론 (Trait-Factor Theory)</h4>
<p>파슨스(Frank Parsons)가 창시한 최초의 체계적 직업지도 이론으로, 개인의 특성과 직업의 요인을 매칭하는 접근입니다.</p>
<h4>직업선택의 3단계</h4>
<ol>
  <li><strong>자기이해:</strong> 자신의 적성, 능력, 흥미, 한계 등을 명확히 이해</li>
  <li><strong>직업이해:</strong> 다양한 직업의 조건, 보상, 기회, 전망 등을 파악</li>
  <li><strong>합리적 추론:</strong> 자기이해와 직업이해를 바탕으로 합리적인 직업 선택</li>
</ol>
<h4>윌리엄슨(Williamson)의 특성요인 상담 6단계</h4>
<ol>
  <li><strong>분석(Analysis):</strong> 내담자에 대한 정보 수집</li>
  <li><strong>종합(Synthesis):</strong> 수집된 정보의 요약 정리</li>
  <li><strong>진단(Diagnosis):</strong> 문제의 원인 파악</li>
  <li><strong>예언(Prognosis):</strong> 문제 해결의 가능성 예측</li>
  <li><strong>상담(Counseling):</strong> 적절한 개입과 조력</li>
  <li><strong>추수지도(Follow-up):</strong> 상담 후 적응 확인</li>
</ol>`
          },
          {
            title: '로저스의 인간중심 상담',
            content: `<h4>인간중심 상담 (Person-Centered Counseling)</h4>
<p>칼 로저스(Carl Rogers)가 개발한 비지시적 상담 이론으로, 내담자의 자기실현 경향성을 신뢰합니다.</p>
<h4>핵심 조건 (필요충분조건)</h4>
<ul>
  <li><strong>무조건적 긍정적 존중:</strong> 내담자를 조건 없이 수용하고 존중</li>
  <li><strong>공감적 이해:</strong> 내담자의 내적 준거 틀로 세상을 이해</li>
  <li><strong>일치성(진솔성):</strong> 상담자가 진정성 있고 투명하게 행동</li>
</ul>
<h4>주요 개념</h4>
<ul>
  <li><strong>자기실현 경향성:</strong> 인간은 자신의 잠재력을 실현하려는 선천적 동기를 가짐</li>
  <li><strong>자기개념:</strong> 자신에 대한 지각과 신념의 조직화된 체계</li>
  <li><strong>경험과 자기개념의 불일치:</strong> 심리적 부적응의 원인</li>
  <li><strong>충분히 기능하는 사람:</strong> 경험에 개방적이고, 실존적 삶을 영위하는 사람</li>
</ul>`
          },
          {
            title: '엘리스의 합리정서행동치료(REBT)',
            content: `<h4>합리정서행동치료 (REBT)</h4>
<p>앨버트 엘리스(Albert Ellis)가 개발한 인지적 상담 이론으로, 비합리적 신념이 정서적 문제를 유발한다고 봅니다.</p>
<h4>ABCDE 모델</h4>
<ul>
  <li><strong>A (Activating event):</strong> 선행사건 - 촉발 사건</li>
  <li><strong>B (Belief):</strong> 신념 체계 - 합리적/비합리적 신념</li>
  <li><strong>C (Consequence):</strong> 결과 - 정서적, 행동적 결과</li>
  <li><strong>D (Disputing):</strong> 논박 - 비합리적 신념에 대한 도전</li>
  <li><strong>E (Effect):</strong> 효과 - 새로운 합리적 신념과 정서</li>
</ul>
<h4>비합리적 신념의 특징</h4>
<ul>
  <li><strong>당위적 사고:</strong> "반드시 ~해야 한다" (musturbation)</li>
  <li><strong>파국화:</strong> "이것은 끔찍하다" (awfulizing)</li>
  <li><strong>좌절에 대한 낮은 인내력:</strong> "나는 견딜 수 없다"</li>
  <li><strong>자기비하:</strong> "나는 무가치한 사람이다"</li>
</ul>`
          },
          {
            title: '행동주의 상담',
            content: `<h4>행동주의 상담 이론</h4>
<p>관찰 가능한 행동에 초점을 맞추고, 학습 원리를 적용하여 부적응 행동을 수정하는 접근입니다.</p>
<h4>주요 기법</h4>
<ul>
  <li><strong>체계적 둔감법:</strong> 불안 위계표를 작성하고 이완 훈련을 통해 점진적으로 불안 감소</li>
  <li><strong>강화(Reinforcement):</strong> 바람직한 행동에 보상을 제공하여 행동 빈도 증가</li>
  <li><strong>소거(Extinction):</strong> 강화를 중단하여 부적응 행동 감소</li>
  <li><strong>모델링:</strong> 관찰학습을 통한 새로운 행동 습득 (반두라)</li>
  <li><strong>자기주장훈련:</strong> 적절한 자기표현 능력 향상</li>
  <li><strong>토큰경제:</strong> 토큰을 이용한 보상 체계</li>
  <li><strong>혐오치료:</strong> 부적응 행동에 불쾌 자극을 연합</li>
</ul>
<h4>크럼볼츠(Krumboltz)의 사회학습 진로이론</h4>
<ul>
  <li>유전적 요인과 특별한 능력</li>
  <li>환경적 조건과 사건</li>
  <li>학습경험 (도구적 학습, 연합적 학습)</li>
  <li>과제접근기술</li>
</ul>
<h4>크럼볼츠의 계획된 우연 이론 (2009)</h4>
<p>우연한 사건이 진로발달에 중요한 역할을 하며, 우연을 기회로 만드는 5가지 기술이 필요합니다:</p>
<ol>
  <li><strong>호기심(Curiosity):</strong> 새로운 학습 기회 탐색</li>
  <li><strong>인내(Persistence):</strong> 좌절에도 불구하고 노력 지속</li>
  <li><strong>유연성(Flexibility):</strong> 태도와 상황을 변화시키는 의지</li>
  <li><strong>낙관성(Optimism):</strong> 새로운 기회가 가능하다는 긍정적 태도</li>
  <li><strong>위험감수(Risk-taking):</strong> 불확실한 상황에서도 행동하는 용기</li>
</ol>`
          },
          {
            title: '벡의 인지치료',
            content: `<h4>벡의 인지치료 (Cognitive Therapy)</h4>
<p>아론 벡(Aaron Beck)이 개발한 인지적 상담 이론으로, <strong>인지적 오류</strong>와 <strong>자동적 사고</strong>의 수정을 목표로 합니다.</p>
<h4>인지삼제 (Cognitive Triad)</h4>
<p>우울증 환자에게 공통적으로 나타나는 3가지 부정적 인지:</p>
<ol>
  <li><strong>자기 자신에 대한 부정적 사고:</strong> "나는 무능하다"</li>
  <li><strong>세상(환경)에 대한 부정적 사고:</strong> "세상은 불공평하다"</li>
  <li><strong>미래에 대한 부정적 사고:</strong> "앞으로도 나아지지 않을 것이다"</li>
</ol>
<h4>인지 구조의 3수준</h4>
<ul>
  <li><strong>핵심신념(Core Belief/Schema):</strong> 가장 깊은 수준, 어린 시절 형성된 근본적 믿음 ("나는 사랑받을 자격이 없다")</li>
  <li><strong>중간신념(Intermediate Belief):</strong> 규칙, 태도, 가정 ("완벽하지 않으면 실패다")</li>
  <li><strong>자동적 사고(Automatic Thought):</strong> 특정 상황에서 자동으로 떠오르는 사고 (가장 표면적)</li>
</ul>
<h4>주요 인지적 오류</h4>
<table>
  <tr><th>인지적 오류</th><th>설명</th><th>예시</th></tr>
  <tr><td><strong>이분법적 사고</strong></td><td>흑백논리, 전부 아니면 전무</td><td>"완벽하지 않으면 실패"</td></tr>
  <tr><td><strong>과잉일반화</strong></td><td>한두 번의 사건으로 일반화</td><td>"항상 나만 안 돼"</td></tr>
  <tr><td><strong>선택적 추상화</strong></td><td>부정적 측면만 선택적으로 주목</td><td>칭찬 10개, 비판 1개 중 비판만 기억</td></tr>
  <tr><td><strong>확대/축소</strong></td><td>부정은 확대, 긍정은 축소</td><td>실수는 크게, 성공은 운으로</td></tr>
  <tr><td><strong>개인화</strong></td><td>관련 없는 사건을 자기 탓으로</td><td>"그 사람이 화난 건 내 때문"</td></tr>
  <tr><td><strong>재앙화(파국화)</strong></td><td>최악의 결과를 예상</td><td>"면접 망하면 인생 끝"</td></tr>
  <tr><td><strong>감정적 추론</strong></td><td>감정을 근거로 현실 판단</td><td>"불안하니까 위험한 거야"</td></tr>
  <tr><td><strong>당위적 사고</strong></td><td>"~해야 한다"는 경직된 사고</td><td>"나는 반드시 성공해야 한다"</td></tr>
</table>
<h4>상담 기법</h4>
<ul>
  <li><strong>소크라테스식 질문:</strong> 질문을 통해 인지적 오류 스스로 발견</li>
  <li><strong>사고 기록지:</strong> 상황-자동적사고-감정-대안적사고 기록</li>
  <li><strong>행동 실험:</strong> 부정적 예측을 실제로 검증</li>
  <li><strong>인지적 재구조화:</strong> 왜곡된 사고를 합리적으로 교정</li>
</ul>`
          },
          {
            title: '게슈탈트 상담',
            content: `<h4>게슈탈트 상담 (Gestalt Therapy)</h4>
<p>프리츠 펄스(Fritz Perls)가 개발한 상담 이론으로, '지금-여기(here and now)'에서의 알아차림을 강조합니다.</p>
<h4>핵심 개념</h4>
<ul>
  <li><strong>알아차림(Awareness):</strong> 현재 순간의 감각, 감정, 사고를 자각</li>
  <li><strong>접촉(Contact):</strong> 환경과의 상호작용</li>
  <li><strong>미해결 과제:</strong> 완결되지 않은 경험이 현재 행동에 영향</li>
  <li><strong>전경과 배경:</strong> 의미 있는 것이 전경으로, 나머지는 배경으로</li>
</ul>
<h4>주요 기법</h4>
<ul>
  <li><strong>빈 의자 기법:</strong> 빈 의자에 대상을 놓고 대화하는 역할극</li>
  <li><strong>실험:</strong> 새로운 행동을 시도해보는 체험적 활동</li>
  <li><strong>과장법:</strong> 특정 행동이나 감정을 과장하여 알아차림 증진</li>
  <li><strong>반대로 하기:</strong> 평소와 반대되는 행동을 시도</li>
  <li><strong>나 언어 사용:</strong> "나는 ~한다"로 책임감 표현</li>
</ul>`
          }
        ]
      },
      {
        title: '직업상담 이론 II - 추가 주요 이론',
        topics: [
          {
            title: '정신분석적 상담 (프로이트)',
            content: `<h4>프로이트의 정신분석 이론</h4>
<p>지그문트 프로이트(Sigmund Freud)가 창시한 최초의 체계적 심리치료 이론으로, <strong>무의식</strong>의 역할을 강조합니다.</p>
<h4>의식의 3수준</h4>
<ul>
  <li><strong>의식(Conscious):</strong> 현재 자각하고 있는 정신 내용</li>
  <li><strong>전의식(Preconscious):</strong> 노력하면 의식으로 떠올릴 수 있는 내용</li>
  <li><strong>무의식(Unconscious):</strong> 억압된 충동, 욕구, 기억 (빙산의 수면 아래 대부분)</li>
</ul>
<h4>성격 구조</h4>
<ul>
  <li><strong>원초아(Id):</strong> 쾌락 원칙, 본능적 충동, 즉각적 만족 추구</li>
  <li><strong>자아(Ego):</strong> 현실 원칙, 원초아와 초자아를 중재, 적응적 기능</li>
  <li><strong>초자아(Superego):</strong> 도덕 원칙, 양심과 자아이상, 사회적 규범 내면화</li>
</ul>
<h4>심리성적 발달단계</h4>
<ol>
  <li><strong>구강기(0~1세):</strong> 빨기, 물기 등 구강 자극으로 만족</li>
  <li><strong>항문기(1~3세):</strong> 배변훈련, 통제와 자율성</li>
  <li><strong>남근기(3~6세):</strong> 오이디푸스/엘렉트라 콤플렉스</li>
  <li><strong>잠복기(6~12세):</strong> 성적 충동 잠복, 지적 활동에 집중</li>
  <li><strong>생식기(12세~):</strong> 성숙한 성적 관심, 이성 관계 형성</li>
</ol>
<h4>주요 방어기제</h4>
<table>
  <tr><th>방어기제</th><th>설명</th><th>예시</th></tr>
  <tr><td><strong>억압</strong></td><td>위협적 생각/감정을 무의식으로 밀어냄</td><td>충격적 사건 기억 못함</td></tr>
  <tr><td><strong>투사</strong></td><td>자신의 감정을 타인에게 귀인</td><td>"그 사람이 나를 싫어해"</td></tr>
  <tr><td><strong>합리화</strong></td><td>그럴듯한 이유로 정당화</td><td>"포도가 시다"(여우와 포도)</td></tr>
  <tr><td><strong>반동형성</strong></td><td>무의식과 반대되는 행동 표현</td><td>미움→과잉친절</td></tr>
  <tr><td><strong>승화</strong></td><td>충동을 사회적으로 수용 가능한 형태로 전환</td><td>공격성→운동선수</td></tr>
  <tr><td><strong>퇴행</strong></td><td>이전 발달단계로 되돌아감</td><td>동생 태어나면 아기짓</td></tr>
  <tr><td><strong>전치(전위)</strong></td><td>감정 대상을 안전한 대상으로 바꿈</td><td>상사에게 화→가족에게 화풀이</td></tr>
  <tr><td><strong>부정(부인)</strong></td><td>고통스러운 현실을 인정하지 않음</td><td>사망 소식 거부</td></tr>
  <tr><td><strong>보상</strong></td><td>한 영역의 약점을 다른 영역에서 만회</td><td>공부 약→운동 잘</td></tr>
  <tr><td><strong>동일시</strong></td><td>타인의 특성을 자기 것으로 내면화</td><td>존경하는 사람 모방</td></tr>
</table>
<h4>정신분석적 상담 기법</h4>
<ul>
  <li><strong>자유연상:</strong> 떠오르는 생각을 검열 없이 자유롭게 말하기</li>
  <li><strong>꿈의 분석:</strong> 현재몽(기억하는 내용) → 잠재몽(무의식적 의미) 해석</li>
  <li><strong>전이 분석:</strong> 과거 중요 인물에 대한 감정이 상담자에게 전이되는 현상 분석</li>
  <li><strong>저항 분석:</strong> 무의식적 내용 노출을 회피하는 현상 탐색</li>
  <li><strong>해석:</strong> 무의식적 의미를 의식 수준으로 가져오는 작업</li>
</ul>`
          },
          {
            title: '아들러의 개인심리학',
            content: `<h4>아들러의 개인심리학 (Individual Psychology)</h4>
<p>알프레드 아들러(Alfred Adler)는 인간을 <strong>사회적 존재</strong>로 보고, 열등감 극복과 사회적 관심을 강조했습니다.</p>
<h4>핵심 개념</h4>
<ul>
  <li><strong>열등감과 보상:</strong> 인간은 본래 열등감을 느끼며, 이를 극복하려는 우월성 추구가 성장의 동력</li>
  <li><strong>열등감 콤플렉스:</strong> 열등감이 과도하여 정상적 보상이 이루어지지 않는 상태</li>
  <li><strong>우월성 콤플렉스:</strong> 열등감을 과잉보상하여 허세, 과시적 행동을 보이는 상태</li>
  <li><strong>가상적 목적론:</strong> 인간은 과거가 아닌 <strong>미래 목표</strong>에 의해 동기화됨 (프로이트의 결정론과 대비)</li>
  <li><strong>사회적 관심(Gemeinschaftsgefühl):</strong> 타인에 대한 관심과 공동체 의식 → 정신건강의 핵심 지표</li>
  <li><strong>생활양식(Lifestyle):</strong> 개인의 독특한 삶의 패턴, 4~5세경 형성</li>
  <li><strong>창조적 자아:</strong> 유전과 환경을 능동적으로 해석하고 활용하는 주체적 힘</li>
</ul>
<h4>생활양식의 4유형</h4>
<table>
  <tr><th>유형</th><th>사회적 관심</th><th>활동 수준</th><th>특징</th></tr>
  <tr><td><strong>지배형</strong></td><td>낮음</td><td>높음</td><td>독단적, 공격적</td></tr>
  <tr><td><strong>획득형(기대형)</strong></td><td>낮음</td><td>낮음</td><td>의존적, 수동적, 기생적</td></tr>
  <tr><td><strong>회피형</strong></td><td>낮음</td><td>낮음</td><td>문제 회피, 위축, 고립</td></tr>
  <tr><td><strong>사회적 유용형</strong></td><td>높음</td><td>높음</td><td>건강하고 성숙한 유형 (이상적)</td></tr>
</table>
<h4>출생순위의 영향</h4>
<ul>
  <li><strong>맏이:</strong> 책임감, 보수적, 권위적 (동생 출생 시 '폐위' 경험)</li>
  <li><strong>둘째:</strong> 경쟁적, 야망적, 맏이를 따라잡으려는 경향</li>
  <li><strong>막내:</strong> 응석받이 가능성, 독특한 방향 추구</li>
  <li><strong>독자:</strong> 관심의 중심, 사회적 관계 형성에 어려움 가능</li>
</ul>
<h4>상담 기법</h4>
<ul>
  <li><strong>격려(Encouragement):</strong> 내담자의 강점과 자원을 인정, 용기 부여 (가장 핵심적 기법)</li>
  <li><strong>초기기억 분석:</strong> 가장 오래된 기억을 통해 생활양식 파악</li>
  <li><strong>가족구도 분석:</strong> 형제 관계, 출생순위를 통한 생활양식 탐색</li>
  <li><strong>"마치 ~인 것처럼" 기법:</strong> 원하는 모습처럼 행동해보기 (as if 기법)</li>
  <li><strong>수프에 침 뱉기:</strong> 부적응적 행동의 숨은 목적을 자각시켜 그 매력을 잃게 함</li>
  <li><strong>역설적 의도:</strong> 증상을 의도적으로 과장하여 통제감 회복</li>
</ul>`
          },
          {
            title: '글래서의 현실치료',
            content: `<h4>글래서의 현실치료 (Reality Therapy)</h4>
<p>윌리엄 글래서(William Glasser)가 개발한 이론으로, <strong>선택이론</strong>에 기반하여 현재 행동과 책임을 강조합니다.</p>
<h4>선택이론 (Choice Theory)</h4>
<p>모든 행동은 자신의 <strong>선택</strong>이며, 외부가 아닌 내부(기본 욕구)에서 동기화된다는 이론입니다. 타인의 행동을 통제할 수 없고 자신의 행동만 통제할 수 있습니다.</p>
<h4>5가지 기본 욕구</h4>
<ol>
  <li><strong>생존(Survival):</strong> 음식, 주거, 안전, 건강 (유일한 생리적 욕구)</li>
  <li><strong>사랑과 소속(Love & Belonging):</strong> 대인관계, 가족, 소속감</li>
  <li><strong>힘/성취(Power):</strong> 인정, 성취, 자존감, 경쟁</li>
  <li><strong>자유(Freedom):</strong> 자율성, 독립성, 선택의 자유</li>
  <li><strong>즐거움(Fun):</strong> 놀이, 유머, 학습의 즐거움</li>
</ol>
<h4>전행동(Total Behavior) 개념</h4>
<p>모든 행동은 4가지 구성요소로 이루어져 있습니다 (자동차의 4바퀴 비유):</p>
<ul>
  <li><strong>활동하기(Acting):</strong> 외현적 행동 → <em>직접 통제 가능 (앞바퀴)</em></li>
  <li><strong>생각하기(Thinking):</strong> 인지 → <em>직접 통제 가능 (앞바퀴)</em></li>
  <li><strong>느끼기(Feeling):</strong> 감정 → 간접적 통제 (뒷바퀴)</li>
  <li><strong>신체반응(Physiology):</strong> 생리 반응 → 간접적 통제 (뒷바퀴)</li>
</ul>
<p>★ 핵심: 활동하기와 생각하기(앞바퀴)를 바꾸면 느끼기와 신체반응(뒷바퀴)도 변화합니다.</p>
<h4>WDEP 체계</h4>
<ul>
  <li><strong>W (Want/바람):</strong> "무엇을 원하십니까?" - 바람, 욕구, 지각 탐색</li>
  <li><strong>D (Doing/행동):</strong> "지금 무엇을 하고 있습니까?" - 현재 행동과 방향 탐색</li>
  <li><strong>E (Evaluation/평가):</strong> "지금 하는 것이 원하는 것을 얻는 데 도움이 됩니까?" - 자기 평가 (핵심)</li>
  <li><strong>P (Planning/계획):</strong> 변화를 위한 실행 계획 수립</li>
</ul>
<h4>좋은 계획의 조건: SAMI²C³</h4>
<p>Simple(단순), Attainable(달성가능), Measurable(측정가능), Immediate(즉시실행), Involved(관여), Controlled(통제가능), Committed(헌신), Continuous(지속적)</p>`
          },
          {
            title: '해결중심 단기상담',
            content: `<h4>해결중심 단기상담 (Solution-Focused Brief Therapy, SFBT)</h4>
<p>드 셰이저(Steve de Shazer)와 인수 김 버그(Insoo Kim Berg)가 개발한 단기 상담 모델로, <strong>문제가 아닌 해결</strong>에 초점을 맞춥니다.</p>
<h4>기본 가정</h4>
<ul>
  <li>변화는 불가피하며 항상 일어나고 있다</li>
  <li>내담자는 자신의 문제 해결에 필요한 <strong>강점과 자원</strong>을 이미 가지고 있다</li>
  <li>작은 변화가 큰 변화를 이끈다 (눈덩이 효과)</li>
  <li>문제의 원인을 알 필요 없이 해결 가능하다</li>
  <li><strong>효과가 있으면 계속하고, 효과가 없으면 다른 것을 하라</strong></li>
  <li>문제가 항상 일어나는 것은 아니다 (예외는 반드시 존재)</li>
</ul>
<h4>핵심 질문 기법</h4>
<ul>
  <li><strong>기적질문:</strong> "오늘 밤 기적이 일어나 문제가 해결되었다면, 내일 아침 무엇이 달라져 있을까요?"</li>
  <li><strong>예외질문:</strong> "문제가 일어나지 않았던 때는 언제였나요? 그때 무엇이 달랐나요?"</li>
  <li><strong>척도질문:</strong> "1~10점 중 현재 상태는 몇 점? 1점 올리려면 무엇이 필요할까요?"</li>
  <li><strong>대처질문:</strong> "이렇게 힘든 상황에서 어떻게 견뎌오셨나요?" (내담자 강점 발견)</li>
  <li><strong>관계성질문:</strong> "주변 사람들은 당신이 어떻게 달라졌다고 말할까요?"</li>
  <li><strong>첫 회기 전 변화 질문:</strong> "상담 예약 후부터 지금까지 달라진 것이 있나요?"</li>
</ul>
<h4>내담자 유형과 상담 전략</h4>
<table>
  <tr><th>유형</th><th>특징</th><th>전략</th></tr>
  <tr><td><strong>방문형</strong></td><td>자발적 동기 없음 (타인에 의해 의뢰)</td><td>칭찬, 관계 형성에 집중</td></tr>
  <tr><td><strong>불평형</strong></td><td>문제 인식 있으나 자신의 역할 인식 부족</td><td>관찰 과제 부여</td></tr>
  <tr><td><strong>고객형</strong></td><td>문제 인식 + 해결 의지 있음</td><td>행동 과제 부여</td></tr>
</table>
<h4>상담 구조: 메시지 전달</h4>
<ul>
  <li><strong>칭찬:</strong> 내담자의 강점과 노력 인정</li>
  <li><strong>연결문(브릿지):</strong> 칭찬과 과제를 연결하는 근거</li>
  <li><strong>과제:</strong> 관찰 과제 또는 행동 과제 제시</li>
</ul>`
          },
          {
            title: '교류분석(TA)과 실존주의 상담',
            content: `<h4>교류분석 (Transactional Analysis, TA)</h4>
<p>에릭 번(Eric Berne)이 개발한 성격이론 및 상담 접근으로, <strong>자아상태</strong>와 대인 교류 패턴을 분석합니다.</p>
<h4>자아상태 (PAC 모델)</h4>
<ul>
  <li><strong>부모 자아(Parent, P):</strong> 부모에게 배운 가치관, 규칙
    <ul><li>양육적 부모(NP): 돌봄, 격려</li><li>비판적 부모(CP): 비판, 통제</li></ul></li>
  <li><strong>성인 자아(Adult, A):</strong> 객관적, 합리적 사고와 현실적 판단 (가장 바람직한 상태)</li>
  <li><strong>아동 자아(Child, C):</strong> 어린 시절의 감정과 충동
    <ul><li>자유로운 아동(FC): 자발적, 창의적</li><li>순응적 아동(AC): 순종적, 의존적</li></ul></li>
</ul>
<h4>교류(Transaction)의 유형</h4>
<ul>
  <li><strong>상보교류(Complementary):</strong> 기대한 자아상태에서 반응 → 원활한 의사소통 지속</li>
  <li><strong>교차교류(Crossed):</strong> 기대하지 않은 자아상태에서 반응 → 의사소통 단절/갈등</li>
  <li><strong>이면교류(Ulterior):</strong> 표면적 메시지와 이면적 메시지가 다름 → 게임의 원인</li>
</ul>
<h4>인생태도(Life Position) 4유형</h4>
<table>
  <tr><th>유형</th><th>태도</th><th>특징</th></tr>
  <tr><td><strong>I'm OK, You're OK</strong></td><td>자타 긍정</td><td>건강한 인생태도 (목표)</td></tr>
  <tr><td><strong>I'm OK, You're not OK</strong></td><td>자기 긍정, 타인 부정</td><td>투사적, 비난적, 우월감</td></tr>
  <tr><td><strong>I'm not OK, You're OK</strong></td><td>자기 부정, 타인 긍정</td><td>열등감, 우울, 의존</td></tr>
  <tr><td><strong>I'm not OK, You're not OK</strong></td><td>자타 부정</td><td>절망적, 무기력, 포기</td></tr>
</table>
<h4>기타 주요 개념</h4>
<ul>
  <li><strong>스트로크(Stroke):</strong> 상대를 인정하는 자극 (긍정적/부정적, 조건적/무조건적)</li>
  <li><strong>인생각본(Life Script):</strong> 어린 시절에 무의식적으로 형성된 인생 계획</li>
  <li><strong>게임(Game):</strong> 이면교류에 기반한 반복적 대인관계 패턴</li>
</ul>
<hr/>
<h4>실존주의 상담</h4>
<p>빅터 프랭클(Frankl), 롤로 메이(May), 어빈 얄롬(Yalom)이 대표적입니다.</p>
<h4>실존적 핵심 주제 (얄롬의 4가지 궁극적 관심사)</h4>
<ul>
  <li><strong>죽음:</strong> 죽음의 자각이 삶의 의미를 부여하고 참된 삶을 살게 함</li>
  <li><strong>자유와 책임:</strong> 인간은 선택의 자유가 있으며, 그에 따른 책임도 짐</li>
  <li><strong>실존적 고독:</strong> 궁극적으로 타인과 완전히 합일될 수 없는 존재</li>
  <li><strong>무의미:</strong> 삶에는 미리 정해진 의미가 없으므로, 스스로 의미를 창조해야 함</li>
</ul>
<h4>프랭클의 로고테라피(Logotherapy) 기법</h4>
<ul>
  <li><strong>역설적 의도:</strong> 두려워하는 것을 의도적으로 행하거나 바라기 (예: 불면증 환자에게 "잠들지 않으려고 노력하세요")</li>
  <li><strong>탈숙고(Dereflection):</strong> 과도한 자기관찰/분석에서 벗어나 외부 대상에 주의 전환</li>
  <li><strong>소크라테스식 대화:</strong> 질문을 통해 스스로 삶의 의미를 발견하도록 안내</li>
  <li><strong>의미에의 의지:</strong> 인간의 가장 근본적 동기는 삶의 의미를 찾는 것</li>
</ul>`
          }
        ]
      },
      {
        title: '직업상담 기법',
        topics: [
          {
            title: '생애진로사정(LCA)',
            content: `<h4>생애진로사정 개요</h4>
<p><strong>아들러(Adler)의 개인심리학</strong>에 기초를 둔 생애진로사정은 상담자와 내담자가 처음 만났을 때 이용할 수 있는 <strong>구조화된 면접기법</strong>이자 <strong>초기단계 면접법</strong>이며, 검사 실시와 해석의 예비단계입니다.</p>
<p>생애진로사정을 통해 파악할 수 있는 것:</p>
<ol>
  <li>내담자의 <strong>직업경험과 교육수준</strong></li>
  <li>내담자의 <strong>기술과 유능성</strong></li>
  <li>내담자의 <strong>가치관 및 자기인식 정도</strong></li>
</ol>
<h4>생애진로사정의 특징</h4>
<ul>
  <li>작업자, 학습자, 개인의 역할 등 <strong>다양한 생애역할</strong>에 대한 정보를 탐색</li>
  <li>진로사정, 전형적인 하루, 강점과 장애, 요약으로 이루어짐</li>
  <li><strong>비판단적이고 비위협적인 대화</strong>로 내담자와 긍정적 관계를 형성하는 데 도움</li>
  <li>내담자의 진로계획을 향상시킨다</li>
  <li class="exam-highlight">인쇄물이나 소책자, 지필도구 등의 <strong>표준화된 진로사정 도구는 가급적 사용을 삼간다</strong></li>
</ul>
<h4 class="exam-important">생애진로사정의 구조 (4단계)</h4>
<table>
  <tr><th>단계</th><th>내용</th><th>핵심 파악 요소</th></tr>
  <tr><td><strong>1. 진로사정</strong></td><td>직업경험, 교육·훈련, 여가활동</td><td>내담자의 직업경험(시간제·전임, 유·무보수), 교육 또는 훈련과정과 관련된 문제들, 여가활동</td></tr>
  <tr><td><strong>2. 전형적인 하루</strong></td><td>생활 조직 방식을 시간 흐름에 따라 체계적 기술</td><td>의존적인지 또는 독립적인지, 자발적인지 또는 체계적인지</td></tr>
  <tr><td><strong>3. 강점과 장애</strong></td><td>문제·환경적 장애 탐구</td><td>극복을 위한 대처차원이나 잠재력 탐구</td></tr>
  <tr><td><strong>4. 요약</strong></td><td>자기인식 증진</td><td>내담자 스스로 자기인식을 증진, 문제해결 및 장애극복을 위해 목표달성계획 수립</td></tr>
</table>`
          },
          {
            title: '직업가계도(Genogram)',
            content: `<h4>직업가계도 개요</h4>
<p>구조화된 면담법의 <strong>직업가계도</strong>는 그 자체로 내담자의 직업선택을 위한 도구로 사용되는 것이 아닌, 내담자의 <strong>생애진로사정을 위한 도구</strong>로 사용됩니다.</p>
<ul>
  <li>내담자의 직업의식, 직업선택, 직업태도에 대한 <strong>가족의 영향력</strong>을 분석하는 대표적인 <strong>질적 평가기법</strong></li>
  <li>경력상담 시 내담자의 가족이나 선조들의 직업 특징에 대한 <strong>시각적 표상</strong>을 얻기 위해 도표를 만드는 방식</li>
  <li>직업가계도를 통해 <strong>가족의 미완성된 과제</strong>를 발견할 수 있다</li>
</ul>
<h4 class="exam-important">다그레이(Dagley)의 직업가계도 작성 시 관심 요인</h4>
<ol>
  <li><strong>3~4세대</strong>의 대표적 직업</li>
  <li>가족 성원의 직업에 전형적인 <strong>지위와 가치의 서열화</strong></li>
  <li>가족 성원들이 직업을 선택 또는 바꾸었을 때 나타난 <strong>진로선택 형태와 방법</strong></li>
  <li>가족의 <strong>경제적 기대와 압력</strong></li>
  <li>가족의 <strong>일의 가치</strong></li>
  <li>내담자가 성장할 때의 <strong>또래집단 상황</strong></li>
</ol>`
          },
          {
            title: '직업선택의 결정모형',
            content: `<h4>직업선택의 결정모형 개요</h4>
<p>직업상담기법으로 대안개발과 의사결정에 관한 <strong>직업선택의 결정모형</strong>을 제시하였습니다. 크게 기술적 모형과 처방적 모형으로 구분됩니다.</p>
<h4 class="exam-important">(1) 기술적 직업결정 모형</h4>
<p>타이드만과 오하라, 힐튼, 브룸, 슈, 플레쳐 등이 제시</p>
<table>
  <tr><th>학자</th><th>핵심 내용</th></tr>
  <tr><td><strong>타이드만과 오하라<br/>(Tiedeman & O'Hara)</strong></td><td>자기정체감 분화, 발달과업 수행, 심리사회적 위기 해결의 지속적인 과정. 자기정체감을 지속적으로 구별해 내고 발달과제를 처리하는 과정</td></tr>
  <tr><td><strong>힐튼(Hilton)</strong></td><td>인간이 복잡한 정보에 접근하게 되는 구조에 근거 → <strong>전제단계 - 계획단계 - 인지부조화단계</strong></td></tr>
  <tr><td><strong>브룸(Vroom)</strong></td><td>직업결정요인 → <strong>균형, 기대, 힘</strong></td></tr>
  <tr><td><strong>슈(Hsu)</strong></td><td>직업결정자 → 선택과 목표 사이의 <strong>불균형을 극소화</strong> 시키려는 시도를 가정</td></tr>
  <tr><td><strong>플레쳐(Fletcher)</strong></td><td>개념학습에 대한 생각에 근거 → <strong>'특수성 대 일반성', '구체성 대 추상성'</strong></td></tr>
</table>
<h4 class="exam-important">(2) 처방적 직업결정 모형</h4>
<p>카츠, 겔라트, 칼도와 쥐토우스키가 제시 (이름이 'ㄱ','ㅋ'으로 시작)</p>
<table>
  <tr><th>학자</th><th>핵심 내용</th></tr>
  <tr><td><strong>카츠(Katz)</strong></td><td>특성에 맞는 대안을 선택하고 그 대안이 제공하는 보수에 따라 평가하는 것을 주장</td></tr>
  <tr><td><strong>겔라트(Gelatt)</strong></td><td>직업선택을 <strong>결과보다 과정 중시</strong>. 정보체계 설명 → <strong>예언적 체계, 가치체계, 결정준거</strong></td></tr>
  <tr><td><strong>칼도와 쥐토우스키<br/>(Kaldor-Zytowski)</strong></td><td>직업결정자가 대안에 대해 <strong>무제한 정보</strong>를 갖게 된다고 주장</td></tr>
</table>
<h4>겔라트(Gelatt)의 진로의사결정 과정</h4>
<p><strong>목적의식 → 정보수집 → 대안열거 → 대안결과예측 → 대안실현가능성예측 → 가치평가 → 의사결정 → 평가 및 재투입</strong></p>`
          },
          {
            title: '6개의 생각하는 모자',
            content: `<h4>의사결정의 유형 - 하렌(Harren)</h4>
<p>하렌(Harren)의 진로의사결정 유형:</p>
<ul>
  <li><strong>합리적 유형</strong> : 논리적으로 정보를 수집하고 체계적으로 의사결정</li>
  <li><strong>직관적 유형</strong> : 감정과 직감에 의존하여 결정</li>
  <li><strong>의존적 유형</strong> : 타인의 기대나 의견에 의존하여 결정</li>
</ul>
<h4 class="exam-important">6개의 생각하는 모자</h4>
<p>의사결정의 촉진방법으로 제시된 기법입니다.</p>
<table>
  <tr><th>모자 색</th><th>의미</th><th>특징</th></tr>
  <tr><td><strong>백색</strong></td><td>사실</td><td>본인과 직업들에 대한 <strong>사실들만</strong> 고려한다</td></tr>
  <tr><td><strong>적색</strong></td><td>직관</td><td><strong>직관에 의존</strong>하고, 직감에 따라 행동한다</td></tr>
  <tr><td><strong>흑색</strong></td><td>비관</td><td><strong>비관적, 비판적</strong></td></tr>
  <tr><td><strong>황색</strong></td><td>낙관</td><td><strong>낙관적</strong></td></tr>
  <tr><td><strong>녹색</strong></td><td>창의</td><td>새로운 대안을 찾으려 노력, 문제를 <strong>다른 각도</strong>에서 바라본다</td></tr>
  <tr><td><strong>청색</strong></td><td>합리</td><td><strong>합리적</strong>으로 생각한다 (사회자로서의 역할 반영)</td></tr>
</table>
<p class="exam-tip"><strong>시험 꿀팁:</strong> 6개 생각하는 모자 중 '갈색 모자' 지문이 나오면 무조건 오답!</p>`
          },
          {
            title: '상담면접 기법과 공감',
            content: `<h4 class="exam-important">공감 (감정에 대한 반영)</h4>
<ul>
  <li>내담자가 전달하려는 내용에서 <strong>한 걸음 더 나아가</strong> 그 내면적 감정에 대해 반영하는 것</li>
  <li><strong>객관적 위치</strong>에서 이해</li>
  <li>내담자의 <strong>자기탐욕과 수용을 촉진</strong></li>
</ul>
<h4>공감적 이해의 5가지 수준</h4>
<table>
  <tr><th>수준</th><th>설명</th><th>공감 수준</th></tr>
  <tr><td>수준 1</td><td>별다른 주의를 기울이지 않은 타입, 소통이 못 미침</td><td>매우 낮음</td></tr>
  <tr><td>수준 2</td><td>어느 정도 반응하는 타입, 상대방 감정이나 의사 무시</td><td>낮음</td></tr>
  <tr><td>수준 3</td><td>상호교류적 의사소통 가능</td><td>보통</td></tr>
  <tr><td>수준 4</td><td>상대방보다 더 의사소통 이루어짐</td><td>높음</td></tr>
  <tr><td>수준 5</td><td>상대방의 표면적, 내면적 감정에 정확한 반응</td><td>매우 높음</td></tr>
</table>
<h4 class="exam-important">상담면접의 주요 기법 (6개 이상 암기)</h4>
<p><strong>공감, 요약과 재진술, 반영, 수용, 경청(반영적/적극적), 탐색적 질문(개방적), 명료화, 해석, 직면, 저항의 처리, 침묵의 처리</strong></p>
<h4>경청 (Active Listening)</h4>
<ul>
  <li><strong>수동적 경청:</strong> 조용히 듣기, 고개 끄덕이기, "음", "네" 등</li>
  <li><strong>적극적 경청:</strong> 재진술, 반영, 명료화를 통한 깊은 이해</li>
  <li><strong>비언어적 주의:</strong> 눈맞춤, 몸 기울이기, 개방적 자세</li>
</ul>
<h4>명료화 (Clarification)</h4>
<p>내담자의 모호한 생각과 감정의 표현을 상담사가 분명하게 밝히는 것</p>
<h4>직면 (Confrontation)</h4>
<p>상담사가 내담자로 하여금 자신의 문제에 회피하지 않고 도전하도록 하는 것</p>
<h4>해석 (Interpretation)</h4>
<p>내담자의 행동, 사고, 감정 아래에 있는 무의식적 의미나 패턴을 설명하는 기법</p>`
          },
          {
            title: '상담의 바람직한 목표설정 방향',
            content: `<h4>목표설정의 필요성</h4>
<p>목표설정에 <strong>상담자의 개입이 필요한 이유</strong>는 내담자가 명확하고 구체적인 목표를 설정하도록 돕기 위해서입니다.</p>
<h4 class="exam-important">상담의 바람직한 목표설정 방향</h4>
<ol>
  <li><strong>구체적</strong>이어야 한다</li>
  <li><strong>실현 가능</strong>해야 한다</li>
  <li><strong>내담자가 원하고 바라는 것</strong>이어야 한다</li>
  <li>내담자의 목표는 <strong>상담자의 기술과 양립 가능</strong>해야만 한다</li>
</ol>`
          },
          {
            title: '전이된 오류 정정하기',
            content: `<h4>전이된 오류 정정하기 개요</h4>
<p>내담자의 정보 및 행동에 대한 이해기법으로, <strong>정보의 오류, 한계의 오류, 논리적 오류</strong>의 3가지 유형이 있습니다.</p>
<h4 class="exam-important">3가지 오류 유형</h4>
<table>
  <tr><th>오류 유형</th><th>설명</th><th>세부 항목</th></tr>
  <tr>
    <td><strong>정보의 오류</strong></td>
    <td>충분한 정보를 알고 있다고 잘못 생각하는 경우</td>
    <td>이야기 삭제, 불확실한 인물의 사용, 불분명한 동사의 사용, 참고자료의 불충분, 제한된 어투의 사용</td>
  </tr>
  <tr>
    <td><strong>한계의 오류</strong></td>
    <td>제한된 기회 및 선택에 대한 견해</td>
    <td>예외를 인정하지 않는 것, 불가능을 가정하는 것, 어쩔 수 없음을 가정하는 것</td>
  </tr>
  <tr>
    <td><strong>논리적 오류</strong></td>
    <td>논리적으로 잘못된 추론</td>
    <td>잘못된 인간관계 오류, 마음의 해석, 제한된 일반화</td>
  </tr>
</table>`
          },
          {
            title: '자기보고식 가치사정법',
            content: `<h4>가치사정법 개요</h4>
<p>자기보고식 가치사정법은 <strong>내담자 사정의 가치 사정하기</strong>에 해당합니다.</p>
<h4 class="exam-important">가치사정법 6가지</h4>
<ol>
  <li><strong>체크목록 가치에 순위 매기기</strong></li>
  <li><strong>과거의 선택 회상하기</strong></li>
  <li><strong>절정경험 조사하기</strong></li>
  <li><strong>자유시간과 금전의 사용</strong></li>
  <li><strong>백일몽 말하기</strong></li>
  <li><strong>존경하는 사람 기술하기</strong></li>
</ol>`
          },
          {
            title: '코틀(Cottle)의 원형검사',
            content: `<h4>코틀의 원형검사 개요</h4>
<ul>
  <li>가장 효과적인 <strong>시간전망 개입도구</strong></li>
  <li><strong>과거, 현재, 미래</strong>를 뜻하는 3개의 원을 이용</li>
  <li>원의 크기는 시간차원에 대한 <strong>상대적 친밀감</strong>을 의미</li>
  <li>원의 배치는 시간차원이 각각 어떻게 연관되어 있는지를 나타냄</li>
  <li><strong>방향성, 변별성, 통합성</strong>을 제시</li>
</ul>
<h4 class="exam-important">진로시간전망 개입의 3가지 측면</h4>
<table>
  <tr><th>측면</th><th>설명</th></tr>
  <tr><td><strong>방향성</strong></td><td>미래에 대한 <strong>낙관적인 입장</strong>을 구성</td></tr>
  <tr><td><strong>변별성</strong></td><td>시간차원 내 사건의 강도와 확장의 원리, 미래 계획에 대한 <strong>긍정적 태도를 강화</strong></td></tr>
  <tr><td><strong>통합성</strong></td><td><strong>현재 행동과 미래의 결과</strong>를 연결</td></tr>
</table>
<h4>원의 상대적 배치에 따른 시간 관계성</h4>
<p>흑색(과거), 청색(현재), 적색(미래)을 사용합니다.</p>
<table>
  <tr><th>배치 형태</th><th>시간 관계</th></tr>
  <tr><td>어떤 것도 접해 있지 않은 원</td><td>시간차원의 <strong>고립</strong></td></tr>
  <tr><td>중복되지 않고 경계선에 접해 있는 원</td><td>시간차원의 <strong>연결</strong></td></tr>
  <tr><td>부분적으로 중첩된 원</td><td>시간차원의 <strong>연합</strong></td></tr>
  <tr><td>완전히 중첩된 원</td><td>시간차원의 <strong>통합</strong></td></tr>
</table>
<p class="exam-tip"><strong>참고:</strong> 진로시간전망은 진로에 관한 과거, 현재, 미래의 정신적인 상을 말하며, 직업상담 초기에 하는 것이 좋고, 진로계획에 대한 긍정적 태도의 강화를 목적으로 하며, 직접적인 진로계획 수정을 목적으로 하지 않습니다.</p>`
          },
          {
            title: 'MBTI 성격사정',
            content: `<h4>MBTI (마이어스-브릭스 성격유형검사)</h4>
<p>Myers-Briggs Type Indicator</p>
<ul>
  <li><strong>융(Jung)의 분석심리학</strong>에 의한 심리유형론에 기반</li>
  <li><strong>객관적 검사</strong>이자 <strong>자기보고식의 강제선택</strong> 검사</li>
  <li>내담자가 선호하는 <strong>작업역할, 기능, 환경</strong>을 찾아내는 데 유용</li>
  <li>성격의 <strong>4가지 양극차원</strong>으로 분류</li>
</ul>
<h4 class="exam-important">성격의 4가지 양극차원</h4>
<table>
  <tr><th>차원</th><th>유형</th><th>의미</th></tr>
  <tr><td><strong>에너지 방향</strong></td><td>외향형(E) / 내향형(I)</td><td>세상에 대한 일반적인 태도</td></tr>
  <tr><td><strong>인식 기능</strong></td><td>감각형(S) / 직관형(N)</td><td>지각적 또는 정보수집적 과정</td></tr>
  <tr><td><strong>판단 기능</strong></td><td>사고형(T) / 감정형(F)</td><td>정보를 평가하는 방식</td></tr>
  <tr><td><strong>생활 양식</strong></td><td>판단형(J) / 인식형(P)</td><td>정보박탈(외부 세계에 대한 태도)</td></tr>
</table>`
          }
        ]
      },
      {
        title: '직업상담 과정',
        topics: [
          {
            title: '상담 과정의 단계',
            content: `<h4>직업상담의 5단계</h4>
<ol>
  <li><strong>관계형성 단계</strong>
    <ul>
      <li>라포(rapport) 형성</li>
      <li>상담 구조화 (상담의 목적, 과정, 비밀보장 등 안내)</li>
      <li>내담자의 기대 파악</li>
    </ul>
  </li>
  <li><strong>진단 단계</strong>
    <ul>
      <li>내담자의 문제 파악</li>
      <li>심리검사 실시 (적성, 흥미, 가치관 검사)</li>
      <li>직업경력 및 교육배경 분석</li>
    </ul>
  </li>
  <li><strong>목표설정 단계</strong>
    <ul>
      <li>상담 목표의 구체적 설정</li>
      <li>내담자와 상담자 간 합의</li>
      <li>달성 가능하고 측정 가능한 목표</li>
    </ul>
  </li>
  <li><strong>개입(실행) 단계</strong>
    <ul>
      <li>직업정보 탐색 및 제공</li>
      <li>의사결정 지원</li>
      <li>구직기술 훈련 (이력서, 면접)</li>
    </ul>
  </li>
  <li><strong>평가 및 종결 단계</strong>
    <ul>
      <li>목표 달성 여부 평가</li>
      <li>상담 성과 정리</li>
      <li>추수상담(follow-up) 계획</li>
    </ul>
  </li>
</ol>`
          },
          {
            title: '집단 직업상담',
            content: `<h4>집단상담의 특징</h4>
<ul>
  <li>여러 내담자를 동시에 상담하여 효율적</li>
  <li>구성원 간 상호작용을 통한 학습 효과</li>
  <li>사회적 지지와 보편성 경험</li>
</ul>
<h4>집단상담의 유형</h4>
<ul>
  <li><strong>구직기술 훈련 집단:</strong> 이력서 작성, 면접 기술 등</li>
  <li><strong>진로탐색 집단:</strong> 자기이해, 직업세계 탐색</li>
  <li><strong>직업적응 집단:</strong> 직장생활 적응 지원</li>
  <li><strong>실직자 지원 집단:</strong> 실직 스트레스 관리, 재취업 지원</li>
</ul>
<h4>집단상담의 발달 단계</h4>
<ol>
  <li>초기 단계: 탐색과 오리엔테이션</li>
  <li>과도기 단계: 갈등과 저항</li>
  <li>작업 단계: 응집력과 생산성</li>
  <li>종결 단계: 통합과 마무리</li>
</ol>`
          }
        ]
      }
    ]
  },

  psychology: {
    name: '직업심리학',
    code: 'psychology',
    color: '#8B5CF6',
    icon: 'fa-solid fa-brain',
    description: '직업발달이론, 유형론, 심리검사 등을 학습합니다.',
    chapters: [
      {
        title: '직업발달이론',
        topics: [
          {
            title: 'Super의 진로발달이론',
            content: `<h4>Super의 생애진로발달이론</h4>
<p>Donald Super는 진로발달을 전 생애에 걸친 과정으로 보았으며, 자아개념이 핵심입니다.</p>
<h4>진로발달의 5단계</h4>
<ol>
  <li><strong>성장기 (0~14세):</strong> 자아개념 발달, 욕구와 환상이 지배적</li>
  <li><strong>탐색기 (15~24세):</strong> 학교, 여가활동, 아르바이트를 통한 자기 탐색
    <ul><li>잠정기(15~17) → 전환기(18~21) → 시행기(22~24)</li></ul>
  </li>
  <li><strong>확립기 (25~44세):</strong> 적절한 분야를 찾아 안정적 위치 확보</li>
  <li><strong>유지기 (45~64세):</strong> 획득한 지위를 유지하려는 노력</li>
  <li><strong>쇠퇴기 (65세~):</strong> 은퇴와 새로운 역할 조정</li>
</ol>
<h4>핵심 개념</h4>
<ul>
  <li><strong>진로성숙도:</strong> 개인의 진로발달 수준</li>
  <li><strong>생애역할:</strong> 자녀, 학생, 여가인, 시민, 근로자, 가정관리자</li>
  <li><strong>생애무지개(Life-Career Rainbow):</strong> 생애역할과 발달단계를 통합한 모델</li>
  <li><strong>아치 모형(Archway Model):</strong> 개인적 요인과 환경적 요인의 통합</li>
</ul>`
          },
          {
            title: 'Ginzberg의 진로선택이론',
            content: `<h4>Ginzberg의 진로발달이론</h4>
<p>Ginzberg는 직업선택을 발달적 과정으로 최초 제시했으며, 비가역적이고 타협의 과정이라고 보았습니다.</p>
<h4>진로발달의 3단계</h4>
<ol>
  <li><strong>환상기 (6~11세):</strong> 현실적 제약 없이 욕구에 따라 직업 선호</li>
  <li><strong>잠정기 (11~17세):</strong>
    <ul>
      <li>흥미 단계(11~12): 좋아하는 활동 중심 선택</li>
      <li>능력 단계(13~14): 자신의 능력 고려</li>
      <li>가치 단계(15~16): 직업적 가치관 형성</li>
      <li>전환 단계(17): 현실적 제약 인식</li>
    </ul>
  </li>
  <li><strong>현실기 (17세~성인초기):</strong>
    <ul>
      <li>탐색 단계: 다양한 경험 탐색</li>
      <li>구체화 단계: 직업 범위 좁히기</li>
      <li>특수화 단계: 특정 직업 선택</li>
    </ul>
  </li>
</ol>
<h4>수정된 이론 (1972)</h4>
<p>초기 이론을 수정하여 직업선택은 비가역적이 아니라 개방적이며, 전 생애에 걸친 과정으로 재정의했습니다.</p>`
          },
          {
            title: 'Gottfredson의 제한-타협이론',
            content: `<h4>Gottfredson의 직업포부 발달이론</h4>
<p>직업선택에서 성유형화, 사회적 지위, 자아개념의 역할을 강조합니다.</p>
<h4>직업포부 발달의 4단계</h4>
<ol>
  <li><strong>크기와 힘의 지향 (3~5세):</strong> 성인과 아동의 역할 구분</li>
  <li><strong>성역할 지향 (6~8세):</strong> 성별에 따른 직업 구분</li>
  <li><strong>사회적 가치 지향 (9~13세):</strong> 사회적 지위 인식, 직업의 서열화</li>
  <li><strong>내적 고유자아 지향 (14세~):</strong> 흥미, 능력 등 내적 특성에 기반한 직업 선택</li>
</ol>
<h4>타협(Compromise)의 원리</h4>
<p>직업선택 시 현실적 제약으로 인해 포기하는 순서:</p>
<ol>
  <li>흥미를 가장 먼저 포기</li>
  <li>사회적 지위를 그 다음으로 포기</li>
  <li>성유형을 가장 마지막에 포기 (가장 강하게 유지)</li>
</ol>`
          }
        ]
      },
      {
        title: '직업발달이론 II - 추가 주요 이론',
        topics: [
          {
            title: 'Roe의 욕구이론',
            content: `<h4>Roe의 욕구이론 (Need Theory)</h4>
<p>앤 로(Anne Roe)는 <strong>매슬로우의 욕구위계</strong>와 <strong>어린 시절 부모-자녀 관계</strong>를 직업선택에 연결한 이론입니다.</p>
<h4>부모의 양육태도 3유형</h4>
<table>
  <tr><th>양육태도</th><th>하위유형</th><th>자녀 영향</th><th>직업 선택 경향</th></tr>
  <tr><td><strong>정서적 집중</strong></td><td>과보호, 과잉요구</td><td>타인의 관심/인정 추구</td><td>대인 지향 직업 (서비스, 예술, 경영)</td></tr>
  <tr><td><strong>회피</strong></td><td>거부, 무시/방임</td><td>타인으로부터 회피 경향</td><td>비대인 지향 직업 (과학, 기술, 자연)</td></tr>
  <tr><td><strong>수용</strong></td><td>애정적 수용, 비의도적 수용</td><td>균형 잡힌 발달</td><td>다양한 직업 선택 가능</td></tr>
</table>
<h4>직업분류 체계 (8개 직업군)</h4>
<ol>
  <li>서비스 (Service)</li>
  <li>비즈니스 접촉 (Business Contact)</li>
  <li>조직/관리 (Organization)</li>
  <li>기술 (Technology)</li>
  <li>야외활동 (Outdoor)</li>
  <li>과학 (Science)</li>
  <li>일반문화 (General Culture)</li>
  <li>예술/오락 (Arts & Entertainment)</li>
</ol>
<p>★ 1~3: <strong>대인 지향</strong>(사람 중심) / 4~8: <strong>비대인 지향</strong>(사물/아이디어 중심)</p>`
          },
          {
            title: 'Tiedeman과 O\'Hara의 진로의사결정이론',
            content: `<h4>Tiedeman-O'Hara의 진로의사결정 발달이론</h4>
<p>진로발달을 <strong>의사결정의 연속적 과정</strong>으로 보며, 에릭슨의 심리사회적 발달이론에 영향을 받았습니다.</p>
<h4>의사결정의 2단계</h4>
<h4>1단계: 예상기(Anticipation Period)</h4>
<ol>
  <li><strong>탐색(Exploration):</strong> 가능한 대안들을 폭넓게 탐색</li>
  <li><strong>구체화(Crystallization):</strong> 대안들을 평가하여 범위를 좁힘</li>
  <li><strong>선택(Choice):</strong> 특정 대안을 선택</li>
  <li><strong>명료화(Clarification):</strong> 선택에 대한 확신과 세부 계획 수립</li>
</ol>
<h4>2단계: 실행기(Implementation Period)</h4>
<ol>
  <li><strong>순응(Induction):</strong> 새로운 환경에 적응, 집단 규범 수용</li>
  <li><strong>변혁/쇄신(Reformation):</strong> 자신의 주장을 집단에 반영하려는 시도</li>
  <li><strong>통합(Integration):</strong> 개인과 집단의 목표가 조화, 균형 달성</li>
</ol>
<p>★ 핵심: 자아정체감의 분화(차별화)와 통합을 반복하면서 진로가 발달합니다.</p>`
          },
          {
            title: '사회인지진로이론 (SCCT)',
            content: `<h4>사회인지진로이론 (Social Cognitive Career Theory)</h4>
<p>렌트(Lent), 브라운(Brown), 해킷(Hackett)이 <strong>반두라의 사회학습이론</strong>을 진로 영역에 적용한 이론입니다.</p>
<h4>3가지 핵심 변인</h4>
<ul>
  <li><strong>자기효능감(Self-efficacy):</strong> 특정 과제를 성공적으로 수행할 수 있다는 자신감
    <ul>
      <li>수행성취 경험 (가장 강력한 영향)</li>
      <li>대리경험 (모델 관찰)</li>
      <li>언어적 설득 (격려)</li>
      <li>정서적/생리적 상태</li>
    </ul>
  </li>
  <li><strong>결과기대(Outcome Expectations):</strong> 특정 행동을 수행하면 어떤 결과가 나타날 것이라는 기대</li>
  <li><strong>개인적 목표(Personal Goals):</strong> 특정 활동에 참여하거나 미래 결과를 달성하겠다는 결심</li>
</ul>
<h4>SCCT의 3가지 모델</h4>
<ol>
  <li><strong>흥미발달 모델:</strong> 자기효능감 + 결과기대 → 흥미 형성 → 활동선택 → 수행경험 (순환)</li>
  <li><strong>진로선택 모델:</strong> 흥미 + 자기효능감 + 결과기대 → 선택목표 → 선택행동</li>
  <li><strong>수행 모델:</strong> 능력 + 자기효능감 + 결과기대 + 목표 → 수행수준 → 성취</li>
</ol>
<p>★ 개인 요인(성별, 인종, 건강)과 환경 요인(지지, 장벽)이 자기효능감과 결과기대에 영향을 미칩니다.</p>`
          },
          {
            title: 'Savickas의 진로구성이론',
            content: `<h4>Savickas의 진로구성이론 (Career Construction Theory)</h4>
<p>마크 사비카스(Mark Savickas)가 Super의 이론을 <strong>사회구성주의</strong> 관점에서 재구성한 이론입니다.</p>
<h4>핵심 개념: 진로적응성 (Career Adaptability)</h4>
<p>변화하는 직업세계에 대처하는 심리사회적 자원으로, <strong>4C</strong>로 구성됩니다:</p>
<table>
  <tr><th>차원</th><th>질문</th><th>태도/역량</th></tr>
  <tr><td><strong>관심(Concern)</strong></td><td>"나의 미래가 있는가?"</td><td>미래지향적 태도, 계획성</td></tr>
  <tr><td><strong>통제(Control)</strong></td><td>"누가 나의 미래를 만드는가?"</td><td>자기주도성, 책임감, 결단력</td></tr>
  <tr><td><strong>호기심(Curiosity)</strong></td><td>"미래에 무엇을 하고 싶은가?"</td><td>직업세계 탐색, 개방성</td></tr>
  <tr><td><strong>자신감(Confidence)</strong></td><td>"할 수 있는가?"</td><td>자기효능감, 문제해결력</td></tr>
</table>
<h4>생애주제(Life Theme)</h4>
<p>개인이 일에 부여하는 <strong>주관적 의미</strong>로, 생애 이야기(career story)를 통해 발견됩니다.</p>
<h4>진로상담의 3단계</h4>
<ol>
  <li><strong>구성(Construction):</strong> 내담자의 진로 이야기를 듣고 생애주제 파악</li>
  <li><strong>해체(Deconstruction):</strong> 제한적 가정과 편견을 인식하고 해체</li>
  <li><strong>재구성(Reconstruction):</strong> 새로운 관점으로 진로 이야기를 재구성</li>
</ol>
<p>★ 진로상담 = 내담자가 자신의 <strong>진로 내러티브</strong>(이야기)를 구성하도록 돕는 과정</p>`
          }
        ]
      },
      {
        title: 'Holland 유형론',
        topics: [
          {
            title: 'RIASEC 6유형',
            content: `<h4>Holland의 직업적 성격유형론</h4>
<p>John Holland은 직업적 흥미를 6가지 유형(RIASEC)으로 분류했습니다.</p>
<h4>6가지 유형</h4>
<table>
  <tr><th>유형</th><th>특성</th><th>대표 직업</th></tr>
  <tr><td><strong>R (현실형)</strong></td><td>기계, 도구, 동물, 야외활동 선호</td><td>기술자, 농부, 정비사</td></tr>
  <tr><td><strong>I (탐구형)</strong></td><td>관찰, 학습, 분석, 과학적 탐구</td><td>과학자, 연구원, 의사</td></tr>
  <tr><td><strong>A (예술형)</strong></td><td>창의적 표현, 자유로운 활동</td><td>예술가, 작가, 음악가</td></tr>
  <tr><td><strong>S (사회형)</strong></td><td>타인 돕기, 교육, 봉사</td><td>교사, 상담사, 사회복지사</td></tr>
  <tr><td><strong>E (진취형)</strong></td><td>설득, 리더십, 목표 달성</td><td>경영자, 영업사원, 정치인</td></tr>
  <tr><td><strong>C (관습형)</strong></td><td>자료 정리, 규칙 준수, 체계적 작업</td><td>회계사, 사무원, 은행원</td></tr>
</table>
<h4>육각형 모형</h4>
<p>RIASEC 유형은 정육각형 꼭짓점에 배치되며, 인접한 유형은 유사하고 대각선 유형은 상반됩니다.</p>`
          },
          {
            title: '일관성, 분화, 정체성',
            content: `<h4>Holland 이론의 핵심 개념</h4>
<h4>일관성 (Consistency)</h4>
<ul>
  <li>개인의 유형 코드 간 유사성 정도</li>
  <li>인접 유형 조합(예: RI, AS) → 높은 일관성</li>
  <li>대각 유형 조합(예: RA, SI) → 낮은 일관성</li>
  <li>일관성이 높을수록 직업선택이 예측 가능</li>
</ul>
<h4>분화 (Differentiation)</h4>
<ul>
  <li>6유형 중 특정 유형이 얼마나 두드러지는지</li>
  <li>최고 점수와 최저 점수의 차이로 측정</li>
  <li>분화가 높을수록 명확한 직업적 정체성</li>
</ul>
<h4>정체성 (Identity)</h4>
<ul>
  <li>자신의 목표, 흥미, 능력에 대한 명확한 상(picture)</li>
  <li>직업적 정체성이 높을수록 안정적 직업선택</li>
</ul>
<h4>일치성 (Congruence)</h4>
<ul>
  <li>개인의 성격유형과 직업환경의 일치 정도</li>
  <li>일치성이 높을수록 직업만족, 안정성, 성취도 높음</li>
</ul>`
          }
        ]
      },
      {
        title: '직업심리검사',
        topics: [
          {
            title: '심리검사의 유형',
            content: `<h4>직업심리검사의 분류</h4>
<h4>표준화 검사</h4>
<ul>
  <li><strong>직업적성검사:</strong> 일반학습능력, 언어능력, 수리능력, 공간판단력 등 측정</li>
  <li><strong>직업흥미검사:</strong> Holland 유형에 기반한 직업흥미 측정 (스트롱 직업흥미검사 등)</li>
  <li><strong>직업가치관검사:</strong> 능력발휘, 보수, 안정성, 사회봉사 등 가치관 측정</li>
  <li><strong>성격검사:</strong> MBTI, MMPI, 16PF, Big Five 등</li>
  <li><strong>지능검사:</strong> 웩슬러(WAIS), 스탠포드-비네</li>
</ul>
<h4>비표준화 검사</h4>
<ul>
  <li>면접, 관찰, 자서전, 일화기록, 사회성측정</li>
</ul>
<h4>검사의 질적 기준</h4>
<ul>
  <li><strong>타당도:</strong> 검사가 측정하려는 것을 정확히 측정하는 정도
    <ul><li>내용타당도, 준거타당도(예언/공인), 구인타당도</li></ul>
  </li>
  <li><strong>신뢰도:</strong> 검사 결과의 일관성
    <ul><li>검사-재검사, 동형검사, 반분, 내적일관성(Cronbach α)</li></ul>
  </li>
</ul>`
          },
          {
            title: '타당도와 신뢰도 상세',
            content: `<h4>타당도 (Validity) - 검사의 정확성</h4>
<p>"이 검사가 측정하려는 것을 정확히 측정하고 있는가?"</p>
<table>
  <tr><th>타당도 유형</th><th>의미</th><th>확인 방법</th></tr>
  <tr><td><strong>내용타당도</strong></td><td>검사 내용이 측정 영역을 대표하는 정도</td><td>전문가 판단 (통계적 방법 아님)</td></tr>
  <tr><td><strong>준거타당도</strong></td><td>외부 준거와의 관련성</td><td>상관계수 산출</td></tr>
  <tr><td> - 예언(예측)타당도</td><td>미래 행동/성과 예측</td><td>검사→시간경과→준거 측정</td></tr>
  <tr><td> - 공인(동시)타당도</td><td>현재 상태의 정확한 반영</td><td>검사와 준거를 동시에 측정</td></tr>
  <tr><td><strong>구인(구성)타당도</strong></td><td>이론적 구인을 측정하는 정도</td><td>요인분석, 수렴/변별타당도</td></tr>
  <tr><td> - 수렴타당도</td><td>유사 구인 측정 검사와 높은 상관</td><td>다특성다방법(MTMM)</td></tr>
  <tr><td> - 변별(판별)타당도</td><td>다른 구인 측정 검사와 낮은 상관</td><td>다특성다방법(MTMM)</td></tr>
</table>
<h4>신뢰도 (Reliability) - 검사의 일관성</h4>
<p>"이 검사를 반복 실시하면 같은 결과가 나오는가?"</p>
<table>
  <tr><th>신뢰도 유형</th><th>방법</th><th>특징</th></tr>
  <tr><td><strong>검사-재검사 신뢰도</strong></td><td>같은 검사를 시간 간격을 두고 2회 실시</td><td>안정성 계수, 기억효과/성숙효과 주의</td></tr>
  <tr><td><strong>동형검사 신뢰도</strong></td><td>동등한 2개 검사를 같은 집단에 실시</td><td>동등성 계수, 동형 검사 제작 어려움</td></tr>
  <tr><td><strong>반분 신뢰도</strong></td><td>하나의 검사를 반으로 나누어 비교</td><td>내적일관성, 스피어만-브라운 공식으로 교정</td></tr>
  <tr><td><strong>내적일관성 (Cronbach α)</strong></td><td>문항 간 상관의 평균에 기반</td><td>가장 널리 사용, 0.7 이상이면 양호</td></tr>
  <tr><td><strong>채점자간 신뢰도</strong></td><td>다른 채점자의 평가 일치도</td><td>주관식 평가에서 중요</td></tr>
</table>
<h4>타당도와 신뢰도의 관계</h4>
<ul>
  <li>신뢰도가 높다고 타당도가 높은 것은 아님</li>
  <li>타당도가 높으면 신뢰도도 높음</li>
  <li>신뢰도는 타당도의 <strong>필요조건</strong>이지만 충분조건은 아님</li>
  <li>★ 타당도의 상한 = √신뢰도</li>
</ul>`
          },
          {
            title: '규준과 검사 해석',
            content: `<h4>규준 (Norm)</h4>
<p>개인의 검사 점수를 해석하기 위한 비교 기준으로, <strong>규준집단(표준화 집단)</strong>의 점수 분포를 기반으로 합니다.</p>
<h4>점수 유형</h4>
<table>
  <tr><th>점수 유형</th><th>설명</th><th>특징</th></tr>
  <tr><td><strong>원점수</strong></td><td>검사에서 직접 얻은 점수</td><td>그 자체로는 의미 해석 불가</td></tr>
  <tr><td><strong>백분위 점수</strong></td><td>규준집단에서 그 점수 이하인 비율 (%)</td><td>해석 용이, 등간격 아님</td></tr>
  <tr><td><strong>표준점수 (Z점수)</strong></td><td>Z = (원점수 - 평균) / 표준편차</td><td>평균=0, 표준편차=1</td></tr>
  <tr><td><strong>T점수</strong></td><td>T = 10Z + 50</td><td>평균=50, 표준편차=10</td></tr>
  <tr><td><strong>스테나인(Stanine)</strong></td><td>1~9점 척도</td><td>평균=5, 표준편차≈2</td></tr>
  <tr><td><strong>IQ점수(편차IQ)</strong></td><td>IQ = 15Z + 100</td><td>평균=100, 표준편차=15</td></tr>
</table>
<h4>측정의 표준오차 (SEM)</h4>
<div class="formula-box">
  <p><strong>SEM = SD × √(1 - r)</strong></p>
  <p>SD = 표준편차, r = 신뢰도 계수</p>
  <p>★ 신뢰도가 높을수록 SEM이 작아짐 → 점수 해석의 정확성 증가</p>
</div>
<h4>검사 해석 시 유의사항</h4>
<ul>
  <li>하나의 검사 점수만으로 판단하지 말고 <strong>종합적</strong>으로 해석</li>
  <li>점수를 범위(신뢰구간)로 해석하기: 진점수 ± 1.96×SEM (95% 신뢰구간)</li>
  <li>규준집단의 적절성 확인 (연령, 성별, 학력 등)</li>
  <li>검사 실시 조건과 내담자 상태 고려</li>
  <li>내담자에게 결과를 <strong>이해하기 쉽게</strong> 설명하고 상담에 활용</li>
</ul>`
          },
          {
            title: 'MBTI와 주요 검사',
            content: `<h4>MBTI (Myers-Briggs Type Indicator)</h4>
<p>Jung의 심리유형론에 기반한 성격유형 검사로, 4가지 선호 지표의 조합으로 16유형을 분류합니다.</p>
<h4>4가지 선호 지표</h4>
<table>
  <tr><th>지표</th><th>유형 A</th><th>유형 B</th></tr>
  <tr><td>에너지 방향</td><td>외향(E)</td><td>내향(I)</td></tr>
  <tr><td>인식 기능</td><td>감각(S)</td><td>직관(N)</td></tr>
  <tr><td>판단 기능</td><td>사고(T)</td><td>감정(F)</td></tr>
  <tr><td>생활 양식</td><td>판단(J)</td><td>인식(P)</td></tr>
</table>
<h4>기타 주요 심리검사</h4>
<ul>
  <li><strong>스트롱 직업흥미검사(SII):</strong> 일반직업주제(GOT) + 기본흥미척도(BIS) + 개인특성척도(PSS)</li>
  <li><strong>직업선호도검사:</strong> Holland의 RIASEC 모형 기반</li>
  <li><strong>커리어넷 심리검사:</strong> 한국고용정보원 제공, 워크넷 활용</li>
  <li><strong>성인용 직업적성검사:</strong> 11개 적성요인 측정</li>
</ul>`
          }
        ]
      },
      {
        title: '직업적응이론',
        topics: [
          {
            title: '직업적응이론과 직무만족',
            content: `<h4>Dawis & Lofquist의 직업적응이론 (TWA)</h4>
<p>개인과 환경의 상호작용에서 '조응(correspondence)'을 강조하는 이론입니다.</p>
<h4>핵심 개념</h4>
<ul>
  <li><strong>만족(Satisfaction):</strong> 직업환경이 개인의 욕구/가치를 충족시키는 정도</li>
  <li><strong>충족(Satisfactoriness):</strong> 개인이 직업환경의 요구를 충족시키는 정도</li>
  <li><strong>조응(Correspondence):</strong> 만족과 충족이 모두 높은 상태 → 직업적응</li>
</ul>
<h4>직무만족 이론</h4>
<ul>
  <li><strong>허즈버그(Herzberg)의 2요인 이론:</strong>
    <ul>
      <li>위생요인(불만족 요인): 급여, 작업조건, 회사정책 → 불만족 감소</li>
      <li>동기요인(만족 요인): 성취감, 인정, 책임감 → 만족 증가</li>
    </ul>
  </li>
  <li><strong>매슬로우(Maslow)의 욕구위계:</strong> 생리 → 안전 → 소속 → 존경 → 자아실현</li>
  <li><strong>브룸(Vroom)의 기대이론:</strong> 동기 = 기대 × 수단성 × 유인가</li>
</ul>`
          },
          {
            title: '직무동기이론 상세',
            content: `<h4>내용이론 (Content Theories) - 무엇이 동기를 유발하는가?</h4>
<h4>매슬로우(Maslow)의 욕구위계이론</h4>
<ol>
  <li><strong>생리적 욕구:</strong> 음식, 물, 수면 등 기본 생존 욕구</li>
  <li><strong>안전 욕구:</strong> 신체적·경제적 안전, 직업 안정</li>
  <li><strong>소속·애정 욕구:</strong> 사랑, 우정, 소속감, 대인관계</li>
  <li><strong>존경 욕구:</strong> 자존감, 타인으로부터의 인정과 존경</li>
  <li><strong>자아실현 욕구:</strong> 잠재력 실현, 성장 (결핍욕구가 아닌 성장욕구)</li>
</ol>
<p>★ 하위 욕구가 충족되어야 상위 욕구가 동기로 작용 (위계적 순서)</p>
<h4>앨더퍼(Alderfer)의 ERG 이론</h4>
<ul>
  <li><strong>E (Existence/존재):</strong> 생리적·물질적 욕구 (생리+안전)</li>
  <li><strong>R (Relatedness/관계):</strong> 대인관계 욕구 (소속+존경 일부)</li>
  <li><strong>G (Growth/성장):</strong> 개인적 성장과 발전 욕구 (존경 일부+자아실현)</li>
</ul>
<p>★ 매슬로우와 차이점: <strong>좌절-퇴행 가설</strong> (상위 욕구 좌절 시 하위 욕구가 강화), 여러 욕구 동시 작동 가능</p>
<h4>맥클렐란드(McClelland)의 성취동기이론</h4>
<ul>
  <li><strong>성취 욕구(nAch):</strong> 우수한 결과를 달성하려는 욕구, 중간 수준의 위험 선호</li>
  <li><strong>권력 욕구(nPow):</strong> 타인에게 영향력을 행사하려는 욕구</li>
  <li><strong>친화 욕구(nAff):</strong> 타인과 친밀한 관계를 맺으려는 욕구</li>
</ul>
<h4>과정이론 (Process Theories) - 어떻게 동기가 유발되는가?</h4>
<h4>애덤스(Adams)의 공정성이론</h4>
<div class="formula-box">
  <p><strong>자기의 투입 대비 산출 비율</strong>과 <strong>타인의 투입 대비 산출 비율</strong>을 비교</p>
  <p>불공정 인식 시 → 투입 변경, 산출 변경, 인지적 왜곡, 비교대상 변경, 이직 등으로 해소</p>
</div>
<h4>로크(Locke)의 목표설정이론</h4>
<ul>
  <li>구체적이고 도전적인 목표가 높은 성과를 이끔</li>
  <li>피드백이 주어질 때 목표 효과 증대</li>
  <li>목표에 대한 수용과 몰입이 중요</li>
</ul>
<h4>맥그리거(McGregor)의 XY 이론</h4>
<table>
  <tr><th>X 이론</th><th>Y 이론</th></tr>
  <tr><td>인간은 본래 게으름</td><td>인간은 본래 일을 좋아함</td></tr>
  <tr><td>통제와 감독 필요</td><td>자율성과 책임감 부여</td></tr>
  <tr><td>외적 동기 (급여, 처벌)</td><td>내적 동기 (성취, 자아실현)</td></tr>
  <tr><td>권위적 관리 스타일</td><td>참여적 관리 스타일</td></tr>
</table>`
          }
        ]
      }
    ]
  },

  jobinfo: {
    name: '직업정보론',
    code: 'jobinfo',
    color: '#10B981',
    icon: 'fa-solid fa-circle-info',
    description: '직업분류체계, 직업정보 수집/제공 방법을 학습합니다.',
    chapters: [
      {
        title: '직업분류체계',
        topics: [
          {
            title: '한국표준직업분류(KSCO)',
            content: `<h4>한국표준직업분류 (KSCO)</h4>
<p>통계청이 고시하는 공식 직업분류 체계로, 국제표준직업분류(ISCO)를 기초로 한국 실정에 맞게 작성합니다.</p>
<h4>분류 기준</h4>
<ul>
  <li><strong>직무(Job):</strong> 한 사람이 수행하는 일의 묶음</li>
  <li><strong>직능수준(Skill Level):</strong> 직무 수행에 필요한 교육/훈련/경험 수준 (4단계)</li>
  <li><strong>직능유형(Skill Type):</strong> 직무 수행에 필요한 지식/도구/장비의 종류</li>
</ul>
<h4>대분류 (10개)</h4>
<ol>
  <li>관리자</li>
  <li>전문가 및 관련 종사자</li>
  <li>사무 종사자</li>
  <li>서비스 종사자</li>
  <li>판매 종사자</li>
  <li>농림어업 숙련 종사자</li>
  <li>기능원 및 관련 기능 종사자</li>
  <li>장치·기계 조작 및 조립 종사자</li>
  <li>단순노무 종사자</li>
  <li>군인 (0)</li>
</ol>
<h4>분류 단계</h4>
<p>대분류(1자리) → 중분류(2자리) → 소분류(3자리) → 세분류(4자리) → 세세분류(5자리)</p>`
          },
          {
            title: '한국고용직업분류(KECO)',
            content: `<h4>한국고용직업분류 (KECO)</h4>
<p>한국고용정보원이 개발한 직업분류로, 고용서비스 현장에서 활용됩니다.</p>
<h4>KSCO와의 차이점</h4>
<table>
  <tr><th>구분</th><th>KSCO</th><th>KECO</th></tr>
  <tr><td>관리기관</td><td>통계청</td><td>고용노동부(고용정보원)</td></tr>
  <tr><td>목적</td><td>통계 조사</td><td>고용서비스, 직업상담</td></tr>
  <tr><td>분류 기준</td><td>직무 유사성</td><td>직업활동의 현실적 유사성</td></tr>
  <tr><td>직능수준</td><td>별도 구분</td><td>동일 직업 내 통합</td></tr>
</table>
<h4>KECO 대분류 (10개)</h4>
<ol>
  <li>관리직</li>
  <li>경영·사무·금융·보험직</li>
  <li>연구직 및 공학기술직</li>
  <li>교육·법률·사회복지·경찰·소방직 및 군인</li>
  <li>보건·의료직</li>
  <li>예술·디자인·방송·스포츠직</li>
  <li>미용·여행·숙박·음식·경비·청소직</li>
  <li>영업·판매·운전·운송직</li>
  <li>건설·채굴직</li>
  <li>설치·정비·생산직</li>
</ol>`
          }
        ]
      },
      {
        title: '직업정보 수집',
        topics: [
          {
            title: '워크넷과 직업정보시스템',
            content: `<h4>워크넷 (Work-Net)</h4>
<p>고용노동부와 한국고용정보원이 운영하는 대표적 고용정보 포털사이트입니다.</p>
<h4>워크넷의 주요 서비스</h4>
<ul>
  <li><strong>구인구직 매칭:</strong> 기업의 구인정보와 구직자의 이력서 매칭</li>
  <li><strong>직업심리검사:</strong> 적성, 흥미, 가치관 등 온라인 검사</li>
  <li><strong>직업정보:</strong> 한국직업사전, 직업전망, 직업동영상</li>
  <li><strong>훈련정보:</strong> 직업훈련 과정 검색</li>
  <li><strong>고용지원정책:</strong> 정부 고용지원 사업 안내</li>
</ul>
<h4>한국직업사전</h4>
<ul>
  <li>직무개요, 수행직무, 정규교육, 숙련기간</li>
  <li>직업분류코드, 자격/면허, 조사연도</li>
  <li>부가직업정보: 작업강도, 작업장소, 육체활동 등</li>
</ul>
<h4>기타 직업정보 시스템</h4>
<ul>
  <li><strong>커리어넷:</strong> 한국직업능력연구원 운영 (청소년 진로 중심)</li>
  <li><strong>HRD-Net:</strong> 직업훈련 정보 시스템</li>
  <li><strong>Q-Net:</strong> 한국산업인력공단 자격정보</li>
</ul>`
          },
          {
            title: '직업정보 수집 방법',
            content: `<h4>직업정보 수집 방법</h4>
<h4>1차 자료 수집</h4>
<ul>
  <li><strong>직업조사:</strong> 직접 현장 방문, 관찰, 면접</li>
  <li><strong>직무분석:</strong> 직무의 내용, 요건, 조건을 체계적으로 분석</li>
  <li><strong>설문조사:</strong> 근로자, 기업 대상 설문</li>
</ul>
<h4>2차 자료 수집</h4>
<ul>
  <li>한국직업사전, 직업전망서</li>
  <li>통계자료 (경제활동인구조사, 사업체노동력조사)</li>
  <li>학술논문, 보고서, 인터넷 자료</li>
</ul>
<h4>직무분석의 방법</h4>
<ul>
  <li><strong>최초분석법:</strong> 직무에 대한 기존 정보 없이 처음 분석</li>
  <li><strong>비교확인법(DACUM):</strong> 현직자 패널을 활용한 교육과정 개발법</li>
  <li><strong>면접법:</strong> 재직자와의 면담을 통한 정보 수집</li>
  <li><strong>관찰법:</strong> 작업자의 활동을 직접 관찰</li>
  <li><strong>체험법:</strong> 분석가가 직접 작업을 수행</li>
  <li><strong>설문지법:</strong> 구조화된 설문지를 통한 정보 수집</li>
</ul>`
          }
        ]
      },
      {
        title: '직무분석의 이해',
        topics: [
          {
            title: '직무분석의 개념과 절차',
            content: `<h4>직무분석 (Job Analysis)의 정의</h4>
<p>특정 직무의 <strong>내용, 요건, 조건, 책임</strong> 등을 체계적으로 조사·분석하여 직무에 관한 정보를 수집·정리하는 과정입니다.</p>
<h4>직무 관련 용어</h4>
<ul>
  <li><strong>요소(Element):</strong> 더 이상 분할할 수 없는 최소 작업 단위</li>
  <li><strong>과업(Task):</strong> 요소들의 묶음, 독립적으로 의미 있는 작업 단위</li>
  <li><strong>직위(Position):</strong> 한 사람에게 부여된 과업의 묶음</li>
  <li><strong>직무(Job):</strong> 유사한 직위의 집합</li>
  <li><strong>직업(Occupation):</strong> 유사한 직무의 집합, 사회적으로 인정된 활동</li>
  <li><strong>직군(Job Family):</strong> 유사한 직업의 집합</li>
</ul>
<h4>직무분석의 절차</h4>
<ol>
  <li><strong>준비 단계:</strong> 목적 설정, 대상 직무 선정, 분석방법 결정</li>
  <li><strong>정보수집 단계:</strong> 면접, 관찰, 설문, 작업일지 등으로 자료 수집</li>
  <li><strong>분석 단계:</strong> 수집된 정보의 정리·분석</li>
  <li><strong>결과물 작성:</strong> 직무기술서(Job Description)와 직무명세서(Job Specification) 작성</li>
</ol>
<h4>직무분석의 결과물</h4>
<table>
  <tr><th>구분</th><th>직무기술서 (Job Description)</th><th>직무명세서 (Job Specification)</th></tr>
  <tr><td>초점</td><td><strong>직무</strong> 자체에 대한 정보</td><td><strong>직무수행자</strong>에 대한 요건</td></tr>
  <tr><td>내용</td><td>직무명, 수행업무, 책임, 작업조건</td><td>학력, 경력, 자격, 능력, 신체조건</td></tr>
  <tr><td>용도</td><td>직무 설계, 업무 배분</td><td>채용, 선발, 배치</td></tr>
</table>`
          },
          {
            title: '직무분석 기법 상세',
            content: `<h4>주요 직무분석 기법</h4>
<h4>1. 최초분석법 (시간연구법)</h4>
<ul>
  <li>직무에 대한 기존 정보 없이 <strong>처음부터</strong> 분석</li>
  <li>새로운 직무 또는 기존 정보가 없는 경우에 사용</li>
</ul>
<h4>2. DACUM (Developing A CurriculUM)</h4>
<ul>
  <li><strong>현직 종사자 패널</strong>(5~12명)을 활용한 직무분석 및 교육과정 개발 기법</li>
  <li>직무(Duty) → 과업(Task)을 DACUM 차트로 도식화</li>
  <li>장점: 비용 효율적, 단기간 가능 (2~3일), 현장 중심</li>
  <li>단점: 패널의 대표성 문제, 미래 변화 예측 어려움</li>
</ul>
<h4>3. 기능적 직무분석법 (FJA, Functional Job Analysis)</h4>
<p>미국 노동부가 개발한 방법으로, 직무를 <strong>자료(Data)-사람(People)-사물(Things)</strong>의 3가지 기능 영역으로 분류합니다.</p>
<table>
  <tr><th>자료(Data)</th><th>사람(People)</th><th>사물(Things)</th></tr>
  <tr><td>종합(0) ~ 비교(6)</td><td>자문(0) ~ 지시수행(8)</td><td>설치(0) ~ 단순작업(7)</td></tr>
  <tr><td>숫자가 낮을수록 복잡</td><td>숫자가 낮을수록 복잡</td><td>숫자가 낮을수록 복잡</td></tr>
</table>
<h4>4. 직위분석 설문지 (PAQ, Position Analysis Questionnaire)</h4>
<ul>
  <li>맥코믹(McCormick) 개발, <strong>194개 직무요소</strong>를 6개 영역으로 분류</li>
  <li>정보입력 → 정신과정 → 작업출력 → 대인관계 → 직무맥락 → 기타특성</li>
  <li>장점: 표준화되어 직무 간 비교 용이, 양적 분석 가능</li>
</ul>
<h4>5. 중요사건 기법 (CIT, Critical Incident Technique)</h4>
<ul>
  <li>플래너건(Flanagan) 개발, 직무수행 중 <strong>성공/실패에 결정적인 사건</strong>을 수집·분석</li>
  <li>효과적/비효과적 행동을 구체적 사례로 파악</li>
  <li>평가도구 개발, 교육훈련 설계에 활용</li>
</ul>
<h4>6. 워크샘플링 (Work Sampling)</h4>
<ul>
  <li>무작위 시점에서 작업자의 활동을 관찰·기록</li>
  <li>각 활동에 소요되는 시간 비율을 통계적으로 추정</li>
</ul>`
          }
        ]
      },
      {
        title: '직업정보 제공',
        topics: [
          {
            title: '직업정보 제공 방법',
            content: `<h4>직업정보 제공 방법</h4>
<ul>
  <li><strong>직업카드:</strong> 카드 형태의 직업정보로, 분류/정렬 활동에 활용</li>
  <li><strong>직업동영상:</strong> 실제 직업현장을 영상으로 제공</li>
  <li><strong>직업체험 프로그램:</strong> 직접 체험을 통한 직업이해</li>
  <li><strong>직업박람회:</strong> 다양한 직업정보를 한곳에서 제공</li>
  <li><strong>멘토링:</strong> 현직자와의 만남을 통한 정보 제공</li>
</ul>
<h4>직업전망</h4>
<ul>
  <li>한국직업전망서: 한국고용정보원 발간 (격년)</li>
  <li>고용동향: 통계청 경제활동인구조사 기반</li>
  <li>신직업: 기술변화, 사회변화에 따른 새로운 직업</li>
</ul>
<h4>직업정보의 질적 기준</h4>
<ul>
  <li>정확성: 사실에 기반한 정보</li>
  <li>최신성: 최신 동향 반영</li>
  <li>충분성: 의사결정에 필요한 충분한 정보</li>
  <li>접근성: 이해하기 쉽고 활용하기 편리</li>
</ul>`
          }
        ]
      },
      {
        title: '산업분류',
        topics: [
          {
            title: '한국표준산업분류(KSIC)',
            content: `<h4>한국표준산업분류 (KSIC)</h4>
<p>통계청이 고시하는 산업 분류 체계로, 국제표준산업분류(ISIC)를 기반으로 합니다.</p>
<h4>분류 기준</h4>
<ul>
  <li><strong>산출물(생산된 재화나 서비스)의 특성</strong></li>
  <li>투입물의 특성</li>
  <li>생산 활동의 일반적인 과정</li>
</ul>
<h4>대분류 (21개)</h4>
<ul>
  <li>A. 농업, 임업 및 어업</li>
  <li>B. 광업</li>
  <li>C. 제조업</li>
  <li>D. 전기, 가스, 증기 및 공기조절 공급업</li>
  <li>E. 수도, 하수 및 폐기물 처리, 원료 재생업</li>
  <li>F. 건설업</li>
  <li>G. 도매 및 소매업</li>
  <li>H. 운수 및 창고업</li>
  <li>I. 숙박 및 음식점업</li>
  <li>J. 정보통신업</li>
  <li>K. 금융 및 보험업</li>
  <li>... (총 21개 대분류)</li>
</ul>
<h4>분류 단계</h4>
<p>대분류(알파벳) → 중분류(2자리) → 소분류(3자리) → 세분류(4자리) → 세세분류(5자리)</p>`
          }
        ]
      }
    ]
  },

  labor_market: {
    name: '노동시장론',
    code: 'labor_market',
    color: '#F59E0B',
    icon: 'fa-solid fa-chart-line',
    description: '노동시장 이론, 임금, 실업, 인적자본을 학습합니다.',
    chapters: [
      {
        title: '노동시장 기초',
        topics: [
          {
            title: '노동공급과 노동수요',
            content: `<h4>노동공급</h4>
<p>개인이 시장에 제공하려는 노동의 양으로, 임금률과 여가의 기회비용에 의해 결정됩니다.</p>
<ul>
  <li><strong>대체효과:</strong> 임금 상승 → 여가의 기회비용 증가 → 노동공급 증가</li>
  <li><strong>소득효과:</strong> 임금 상승 → 소득 증가 → 여가 수요 증가 → 노동공급 감소</li>
  <li><strong>후방굴절 노동공급곡선:</strong> 일정 임금 수준 이후 소득효과 > 대체효과</li>
</ul>
<h4>노동수요</h4>
<p>기업이 고용하려는 노동의 양으로, 노동의 한계생산물가치에 의해 결정됩니다.</p>
<ul>
  <li><strong>노동의 한계생산물(MPL):</strong> 노동 1단위 추가 투입 시 추가되는 생산량</li>
  <li><strong>한계생산물가치(VMPL):</strong> MPL × 생산물 가격(P)</li>
  <li><strong>한계수입생산(MRPL):</strong> MPL × 한계수입(MR)</li>
  <li>이윤극대화 조건: MRPL = 임금(W)</li>
  <li><strong>파생수요:</strong> 노동수요는 생산물 수요에서 파생됨</li>
</ul>
<h4>균형임금</h4>
<p>노동공급곡선과 노동수요곡선이 교차하는 점에서 균형임금과 균형고용량이 결정됩니다.</p>`
          },
          {
            title: '노동시장의 유형',
            content: `<h4>노동시장 구조별 유형</h4>
<table>
  <tr><th>시장 유형</th><th>노동수요</th><th>노동공급</th><th>임금 결정</th></tr>
  <tr><td><strong>완전경쟁</strong></td><td>다수 기업</td><td>다수 근로자</td><td>시장에서 결정 (W=VMPL=MRPL)</td></tr>
  <tr><td><strong>수요독점</strong></td><td>1개 기업</td><td>다수 근로자</td><td>기업이 결정 (W < MRPL, 착취 발생)</td></tr>
  <tr><td><strong>공급독점(노조)</strong></td><td>다수 기업</td><td>노조 독점</td><td>노조가 결정 (W > 경쟁임금)</td></tr>
  <tr><td><strong>쌍방독점</strong></td><td>수요독점</td><td>공급독점</td><td>협상으로 결정 (불확정적)</td></tr>
</table>
<h4>수요독점 (Monopsony) 상세</h4>
<ul>
  <li>노동의 한계비용(MLC) > 평균비용(임금) → <strong>MLC 곡선이 노동공급곡선 위</strong>에 위치</li>
  <li>이윤극대화: MRPL = MLC인 점에서 고용량 결정</li>
  <li>임금은 해당 고용량에 대응하는 노동공급곡선상의 점 → <strong>MRPL보다 낮은 임금</strong></li>
  <li><strong>착취:</strong> W < MRPL (노동의 한계생산가치보다 낮은 임금 지급)</li>
  <li>최저임금제 도입 시 오히려 <strong>고용이 증가</strong>할 수 있음 (경쟁시장과 차이)</li>
</ul>
<h4>노동조합의 임금 효과</h4>
<ul>
  <li><strong>임금 인상 방법:</strong>
    <ul>
      <li>노동공급 제한 (면허제, 자격요건 강화) → 공급곡선 좌측 이동</li>
      <li>노동수요 증가 유도 (생산성 향상, 정치적 로비) → 수요곡선 우측 이동</li>
      <li>단체교섭으로 최저임금 직접 설정</li>
    </ul>
  </li>
  <li><strong>노조의 임금 프리미엄:</strong> 노조 부문이 비노조 부문보다 10~25% 높은 임금</li>
</ul>`
          }
        ]
      },
      {
        title: '임금이론',
        topics: [
          {
            title: '한계생산성 이론과 임금격차',
            content: `<h4>한계생산성 임금이론</h4>
<p>완전경쟁 노동시장에서 노동의 가격(임금)은 노동의 한계생산물가치(VMPL)에 의해 결정됩니다.</p>
<ul>
  <li>기업은 VMPL = W인 점까지 노동을 고용</li>
  <li>노동수요곡선 = VMPL 곡선 (우하향)</li>
</ul>
<h4>보상적 임금격차</h4>
<p>동질적 노동자 간에도 직업의 비금전적 특성 차이로 인해 임금격차가 발생합니다.</p>
<ul>
  <li>위험한 직업 → 높은 임금 (위험 프리미엄)</li>
  <li>열악한 근무환경 → 보상적 높은 임금</li>
  <li>애덤 스미스(Adam Smith)가 최초 제시</li>
</ul>
<h4>효율임금 이론</h4>
<p>기업이 시장균형 임금보다 높은 임금을 자발적으로 지급하는 이론입니다.</p>
<ul>
  <li>높은 임금 → 이직률 감소, 사기 진작</li>
  <li>역선택 방지: 우수 인재 유치</li>
  <li>도덕적 해이 방지: 태만 감소 (셔플리 모형)</li>
</ul>`
          },
          {
            title: '임금격차와 차별이론',
            content: `<h4>임금격차의 원인</h4>
<ul>
  <li><strong>보상적 임금격차:</strong> 비금전적 직업 특성(위험, 환경)에 따른 차이 (애덤 스미스)</li>
  <li><strong>인적자본 차이:</strong> 교육, 훈련, 경험의 차이</li>
  <li><strong>노동시장 분단:</strong> 1차/2차 시장 간 이동 제한</li>
  <li><strong>차별:</strong> 동일한 생산성에도 불구하고 특성(성별, 인종)에 따른 임금 차이</li>
</ul>
<h4>노동시장 차별이론</h4>
<table>
  <tr><th>이론</th><th>학자</th><th>내용</th></tr>
  <tr><td><strong>개인적 편견 모형</strong></td><td>베커(Becker)</td><td>차별은 고용주/근로자/고객의 편견(taste)에서 비롯. 차별계수(d)만큼 추가 비용 인식</td></tr>
  <tr><td><strong>통계적 차별</strong></td><td>Phelps, Arrow</td><td>개인 정보 부족 → 집단의 평균적 특성으로 판단 (예: 여성의 이직률이 높다는 통계에 기반한 차별)</td></tr>
  <tr><td><strong>이중노동시장론</strong></td><td>Doeringer, Piore</td><td>1차(고임금, 안정)/2차(저임금, 불안정) 시장 간 구조적 장벽</td></tr>
  <tr><td><strong>직업분리</strong></td><td>Bergmann</td><td>특정 집단이 특정 직종에 밀집(과밀효과) → 해당 직종 임금 하락</td></tr>
</table>
<h4>남녀 임금격차 관련</h4>
<ul>
  <li><strong>동일노동 동일임금 원칙:</strong> 같은 직무에 대해 성별에 관계없이 동일 임금 지급</li>
  <li><strong>동일가치노동 동일임금:</strong> 다른 직무라도 동등한 가치의 노동이면 동일 임금</li>
  <li>오악사카(Oaxaca) 분해법: 임금격차를 생산성 차이와 차별로 분해하는 통계 기법</li>
</ul>`
          }
        ]
      },
      {
        title: '실업이론',
        topics: [
          {
            title: '실업의 유형과 측정',
            content: `<h4>실업의 유형</h4>
<ul>
  <li><strong>마찰적 실업:</strong> 직업 탐색 과정에서 발생하는 일시적 실업 (자발적)</li>
  <li><strong>구조적 실업:</strong> 산업구조 변화, 기술변화로 인한 노동력 수요-공급 불일치</li>
  <li><strong>경기적(순환적) 실업:</strong> 경기침체로 인한 총수요 부족</li>
  <li><strong>계절적 실업:</strong> 계절적 요인에 따른 노동수요 변동</li>
</ul>
<h4>실업률 계산</h4>
<div class="formula-box">
  <p><strong>실업률 = (실업자 수 / 경제활동인구) × 100</strong></p>
  <p>경제활동인구 = 취업자 + 실업자</p>
  <p>경제활동참가율 = (경제활동인구 / 15세 이상 인구) × 100</p>
  <p>고용률 = (취업자 / 15세 이상 인구) × 100</p>
</div>
<h4>자연실업률</h4>
<ul>
  <li>마찰적 실업 + 구조적 실업으로 구성</li>
  <li>완전고용 상태에서도 존재하는 실업률</li>
  <li>인플레이션을 가속시키지 않는 실업률 (NAIRU)</li>
</ul>
<h4>실업 대책</h4>
<ul>
  <li>마찰적 실업: 직업정보 제공, 직업소개 활성화</li>
  <li>구조적 실업: 직업훈련, 재교육</li>
  <li>경기적 실업: 재정정책, 통화정책으로 총수요 확대</li>
</ul>`
          },
          {
            title: '필립스곡선과 오쿤의 법칙',
            content: `<h4>필립스곡선 (Phillips Curve)</h4>
<p>영국의 경제학자 필립스(A.W. Phillips)가 발견한 <strong>임금상승률(물가상승률)과 실업률 간의 역(-)의 관계</strong>입니다.</p>
<h4>단기 필립스곡선</h4>
<ul>
  <li>실업률↓ → 물가상승률(인플레이션)↑ (역의 관계)</li>
  <li>실업률↑ → 물가상승률↓</li>
  <li>★ 정부는 실업과 인플레이션 사이에서 <strong>상충관계(trade-off)</strong>에 직면</li>
</ul>
<h4>장기 필립스곡선 (프리드먼-펠프스)</h4>
<ul>
  <li>장기적으로 필립스곡선은 자연실업률 수준에서 <strong>수직</strong></li>
  <li>기대인플레이션이 조정되면 실업률은 자연실업률로 회귀</li>
  <li>자연실업률 = <strong>NAIRU</strong> (Non-Accelerating Inflation Rate of Unemployment)</li>
  <li>장기적으로 실업률-인플레이션 상충관계 없음</li>
</ul>
<h4>스태그플레이션 (Stagflation)</h4>
<p>경기침체(높은 실업률)와 물가상승(인플레이션)이 <strong>동시</strong>에 발생하는 현상 (1970년대 석유파동)</p>
<h4>오쿤의 법칙 (Okun's Law)</h4>
<div class="formula-box">
  <p><strong>실업률이 자연실업률보다 1%p 높으면, 실질GDP가 잠재GDP보다 약 2~3% 낮다</strong></p>
  <p>(실질GDP - 잠재GDP) / 잠재GDP ≈ -2 × (실업률 - 자연실업률)</p>
</div>
<ul>
  <li>오쿤 계수: 약 2~3 (국가와 시기에 따라 다름)</li>
  <li>실업의 경제적 비용을 수량화하는 데 활용</li>
</ul>
<h4>베버리지 곡선 (Beveridge Curve)</h4>
<p><strong>실업률과 빈일자리율(구인율)</strong> 간의 역(-)의 관계를 나타내는 곡선</p>
<ul>
  <li>곡선이 원점에서 멀어지면 → 노동시장의 <strong>매칭 효율성 악화</strong> (구조적 실업 증가)</li>
  <li>곡선 위 이동: 경기침체 (실업↑, 빈일자리↓)</li>
  <li>곡선 아래 이동: 경기회복 (실업↓, 빈일자리↑)</li>
</ul>`
          }
        ]
      },
      {
        title: '인적자본론',
        topics: [
          {
            title: '인적자본과 노동이동',
            content: `<h4>인적자본론 (Human Capital Theory)</h4>
<p>슐츠(T.W. Schultz)와 베커(G.S. Becker)가 발전시킨 이론으로, 교육/훈련을 투자로 봅니다.</p>
<h4>교육 투자의 분석</h4>
<ul>
  <li><strong>교육의 수익률:</strong> 교육 투자로 인한 미래 소득 증가분의 현재가치</li>
  <li><strong>직접비용:</strong> 학비, 교재비 등</li>
  <li><strong>간접비용(기회비용):</strong> 교육 기간 동안 포기한 소득</li>
  <li><strong>내부수익률법:</strong> 순현재가치 = 0이 되는 할인율</li>
</ul>
<h4>일반훈련 vs 특수훈련</h4>
<ul>
  <li><strong>일반훈련:</strong> 모든 기업에 적용 가능 → 근로자 부담</li>
  <li><strong>특수훈련:</strong> 해당 기업에서만 유용 → 기업 부담 (또는 분담)</li>
</ul>
<h4>노동이동</h4>
<ul>
  <li><strong>자발적 이동:</strong> 더 나은 기회를 위한 이직</li>
  <li><strong>비자발적 이동:</strong> 해고, 정리해고</li>
  <li>이동 결정 요인: 임금격차, 이동비용, 연령, 심리적 비용</li>
</ul>
<h4>이중노동시장론</h4>
<ul>
  <li><strong>1차 노동시장:</strong> 고임금, 고용안정, 승진기회, 양호한 근로조건</li>
  <li><strong>2차 노동시장:</strong> 저임금, 고용불안, 승진제한, 열악한 근로조건</li>
  <li>시장 간 이동이 제한적 (비경쟁 집단)</li>
</ul>`
          }
        ]
      }
    ]
  },

  labor_law: {
    name: '노동관계법규',
    code: 'labor_law',
    color: '#EF4444',
    icon: 'fa-solid fa-scale-balanced',
    description: '근로기준법, 고용보험법, 직업안정법 등을 학습합니다.',
    chapters: [
      {
        title: '근로기준법',
        topics: [
          {
            title: '근로계약과 근로조건',
            content: `<h4>근로기준법의 기본 원칙</h4>
<ul>
  <li>근로조건은 근로자와 사용자가 동등한 지위에서 자유의사로 결정</li>
  <li>근로기준법에서 정하는 기준은 <strong>최저기준</strong></li>
  <li>국적, 신앙, 사회적 신분에 따른 차별 금지</li>
  <li>강제근로 금지, 폭행 금지</li>
</ul>
<h4>근로계약</h4>
<ul>
  <li>서면으로 명시해야 할 사항: 임금, 소정근로시간, 휴일, 연차유급휴가</li>
  <li>근로계약 기간: 기간의 정함이 없는 것이 원칙 (기간제는 2년 이내)</li>
  <li>위약 예정의 금지: 근로계약 불이행에 대한 위약금/손해배상 예정 금지</li>
  <li>전차금 상계 금지: 전차금과 임금의 상계 금지</li>
</ul>
<h4>근로시간</h4>
<ul>
  <li><strong>법정 근로시간:</strong> 1주 40시간, 1일 8시간</li>
  <li><strong>연장근로:</strong> 당사자 합의 시 1주 12시간 한도</li>
  <li><strong>야간근로:</strong> 오후 10시 ~ 오전 6시</li>
  <li><strong>가산임금:</strong> 연장·야간·휴일근로 시 통상임금의 50% 가산</li>
</ul>`
          },
          {
            title: '임금과 해고',
            content: `<h4>임금</h4>
<ul>
  <li><strong>임금의 정의:</strong> 사용자가 근로의 대가로 근로자에게 지급하는 모든 금품</li>
  <li><strong>통상임금:</strong> 정기적·일률적·고정적으로 지급되는 임금</li>
  <li><strong>평균임금:</strong> 산정사유 발생일 이전 3개월간 지급된 임금총액 ÷ 총 일수</li>
  <li><strong>최저임금:</strong> 최저임금법에 의한 최저 한도</li>
</ul>
<h4>임금 지급 원칙 (4대 원칙)</h4>
<ol>
  <li><strong>직접 지급:</strong> 근로자에게 직접 지급</li>
  <li><strong>전액 지급:</strong> 법령/단체협약에 의한 경우 외 공제 불가</li>
  <li><strong>통화 지급:</strong> 한국은행에서 발행한 통화로 지급</li>
  <li><strong>정기 지급:</strong> 매월 1회 이상 일정 기일에 지급</li>
</ol>
<h4>해고</h4>
<ul>
  <li><strong>정당한 이유:</strong> 해고는 정당한 이유가 있어야 함</li>
  <li><strong>해고 예고:</strong> 30일 전 예고 또는 30일분 통상임금 지급</li>
  <li><strong>해고 서면 통지:</strong> 해고 사유와 해고시기를 서면으로 통지</li>
  <li><strong>경영상 해고(정리해고):</strong> 긴박한 경영상의 필요, 해고회피 노력, 합리적 기준, 근로자대표 50일 전 통보</li>
  <li><strong>부당해고 구제:</strong> 노동위원회에 구제신청 (해고일로부터 3개월 이내)</li>
</ul>`
          },
          {
            title: '휴일·휴가·취업규칙',
            content: `<h4>휴일</h4>
<ul>
  <li><strong>주휴일:</strong> 1주간 소정근로일을 개근한 근로자에게 1일 유급휴일 (주 15시간 이상)</li>
  <li><strong>근로자의 날:</strong> 5월 1일 (유급휴일, 근로자의날법)</li>
  <li>관공서 공휴일: 5인 이상 사업장에서 유급휴일로 보장</li>
</ul>
<h4>연차유급휴가</h4>
<ul>
  <li><strong>1년 미만 근무자:</strong> 1개월 개근 시 1일 (최대 11일)</li>
  <li><strong>1년 이상 근무자:</strong> 80% 이상 출근 시 15일</li>
  <li><strong>가산휴가:</strong> 3년 이상 계속 근로 시 최초 1년 초과 매 2년마다 1일 가산 (최대 25일)</li>
  <li><strong>사용촉진:</strong> 사용자가 사용을 촉구했는데도 미사용 시 보상 의무 소멸</li>
  <li><strong>미사용 수당:</strong> 연차휴가 미사용분에 대해 통상임금 지급</li>
</ul>
<h4>취업규칙</h4>
<ul>
  <li>상시 <strong>10인 이상</strong> 사업장에서 작성·신고 의무</li>
  <li>기재 사항: 근로시간, 임금, 휴일·휴가, 퇴직, 징계 등</li>
  <li><strong>불이익 변경:</strong> 근로자 과반수 동의 필요 (근로자대표/노조 동의)</li>
  <li>취업규칙은 법령, 단체협약에 반할 수 없음</li>
  <li><strong>효력 순서:</strong> 법령 > 단체협약 > 취업규칙 > 근로계약</li>
</ul>
<h4>여성·연소근로자 보호</h4>
<ul>
  <li><strong>최저 고용연령:</strong> 15세 미만 (취직인허증 필요)</li>
  <li><strong>산전후휴가:</strong> 출산 전후 90일 (쌍둥이 120일), 산전 45일 이상 확보</li>
  <li><strong>육아휴직:</strong> 만 8세 이하 자녀 대상, 1년 이내</li>
  <li><strong>야간·휴일근로 제한:</strong> 임신 중 여성 금지, 18세 미만 근로자 본인 동의+근로감독관 인가</li>
  <li><strong>생리휴가:</strong> 월 1일 무급 휴가</li>
</ul>`
          }
        ]
      },
      {
        title: '고용보험법',
        topics: [
          {
            title: '실업급여와 고용안정',
            content: `<h4>고용보험제도의 구성</h4>
<ul>
  <li><strong>실업급여사업:</strong> 실직자에 대한 생활 안정 지원</li>
  <li><strong>고용안정사업:</strong> 기업의 고용유지 지원</li>
  <li><strong>직업능력개발사업:</strong> 근로자의 직업능력 향상 지원</li>
</ul>
<h4>구직급여 수급요건</h4>
<ul>
  <li>이직일 이전 18개월간 피보험단위기간이 180일 이상</li>
  <li>비자발적 이직 (정당한 사유 없는 자기 사정으로 이직 시 제한)</li>
  <li>근로 의사와 능력이 있으나 취업하지 못한 상태</li>
  <li>재취업 활동을 적극적으로 할 것</li>
  <li>수급자격 제한 사유에 해당하지 않을 것</li>
</ul>
<h4>구직급여 지급</h4>
<ul>
  <li><strong>급여수준:</strong> 이직 전 평균임금의 60% × 소정급여일수</li>
  <li><strong>소정급여일수:</strong> 연령과 피보험기간에 따라 120~270일</li>
  <li><strong>대기기간:</strong> 수급자격 인정일부터 7일간</li>
  <li><strong>실업인정:</strong> 1~4주 마다 출석하여 구직활동 확인</li>
</ul>
<h4>고용안정사업</h4>
<ul>
  <li>고용유지지원금: 경영악화로 고용조정 불가피 시 휴업, 훈련 등에 대한 지원</li>
  <li>고용촉진장려금: 취업 취약계층 고용 시 지원</li>
</ul>`
          }
        ]
      },
      {
        title: '직업안정법',
        topics: [
          {
            title: '직업소개와 직업지도',
            content: `<h4>직업안정법의 목적</h4>
<p>모든 근로자가 각자의 능력에 적합한 직업에 취업할 기회를 제공하고, 산업에 필요한 노동력의 충원을 원활히 하는 것입니다.</p>
<h4>직업소개</h4>
<ul>
  <li><strong>무료직업소개사업:</strong> 고용센터(공공), 비영리법인(민간)</li>
  <li><strong>유료직업소개사업:</strong> 등록 후 영리 목적으로 운영</li>
  <li>허위 구인광고 금지</li>
  <li>강제근로 및 부당 소개 금지</li>
</ul>
<h4>직업지도</h4>
<ul>
  <li>직업적성검사, 직업정보 제공, 직업상담</li>
  <li>구인자에 대한 고용관리 진단 및 지도</li>
  <li>취업 취약계층에 대한 우선적 직업지도</li>
</ul>
<h4>고용센터의 업무</h4>
<ul>
  <li>직업소개 및 직업지도</li>
  <li>고용보험 관련 업무</li>
  <li>직업훈련 안내 및 알선</li>
  <li>취업지원 프로그램 운영</li>
</ul>`
          }
        ]
      },
      {
        title: '근로자직업능력개발법',
        topics: [
          {
            title: '직업능력개발 훈련',
            content: `<h4>근로자직업능력개발법의 목적</h4>
<p>근로자의 생애에 걸친 직업능력개발을 촉진하고 산업현장에서 필요한 기술인력을 양성하는 것입니다.</p>
<h4>직업능력개발훈련의 유형</h4>
<ul>
  <li><strong>양성훈련:</strong> 기초적 직무수행능력을 습득시키기 위한 훈련</li>
  <li><strong>향상훈련:</strong> 양성훈련을 받은 자의 직무수행능력을 향상시키기 위한 훈련</li>
  <li><strong>전직훈련:</strong> 다른 직업에 필요한 직무수행능력을 습득시키기 위한 훈련</li>
</ul>
<h4>훈련 실시 방법</h4>
<ul>
  <li>집체훈련: 훈련기관에서 집합 교육</li>
  <li>현장훈련(OJT): 사업장에서 실시</li>
  <li>원격훈련: 인터넷, 통신매체 활용</li>
  <li>혼합훈련: 위 방법들을 병행</li>
</ul>
<h4>국가기술자격</h4>
<ul>
  <li>기술사 → 기능장 → 기사 → 산업기사 → 기능사</li>
  <li>국가전문자격: 직업상담사, 사회복지사 등</li>
</ul>`
          }
        ]
      },
      {
        title: '파견근로자보호법 및 기간제법',
        topics: [
          {
            title: '비정규직 근로자 보호',
            content: `<h4>파견근로자보호법</h4>
<ul>
  <li><strong>근로자파견:</strong> 파견사업주가 근로자를 고용한 후 사용사업주의 지휘·명령을 받아 근무하게 하는 것</li>
  <li><strong>파견기간:</strong> 원칙 1년, 파견 당사자 합의 시 1회에 한해 연장 (최대 2년)</li>
  <li><strong>파견 금지 업무:</strong> 건설, 하역, 유해·위험 업무 등</li>
  <li><strong>직접고용 의무:</strong> 2년 초과 사용 시 직접고용 간주</li>
  <li><strong>차별 금지:</strong> 파견근로자에 대한 불합리한 차별적 처우 금지</li>
</ul>
<h4>기간제 및 단시간근로자 보호법</h4>
<ul>
  <li><strong>기간제근로자:</strong> 근로계약 기간을 정한 근로자</li>
  <li><strong>사용기간:</strong> 총 2년 초과 불가 (초과 시 기간의 정함이 없는 근로자로 간주)</li>
  <li><strong>단시간근로자:</strong> 통상 근로자보다 소정근로시간이 짧은 근로자</li>
  <li><strong>차별 금지:</strong> 합리적 이유 없는 차별적 처우 금지</li>
  <li><strong>차별 시정:</strong> 노동위원회에 시정신청 (차별적 처우가 있은 날로부터 6개월 이내)</li>
</ul>`
          }
        ]
      },
      {
        title: '기타 주요 노동관계법규',
        topics: [
          {
            title: '최저임금법',
            content: `<h4>최저임금법의 목적</h4>
<p>근로자에 대하여 임금의 <strong>최저수준</strong>을 보장하여 근로자의 생활안정과 노동력의 질적 향상을 기함으로써 국민경제의 건전한 발전에 이바지하는 것입니다.</p>
<h4>최저임금 결정</h4>
<ul>
  <li><strong>최저임금위원회:</strong> 근로자 위원 9인 + 사용자 위원 9인 + 공익위원 9인 (총 27인)</li>
  <li>매년 8월 5일까지 결정, 다음 연도 1월 1일부터 적용</li>
  <li>고용노동부 장관이 결정·고시</li>
  <li>시간급 기준으로 결정</li>
</ul>
<h4>적용 대상</h4>
<ul>
  <li>근로자 1인 이상 모든 사업장</li>
  <li><strong>적용 제외:</strong> 동거하는 친족만을 사용하는 사업, 가사사용인</li>
  <li><strong>감액 적용:</strong> 수습 3개월 이내 (1년 이상 계약 시 10% 감액 가능), 장애인 등</li>
</ul>
<h4>위반 시 제재</h4>
<ul>
  <li>최저임금 미만 지급: <strong>3년 이하 징역 또는 2천만원 이하 벌금</strong></li>
  <li>최저임금에 미달하는 근로계약은 그 부분에 한하여 <strong>무효</strong> → 최저임금으로 간주</li>
  <li>최저임금 주지 의무: 사업장에 게시 또는 근로자에게 알려야 함</li>
</ul>`
          },
          {
            title: '남녀고용평등법과 고용정책기본법',
            content: `<h4>남녀고용평등과 일·가정 양립 지원에 관한 법률</h4>
<h4>주요 내용</h4>
<ul>
  <li><strong>고용에서의 남녀 차별 금지:</strong> 모집·채용, 임금, 배치·승진, 교육, 정년·퇴직·해고에서 차별 금지</li>
  <li><strong>동일가치노동 동일임금 원칙:</strong> 같은 사업 내 동일 가치 노동에 동일 임금</li>
  <li><strong>직장 내 성희롱 금지:</strong> 사업주·상급자·근로자의 성희롱 금지, 예방교육 연 1회 의무</li>
  <li><strong>적극적 고용개선조치:</strong> 500인 이상 사업장, 여성 고용비율이 일정 기준 미달 시 시행계획 수립</li>
</ul>
<h4>일·가정 양립 지원</h4>
<ul>
  <li><strong>육아휴직:</strong> 만 8세(초등학교 2학년) 이하 자녀, 1년 이내</li>
  <li><strong>육아기 근로시간 단축:</strong> 육아휴직 대신 주 15~35시간 단축 근무</li>
  <li><strong>배우자 출산휴가:</strong> 10일 유급</li>
  <li><strong>가족돌봄휴직:</strong> 부모·배우자·자녀·배우자부모 돌봄, 90일</li>
</ul>
<h4>고용정책기본법</h4>
<ul>
  <li>국가의 고용정책 기본 방향과 수립 절차 규정</li>
  <li><strong>고용영향평가:</strong> 주요 정책이 고용에 미치는 영향 사전 평가</li>
  <li><strong>지역고용촉진:</strong> 지역별 특성에 맞는 고용 창출 지원</li>
  <li><strong>고용정보 수집·제공:</strong> 고용동향, 직업 전망 등 정보 체계 구축</li>
</ul>`
          }
        ]
      }
    ]
  },

  silgi: {
    name: '실기 - 직업상담 실무',
    code: 'silgi',
    color: '#6366F1',
    icon: 'fa-solid fa-file-pen',
    description: '실기 시험 대비 상담 실무, 계산 문제, 핵심 공식을 정리합니다.',
    chapters: [
      {
        title: '상담 실무',
        topics: [
          {
            title: '상담과정과 사례분석',
            content: `<h4>직업상담 실무 절차</h4>
<ol>
  <li><strong>접수 면접:</strong> 내담자의 기본정보 수집, 주호소 문제 파악</li>
  <li><strong>구조화:</strong> 상담의 목적, 과정, 비밀보장 안내</li>
  <li><strong>심리검사 실시:</strong> 적성, 흥미, 가치관 검사 실시 및 해석</li>
  <li><strong>직업정보 탐색:</strong> 워크넷, 직업사전 등 활용</li>
  <li><strong>의사결정 지원:</strong> 합리적 직업선택 돕기</li>
  <li><strong>구직활동 지원:</strong> 이력서 작성, 면접 기술 훈련</li>
  <li><strong>추수상담:</strong> 취업 후 적응 확인</li>
</ol>
<h4>사례분석 포인트</h4>
<ul>
  <li>내담자의 주호소 문제를 정확히 파악</li>
  <li>적절한 상담이론과 기법 적용</li>
  <li>구체적인 상담 계획 수립</li>
  <li>활용 가능한 직업정보와 심리검사 제시</li>
</ul>
<h4>서술형 답안 작성 요령</h4>
<ul>
  <li>질문에서 요구하는 핵심 키워드를 반드시 포함</li>
  <li>번호를 매겨 체계적으로 작성</li>
  <li>간결하고 명확하게 서술</li>
  <li>이론적 근거를 함께 제시</li>
</ul>`
          },
          {
            title: '실기 서술형 빈출 유형',
            content: `<h4>상담이론 관련 빈출 유형</h4>
<ul>
  <li>특정 상담이론의 <strong>핵심 개념 3가지</strong> 서술 (예: REBT의 비합리적 신념 4유형)</li>
  <li>특정 이론의 <strong>상담 기법</strong> 나열 (예: 게슈탈트 상담 기법 5가지)</li>
  <li>상담이론 간 <strong>비교</strong> (예: 파슨스 vs 로저스, 행동주의 vs 인지적 접근)</li>
  <li>사례를 읽고 적절한 <strong>상담이론/기법</strong> 적용 (예: "이 내담자에게 적합한 상담 접근은?")</li>
</ul>
<h4>자주 출제되는 이론별 핵심 키워드</h4>
<table>
  <tr><th>이론</th><th>반드시 기억할 핵심 키워드</th></tr>
  <tr><td>파슨스</td><td>자기이해, 직업이해, 합리적 추론 (3단계)</td></tr>
  <tr><td>윌리엄슨</td><td>분석-종합-진단-예언-상담-추수지도 (6단계)</td></tr>
  <tr><td>로저스</td><td>무조건적 긍정적 존중, 공감적 이해, 일치성</td></tr>
  <tr><td>REBT</td><td>ABCDE 모델, 당위적 사고, 파국화</td></tr>
  <tr><td>벡</td><td>인지삼제, 자동적 사고, 핵심신념, 인지적 오류</td></tr>
  <tr><td>현실치료</td><td>선택이론, 5가지 욕구, WDEP, 전행동</td></tr>
  <tr><td>게슈탈트</td><td>알아차림, 지금-여기, 빈의자, 미해결과제</td></tr>
  <tr><td>아들러</td><td>열등감, 생활양식, 사회적 관심, 격려, 출생순위</td></tr>
  <tr><td>해결중심</td><td>기적질문, 예외질문, 척도질문, 방문형/불평형/고객형</td></tr>
  <tr><td>교류분석</td><td>PAC 자아상태, 상보/교차/이면 교류, 인생태도</td></tr>
</table>
<h4>진로이론 빈출 유형</h4>
<ul>
  <li>Super의 <strong>5단계</strong>와 각 단계의 특징</li>
  <li>Ginzberg의 <strong>3기</strong>와 하위단계</li>
  <li>Gottfredson의 <strong>4단계</strong>와 타협의 순서</li>
  <li>Holland의 <strong>RIASEC 6유형</strong> 특성과 대표 직업</li>
  <li>크럼볼츠의 사회학습이론 <strong>4가지 요인</strong></li>
  <li>SCCT의 <strong>3가지 핵심 변인</strong> (자기효능감, 결과기대, 개인적 목표)</li>
</ul>`
          }
        ]
      },
      {
        title: '노동시장 계산',
        topics: [
          {
            title: '실업률과 경제활동참가율',
            content: `<h4>핵심 공식</h4>
<div class="formula-box">
  <p><strong>실업률 = 실업자 / 경제활동인구 × 100</strong></p>
  <p><strong>경제활동참가율 = 경제활동인구 / 15세 이상 인구 × 100</strong></p>
  <p><strong>고용률 = 취업자 / 15세 이상 인구 × 100</strong></p>
  <p>경제활동인구 = 취업자 + 실업자</p>
  <p>비경제활동인구 = 15세 이상 인구 - 경제활동인구</p>
</div>
<h4>예제</h4>
<p><strong>문제:</strong> 15세 이상 인구 1,000만 명, 취업자 600만 명, 실업자 40만 명일 때:</p>
<ul>
  <li>경제활동인구 = 600 + 40 = 640만 명</li>
  <li>경제활동참가율 = 640/1000 × 100 = 64%</li>
  <li>실업률 = 40/640 × 100 = 6.25%</li>
  <li>고용률 = 600/1000 × 100 = 60%</li>
</ul>`
          },
          {
            title: '노동수요탄력성과 한계수입생산',
            content: `<h4>노동수요의 임금탄력성</h4>
<div class="formula-box">
  <p><strong>노동수요 탄력성 = 노동수요량의 변화율 / 임금의 변화율</strong></p>
  <p>= (ΔL/L) / (ΔW/W)</p>
</div>
<ul>
  <li>|탄력성| > 1: 탄력적 (임금 변화에 민감)</li>
  <li>|탄력성| < 1: 비탄력적 (임금 변화에 둔감)</li>
  <li>|탄력성| = 1: 단위탄력적</li>
</ul>
<h4>마셜의 파생수요 법칙 (탄력성이 큰 경우)</h4>
<ol>
  <li>생산물 수요의 가격탄력성이 클수록</li>
  <li>다른 생산요소의 대체가 용이할수록</li>
  <li>총비용에서 해당 노동비용이 차지하는 비중이 클수록</li>
  <li>다른 생산요소의 공급탄력성이 클수록</li>
</ol>
<h4>한계수입생산(MRPL)</h4>
<div class="formula-box">
  <p><strong>MRPL = MPL × MR</strong></p>
  <p>완전경쟁: MRPL = VMPL = MPL × P</p>
  <p>이윤극대화: MRPL = W (임금)</p>
</div>
<h4>예제</h4>
<p><strong>문제:</strong> 근로자 1명 추가 고용 시 생산량 10개 증가, 생산물 가격 5,000원일 때:</p>
<ul>
  <li>MPL = 10개</li>
  <li>VMPL = 10 × 5,000 = 50,000원</li>
  <li>임금이 50,000원 이하면 고용, 이상이면 비고용</li>
</ul>`
          },
          {
            title: '임금 계산과 퇴직금',
            content: `<h4>평균임금 계산</h4>
<div class="formula-box">
  <p><strong>평균임금 = 산정사유 발생일 이전 3개월간 지급된 임금총액 ÷ 그 기간의 총 일수</strong></p>
</div>
<h4>예제 1: 평균임금 계산</h4>
<p><strong>문제:</strong> 퇴직일: 6월 30일, 최근 3개월(4·5·6월) 임금: 기본급 300만원/월, 식대 20만원/월. 총 일수 = 30+31+30 = 91일</p>
<ul>
  <li>3개월 임금총액 = (300+20)×3 = 960만원</li>
  <li>평균임금 = 9,600,000 / 91 = <strong>105,495원/일</strong></li>
  <li>★ 평균임금이 통상임금보다 낮으면 통상임금을 평균임금으로 함</li>
</ul>
<h4>퇴직금 계산</h4>
<div class="formula-box">
  <p><strong>퇴직금 = 1일 평균임금 × 30일 × (재직일수 / 365)</strong></p>
</div>
<h4>예제 2: 퇴직금 계산</h4>
<p><strong>문제:</strong> 1일 평균임금 = 100,000원, 재직기간 = 3년(1,095일)</p>
<ul>
  <li>퇴직금 = 100,000 × 30 × (1,095/365)</li>
  <li>= 100,000 × 30 × 3 = <strong>9,000,000원</strong></li>
</ul>
<h4>연장근로수당 계산</h4>
<div class="formula-box">
  <p><strong>연장근로수당 = 시간당 통상임금 × 1.5 × 연장근로시간</strong></p>
  <p>야간(22시~06시) 또는 휴일에 연장근로 시: 통상임금 × 2.0</p>
</div>
<h4>예제 3: 연장근로수당</h4>
<p><strong>문제:</strong> 시간당 통상임금 = 15,000원, 연장근로 4시간(그 중 야간 2시간)</p>
<ul>
  <li>일반 연장 2시간 = 15,000 × 1.5 × 2 = 45,000원</li>
  <li>야간 연장 2시간 = 15,000 × 2.0 × 2 = 60,000원</li>
  <li>합계 = <strong>105,000원</strong></li>
</ul>
<h4>구직급여 계산</h4>
<div class="formula-box">
  <p><strong>구직급여일액 = 이직 전 평균임금의 60%</strong></p>
  <p><strong>구직급여 총액 = 구직급여일액 × 소정급여일수</strong></p>
  <p>상한액: 1일 66,000원 (2023년 기준) / 하한액: 최저임금 × 80% × 1일 소정근로시간</p>
</div>`
          }
        ]
      },
      {
        title: '직업정보 활용',
        topics: [
          {
            title: '직업분류와 정보수집 실무',
            content: `<h4>직업분류 실무</h4>
<ul>
  <li>한국표준직업분류(KSCO) 코드 읽기</li>
  <li>한국고용직업분류(KECO) 코드 읽기</li>
  <li>직업분류의 차이점과 활용처 구분</li>
</ul>
<h4>워크넷 활용 실무</h4>
<ul>
  <li><strong>구인구직 검색:</strong> 직종, 지역, 학력 등 조건 검색</li>
  <li><strong>이력서 등록:</strong> 구직자 이력서 작성 및 등록</li>
  <li><strong>심리검사 실시:</strong> 직업선호도검사, 직업적성검사 온라인 실시</li>
  <li><strong>검사 결과 해석:</strong> 검사 결과를 상담에 활용</li>
</ul>
<h4>직업사전 활용</h4>
<ul>
  <li>직무개요: 해당 직업의 주요 업무 내용</li>
  <li>수행직무: 구체적인 작업 내용</li>
  <li>정규교육: 필요한 학력 수준</li>
  <li>숙련기간: 직무수행에 필요한 경력/훈련 기간</li>
  <li>자격/면허: 관련 자격증 정보</li>
</ul>`
          }
        ]
      },
      {
        title: '핵심 공식 정리',
        topics: [
          {
            title: '계산형 문제 공식 모음',
            content: `<h4>노동시장 공식</h4>
<div class="formula-box">
  <p><strong>실업률</strong> = 실업자 / 경제활동인구 × 100</p>
  <p><strong>경제활동참가율</strong> = 경제활동인구 / 15세 이상 인구 × 100</p>
  <p><strong>고용률</strong> = 취업자 / 15세 이상 인구 × 100</p>
  <p><strong>노동수요 탄력성</strong> = (ΔL/L) / (ΔW/W)</p>
</div>
<h4>임금 관련 공식</h4>
<div class="formula-box">
  <p><strong>평균임금</strong> = 3개월간 임금총액 / 3개월간 총 일수</p>
  <p><strong>퇴직금</strong> = 1일 평균임금 × 30일 × (재직일수/365)</p>
  <p><strong>연장근로 가산</strong> = 통상임금 × 1.5 (50% 가산)</p>
  <p><strong>야간/휴일근로 가산</strong> = 통상임금 × 1.5</p>
</div>
<h4>생산성 공식</h4>
<div class="formula-box">
  <p><strong>한계생산물(MPL)</strong> = ΔQ / ΔL</p>
  <p><strong>한계생산물가치(VMPL)</strong> = MPL × P</p>
  <p><strong>한계수입생산(MRPL)</strong> = MPL × MR</p>
  <p><strong>이윤극대화 조건:</strong> MRPL = W</p>
</div>
<h4>인적자본 공식</h4>
<div class="formula-box">
  <p><strong>교육의 순현재가치(NPV)</strong> = Σ[수익/(1+r)^t] - Σ[비용/(1+r)^t]</p>
  <p><strong>내부수익률(IRR):</strong> NPV = 0이 되는 할인율(r)</p>
  <p>NPV > 0 → 교육투자 실행</p>
</div>
<h4>고용보험 계산</h4>
<div class="formula-box">
  <p><strong>구직급여일액</strong> = 이직 전 평균임금의 60%</p>
  <p><strong>구직급여 총액</strong> = 구직급여일액 × 소정급여일수</p>
  <p>소정급여일수: 연령·피보험기간에 따라 120~270일</p>
</div>`
          },
          {
            title: '시험 빈출 수치·기간 총정리',
            content: `<h4>근로기준법 핵심 수치</h4>
<table>
  <tr><th>항목</th><th>수치/기간</th></tr>
  <tr><td>법정 근로시간</td><td><strong>1주 40시간, 1일 8시간</strong></td></tr>
  <tr><td>연장근로 한도</td><td>1주 <strong>12시간</strong></td></tr>
  <tr><td>가산임금 (연장·야간·휴일)</td><td>통상임금의 <strong>50%</strong> 가산</td></tr>
  <tr><td>해고예고 기간</td><td><strong>30일</strong> 전 또는 30일분 통상임금</td></tr>
  <tr><td>경영상 해고 통보</td><td><strong>50일</strong> 전 근로자대표에 통보</td></tr>
  <tr><td>부당해고 구제신청</td><td>해고일로부터 <strong>3개월</strong> 이내</td></tr>
  <tr><td>연차유급휴가 (1년 이상)</td><td><strong>15일</strong> (최대 25일)</td></tr>
  <tr><td>산전후휴가</td><td><strong>90일</strong> (쌍둥이 120일)</td></tr>
  <tr><td>취업규칙 작성 의무</td><td>상시 <strong>10인</strong> 이상</td></tr>
  <tr><td>최저 고용연령</td><td><strong>15세</strong> 미만 금지</td></tr>
  <tr><td>야간근로 시간</td><td>오후 <strong>10시</strong> ~ 오전 <strong>6시</strong></td></tr>
</table>
<h4>고용보험법 핵심 수치</h4>
<table>
  <tr><th>항목</th><th>수치/기간</th></tr>
  <tr><td>구직급여 피보험단위기간</td><td>이직일 이전 18개월 중 <strong>180일</strong> 이상</td></tr>
  <tr><td>구직급여 수준</td><td>평균임금의 <strong>60%</strong></td></tr>
  <tr><td>소정급여일수</td><td><strong>120~270일</strong> (연령·피보험기간별)</td></tr>
  <tr><td>대기기간</td><td><strong>7일</strong></td></tr>
  <tr><td>육아휴직급여</td><td>통상임금의 <strong>80%</strong> (상한 150만원)</td></tr>
</table>
<h4>기타 법규 핵심 수치</h4>
<table>
  <tr><th>항목</th><th>수치/기간</th></tr>
  <tr><td>기간제 사용기간</td><td>최대 <strong>2년</strong></td></tr>
  <tr><td>파견기간</td><td>원칙 <strong>1년</strong>, 최대 <strong>2년</strong></td></tr>
  <tr><td>차별 시정신청</td><td>차별 발생일로부터 <strong>6개월</strong> 이내</td></tr>
  <tr><td>최저임금위원회</td><td><strong>27인</strong> (노사공 각 9인)</td></tr>
  <tr><td>적극적 고용개선조치</td><td><strong>500인</strong> 이상 사업장</td></tr>
  <tr><td>배우자 출산휴가</td><td><strong>10일</strong></td></tr>
</table>
<h4>경제활동 관련 공식 총정리</h4>
<div class="formula-box">
  <p>15세 이상 인구 = 경제활동인구 + 비경제활동인구</p>
  <p>경제활동인구 = 취업자 + 실업자</p>
  <p>실업률 = 실업자 / 경제활동인구 × 100</p>
  <p>경제활동참가율 = 경제활동인구 / 15세 이상 인구 × 100</p>
  <p>고용률 = 취업자 / 15세 이상 인구 × 100</p>
  <p>노동수요 탄력성 = (ΔL/L) / (ΔW/W)</p>
  <p>VMPL = MPL × P (완전경쟁)</p>
  <p>MRPL = MPL × MR (불완전경쟁)</p>
  <p>이윤극대화: MRPL = W</p>
  <p>평균임금 = 3개월 임금총액 / 3개월 총 일수</p>
  <p>퇴직금 = 1일 평균임금 × 30 × (재직일수/365)</p>
</div>`
          }
        ]
      }
    ]
  }
};

/** 과목 코드 순서 (네비게이션용) */
export const SUBJECT_ORDER = ['counseling', 'psychology', 'jobinfo', 'labor_market', 'labor_law', 'silgi'];

/** 과목 코드로 데이터 조회 */
export function getSubject(code) {
  return CURRICULUM[code] || null;
}

/** 이전/다음 과목 코드 */
export function getAdjacentSubjects(code) {
  const idx = SUBJECT_ORDER.indexOf(code);
  return {
    prev: idx > 0 ? SUBJECT_ORDER[idx - 1] : null,
    next: idx < SUBJECT_ORDER.length - 1 ? SUBJECT_ORDER[idx + 1] : null,
  };
}
