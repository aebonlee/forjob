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
        title: '직업상담 기법',
        topics: [
          {
            title: '경청과 공감',
            content: `<h4>경청 (Active Listening)</h4>
<p>상담의 가장 기본적인 기법으로, 내담자의 언어적/비언어적 메시지에 주의를 기울이는 것입니다.</p>
<ul>
  <li><strong>수동적 경청:</strong> 조용히 듣기, 고개 끄덕이기, "음", "네" 등</li>
  <li><strong>적극적 경청:</strong> 재진술, 반영, 명료화를 통한 깊은 이해</li>
  <li><strong>비언어적 주의:</strong> 눈맞춤, 몸 기울이기, 개방적 자세</li>
</ul>
<h4>공감 (Empathy)</h4>
<ul>
  <li><strong>1차적 공감:</strong> 내담자가 표현한 감정을 정확히 반영</li>
  <li><strong>고급 공감:</strong> 표면 아래의 감정이나 의미를 포착하여 전달</li>
</ul>
<h4>공감적 반응의 예</h4>
<p>"직장에서 인정받지 못한다고 느끼시니 많이 답답하시겠네요."</p>`
          },
          {
            title: '질문 기법',
            content: `<h4>질문의 유형</h4>
<ul>
  <li><strong>개방형 질문:</strong> "어떻게", "무엇을" 등으로 시작, 자유로운 응답 유도
    <br/>예: "직업을 선택할 때 가장 중요하게 생각하는 것은 무엇인가요?"</li>
  <li><strong>폐쇄형 질문:</strong> "예/아니오"로 답할 수 있는 질문
    <br/>예: "현재 구직활동을 하고 계신가요?"</li>
  <li><strong>척도 질문:</strong> 수치로 상태를 평가
    <br/>예: "1~10점으로 현재 직업만족도를 평가한다면?"</li>
  <li><strong>기적 질문:</strong> 해결중심 접근의 핵심 기법
    <br/>예: "오늘 밤 자는 동안 기적이 일어나서 문제가 해결되었다면, 내일 아침 가장 먼저 무엇이 달라져 있을까요?"</li>
</ul>
<h4>효과적 질문의 원칙</h4>
<ul>
  <li>한 번에 하나의 질문만 하기</li>
  <li>"왜"로 시작하는 질문은 방어를 유발할 수 있으므로 주의</li>
  <li>내담자의 탐색을 촉진하는 질문 사용</li>
</ul>`
          },
          {
            title: '명료화, 직면, 해석',
            content: `<h4>명료화 (Clarification)</h4>
<p>내담자의 모호하거나 불분명한 표현을 분명하게 하는 기법입니다.</p>
<ul>
  <li>"지금 말씀하신 것은 ~라는 뜻인가요?"</li>
  <li>"좀 더 구체적으로 설명해 주시겠어요?"</li>
</ul>
<h4>직면 (Confrontation)</h4>
<p>내담자의 모순, 왜곡, 회피를 지적하여 자각을 촉진하는 기법입니다.</p>
<ul>
  <li>내담자의 말과 행동의 불일치를 지적</li>
  <li>충분한 라포(rapport) 형성 후 사용</li>
  <li>비난이 아닌 관찰의 형태로 전달</li>
  <li>"한편으로는 ~라고 하시면서, 다른 한편으로는 ~라고 하시는 것 같은데요."</li>
</ul>
<h4>해석 (Interpretation)</h4>
<p>내담자의 행동, 사고, 감정 아래에 있는 무의식적 의미나 패턴을 설명하는 기법입니다.</p>
<ul>
  <li>정신분석적 상담에서 주로 사용</li>
  <li>시기적절하고 내담자가 수용할 수 있는 수준에서 제공</li>
</ul>`
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
