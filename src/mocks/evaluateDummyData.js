export const DUMMY_RECRUITMENT_NAME = (recruitmentID) => {
  let recruitmentName;
  switch (recruitmentID) {
    case '1':
      recruitmentName =
        '멋쟁이 사자처럼 서강대에서 19기 아기사자를 모집합니다!';
      break;
    case '2':
      recruitmentName = '우아한테크코스 5기 모집';
      break;
    default:
      return false;
  }

  return {
    recruitmentName,
  };
};

export const DUMMY_APPLICANT_LIST = (recruitmentId) => {
  switch (recruitmentId) {
    case '1':
      return dummy1;
    case '2':
      return dummy2;
    default:
      return false;
  }
};

const dummy1 = [
  {
    studentId: 20191234,
    name: '정인영',
    major: '아트엔테크놀로지학과',
    selected: false,
    averageScore: 4.4,
    percentage: 10,
    evaluation: [
      { name: '김뭐뭐', score: 3 },
      { name: '송뭐뭐', score: 4 },
      { name: '이뭐뭐', score: 2.5 },
      { name: '박뭐뭐', score: 5 },
    ],
  },
  {
    studentId: 20191235,
    name: '김예은',
    major: '컴퓨터공학과',
    selected: true,
    averageScore: 4.7,
    percentage: 15,
    evaluation: [
      { name: '이뭐뭐', score: 4.5 },
      { name: '박뭐뭐', score: 5 },
      { name: '최뭐뭐', score: 4 },
      { name: '정뭐뭐', score: 3.5 },
    ],
  },
  {
    studentId: 20191999,
    name: '홍진우',
    major: '경제학과',
    selected: false,
    averageScore: 3.8,
    percentage: 8,
    evaluation: [
      { name: '박뭐뭐', score: 3 },
      { name: '이뭐뭐', score: 4 },
      { name: '최뭐뭐', score: 3.5 },
      { name: '김뭐뭐', score: 4.5 },
    ],
  },
  {
    studentId: 20191236,
    name: '이지훈',
    major: '화학공학과',
    selected: false,
    averageScore: 3.9,
    percentage: 12,
    evaluation: [
      { name: '최뭐뭐', score: 3 },
      { name: '김뭐뭐', score: 4 },
      { name: '송뭐뭐', score: 4.2 },
      { name: '박뭐뭐', score: 3.8 },
    ],
  },
  {
    studentId: 20191237,
    name: '한서진',
    major: '의학과',
    selected: true,
    averageScore: 4.5,
    percentage: 18,
    evaluation: [
      { name: '이뭐뭐', score: 4.8 },
      { name: '최뭐뭐', score: 4.5 },
      { name: '박뭐뭐', score: 4.2 },
      { name: '김뭐뭐', score: 4.7 },
    ],
  },
  {
    studentId: 20191238,
    name: '양현우',
    major: '영문학과',
    selected: false,
    averageScore: 3.6,
    percentage: 9,
    evaluation: [
      { name: '이뭐뭐', score: 3.5 },
      { name: '송뭐뭐', score: 4 },
      { name: '최뭐뭐', score: 3 },
      { name: '박뭐뭐', score: 3.8 },
    ],
  },
  {
    studentId: 20191239,
    name: '김하늘',
    major: '미술학과',
    selected: true,
    averageScore: 4.8,
    percentage: 20,
    evaluation: [
      { name: '이뭐뭐', score: 4.7 },
      { name: '최뭐뭐', score: 5 },
      { name: '박뭐뭐', score: 4.8 },
      { name: '송뭐뭐', score: 4.9 },
    ],
  },
  {
    studentId: 20191240,
    name: '정다은',
    major: '사회학과',
    selected: false,
    averageScore: 3.4,
    percentage: 7,
    evaluation: [
      { name: '이뭐뭐', score: 3 },
      { name: '최뭐뭐', score: 3.5 },
      { name: '박뭐뭐', score: 3.2 },
      { name: '김뭐뭐', score: 3.7 },
    ],
  },
  {
    studentId: 20191241,
    name: '장민서',
    major: '경영학과',
    selected: true,
    averageScore: 4.6,
    percentage: 17,
    evaluation: [
      { name: '이뭐뭐', score: 4.5 },
      { name: '박뭐뭐', score: 4.7 },
      { name: '송뭐뭐', score: 4.3 },
      { name: '최뭐뭐', score: 4.6 },
    ],
  },
  {
    studentId: 20191242,
    name: '윤서연',
    major: '물리학과',
    selected: false,
    averageScore: 3.7,
    percentage: 10,
    evaluation: [
      { name: '최뭐뭐', score: 3.5 },
      { name: '송뭐뭐', score: 4 },
      { name: '이뭐뭐', score: 3.8 },
      { name: '박뭐뭐', score: 3.5 },
    ],
  },
  {
    studentId: 20191243,
    name: '임태우',
    major: '음악학과',
    selected: true,
    averageScore: 4.9,
    percentage: 22,
    evaluation: [
      { name: '이뭐뭐', score: 4.8 },
      { name: '최뭐뭐', score: 5 },
      { name: '송뭐뭐', score: 4.9 },
      { name: '박뭐뭐', score: 4.7 },
    ],
  },
];

const dummy2 = [
  {
    studentId: 20191236,
    name: '이지훈',
    major: '화학공학과',
    selected: false,
    averageScore: 3.9,
    percentage: 12,
    evaluation: [
      { name: '최뭐뭐', score: 3 },
      { name: '김뭐뭐', score: 4 },
      { name: '송뭐뭐', score: 4.2 },
      { name: '박뭐뭐', score: 3.8 },
    ],
  },
  {
    studentId: 20191237,
    name: '한서진',
    major: '의학과',
    selected: true,
    averageScore: 4.5,
    percentage: 18,
    evaluation: [
      { name: '이뭐뭐', score: 4.8 },
      { name: '최뭐뭐', score: 4.5 },
      { name: '박뭐뭐', score: 4.2 },
      { name: '김뭐뭐', score: 4.7 },
    ],
  },
  {
    studentId: 20191242,
    name: '윤서연',
    major: '물리학과',
    selected: false,
    averageScore: 3.7,
    percentage: 10,
    evaluation: [
      { name: '최뭐뭐', score: 3.5 },
      { name: '송뭐뭐', score: 4 },
      { name: '이뭐뭐', score: 3.8 },
      { name: '박뭐뭐', score: 3.5 },
    ],
  },
  {
    studentId: 20191243,
    name: '임태우',
    major: '음악학과',
    selected: true,
    averageScore: 4.9,
    percentage: 22,
    evaluation: [
      { name: '이뭐뭐', score: 4.8 },
      { name: '최뭐뭐', score: 5 },
      { name: '송뭐뭐', score: 4.9 },
      { name: '박뭐뭐', score: 4.7 },
    ],
  },
];
