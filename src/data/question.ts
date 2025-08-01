export interface QuestionOption {
  text: string;
  value: string | number | boolean | null; // API로 보낼 실제 값
  field: string; // API 항목 이름
}

export interface Question {
  id: number;
  text: string;
  subtitle?: string;
  options: QuestionOption[];
  isMultiple?: boolean; // ✨ 복수 선택 가능 여부 추가
}

export const diagnosisQuestions: Question[] = [
  {
    id: 1,
    text: '1. 창업 준비나 시작한 지, 얼마나 되셨나요?',
    options: [
      { text: '예비창업', value: 0, field: 'years' },
      { text: '창업 1년 미만', value: 1, field: 'years' },
      { text: '창업 1년 이상 - 2년 미만', value: 2, field: 'years' },
      { text: '창업 2년 이상 - 3년 미만', value: 3, field: 'years' },
      { text: '창업 3년 이상 - 5년 미만', value: 4, field: 'years' },
      { text: '창업 5년 이상 - 7년 미만', value: 5, field: 'years' },
      { text: '재창업', value: null, field: 'years' }, // 재창업의 경우 years를 null로
    ],
  },
  {
    id: 2,
    text: '2. 어떤 분야에서 창업하셨거나 준비 중이세요? (복수선택 가능)',
    isMultiple: true,
    options: [
      { text: '문화·예술', value: "CULTURE", field: 'supportFields' },
      { text: '콘텐츠', value: "CONTENT", field: 'supportFields' },
      { text: '기술 개발', value: "TECH", field: 'supportFields' },
      { text: '제조업', value: "MANUFACTURE", field: 'supportFields' },
      { text: '농업', value: "AGRICULTURE", field: 'supportFields' },
      { text: '요식업 (식당·카페 등)', value: "FB", field: 'supportFields' },
      { text: '사회 문제 해결', value: "SOCIAL", field: 'supportFields' },
      { text: '기타', value: "ETC", field: 'supportFields' },
    ],
  },
  {
    id: 3,
    text: '3. 해당되는 조건이 있을까요? (복수선택 가능)',
    isMultiple: true,
    options: [
      { text: '여성 기업이에요', value: "WOMEN", field: 'targets' },
      { text: '대학생이에요', value: "UNIV", field: 'targets' },
      { text: '사회적 기업이에요', value: "SOC", field: 'targets' },
      { text: '1인 창업이에요', value: "SOLO", field: 'targets' },
      { text: '소상공인이에요', value: "SMBIZ", field: 'targets' },
      { text: '해당 사항 없어요', value: null, field: 'targets' },
    ],
  },
  {
    id: 4,
    text: '4. 창업 아이템, 있으신가요?',
    options: [
      { text: '네, 있어요', value: true, field: 'hasItem' },
      { text: '아니요, 아직이에요', value: false, field: 'hasItem' },
    ],
  },
  {
    id: 5,
    text: '5. 창업 교육, 들어보신 적 있나요?',
    options: [
      { text: '네, 있어요', value: true, field: 'hasEdu' },
      { text: '아니요, 아직이에요', value: false, field: 'hasEdu' },
    ],
  },
  {
    id: 6,
    text: '6. 같이 하는 팀이 있으세요?',
    options: [
      { text: '네, 있어요', value: true, field: 'hasTeam' },
      { text: '아니요, 혼자예요', value: false, field: 'hasTeam' },
    ],
  },
  {
    id: 7,
    text: '7. 비즈니스 모델, 정리해보셨나요?',
    subtitle: '(누구에게 어떤 가치를 주고, 어떻게 수익을 낼지에 대한 계획이에요)',
    options: [
      { text: '네, 있어요', value: true, field: 'hasModel' },
      { text: '아니요, 아직이에요', value: false, field: 'hasModel' },
    ],
  },
  {
    id: 8,
    text: '8. 사업 계획서, 써보신 적 있으세요?',
    subtitle: '(아이디어, 시장, 수익 구조 등을 정리해 지원사업에 제출하는 문서예요)',
    options: [
      { text: '네, 제출할 수 있을 정도로 써봤어요', value: true, field: 'hasPlanner' },
      { text: '아니요, 아직 초안도 없어요', value: false, field: 'hasPlanner' },
    ],
  },
  {
    id: 9,
    text: '9. 창업 조언해주는 멘토, 있으세요?',
    options: [
      { text: '네, 있어요', value: true, field: 'hasMentor' },
      { text: '아니요, 없어요', value: false, field: 'hasMentor' },
    ],
  },
  {
    id: 10,
    text: '10. 지금 사업을 시작할 만큼 자금은 준비되셨나요?',
    subtitle: '(제품 개발, 공간 임대, 마케팅 등 초기 비용 기준이에요)',
    options: [
      { text: '네, 확보해놨어요', value: true, field: 'hasCapital' },
      { text: '아니요, 아직이에요', value: false, field: 'hasCapital' },
    ],
  },
  {
    id: 11,
    text: '11. 사업을 운영할 수 있는 공간이 있으세요?',
    subtitle: '(사무실, 작업실, 공유 오피스 등 실제로 활동할 수 있는 공간을 말해요)',
    options: [
      { text: '네, 있어요', value: true, field: 'hasSpace' },
      { text: '아니요, 아직이에요', value: false, field: 'hasSpace' },
    ],
  },
  {
    id: 12,
    text: '12. 사업자 등록은 마치셨어요?',
    subtitle: '(세무서나 홈택스를 통해 정식 등록한 상태인지 기준이에요)',
    options: [
      { text: '네, 등록했어요', value: true, field: 'isRegistered' },
      { text: '아니요, 아직 안 했어요', value: false, field: 'isRegistered' },
    ],
  },
  {
    id: 13,
    text: '13. 어느 지역에서 창업할 계획이세요? (복수선택 가능)',
    isMultiple: true,
    options: [
      { text: '지역은 상관없어요', value: "ALL", field: 'regions' },
      { text: '서울', value: "SEOUL", field: 'regions' },
      { text: '부산', value: "BUSAN", field: 'regions' },
      { text: '대구', value: "DEAGU", field: 'regions' },
      { text: '인천', value: "INCHEON", field: 'regions' },
      { text: '광주', value: "GWANGJU", field: 'regions' },
      { text: '대전', value: "DEAJEON", field: 'regions' },
      { text: '울산', value: "ULSAN", field: 'regions' },
      { text: '세종', value: "SEJONG", field: 'regions' },
      { text: '경기', value: "GYEONGGI", field: 'regions' },
      { text: '강원', value: "GANGWON", field: 'regions' },
      { text: '충북', value: "CHUNGBUK", field: 'regions' },
      { text: '충남', value: "CHUNGNAM", field: 'regions' },
      { text: '전북', value: "JEONBUK", field: 'regions' },
      { text: '전남', value: "JEONNAM", field: 'regions' },
      { text: '경북', value: "GYEONGBUK", field: 'regions' },
      { text: '경남', value: "GYEONGNAM", field: 'regions' },
      { text: '제주', value: "JEJU", field: 'regions' },
    ],
  },
];