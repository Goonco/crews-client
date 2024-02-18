import {
  generateCheckboxQues,
  generateDescriptiveQues,
} from 'pages/MakeForm/hooks/MakeFormAtom';

export const DEFAULT_SECTION_DATA = [
  {
    id: 0,
    sectionName: '공통',
    sectionDescription: '',
  },
];

export const DEFAULT_QUESTION_DATA = [
  generateDescriptiveQues({
    id: 0,
    sectionId: 0,
    questionDescription: '이름을 작성해주세요.',
    isMandatory: true,
    characterLimit: 100,
  }),
  generateDescriptiveQues({
    id: 1,
    sectionId: 0,
    questionDescription: '학번을 작성해주세요.',
    isMandatory: true,
    characterLimit: 100,
  }),
  generateDescriptiveQues({
    id: 2,
    sectionId: 0,
    questionDescription: '전공을 작성해주세요.',
    isMandatory: true,
    characterLimit: 100,
  }),
  generateDescriptiveQues({
    id: 3,
    sectionId: 0,
    questionDescription:
      '이메일을 작성해주세요. (해당 이메일로 결과가 통지됩니다.)',
    isMandatory: true,
    characterLimit: 100,
  }),
];

export const DUMMY_SECTION_DATA = (applicationId) => {
  if (applicationId === 'L126ZC35K2')
    return [
      {
        id: 0,
        sectionName: '공통',
        sectionDescription: '공통섹션. 공통섹션. 공통섹션.',
      },
      {
        id: 1,
        sectionName: '프론트엔드',
        sectionDescription: '프론트 하지 마세요.. 개노잼인데..',
      },
      {
        id: 2,
        sectionName: '백엔드',
        sectionDescription: '근데 사실 백엔드도 별로임...',
      },
      {
        id: 3,
        sectionName: 'AI',
        sectionDescription: '인공지능 최고',
      },
    ];
  else if (applicationId === 'L251DKE3F3')
    return [
      {
        id: 0,
        sectionName: '공통',
        sectionDescription: '공통섹션. 공통섹션. 공통섹션.',
      },
      {
        id: 1,
        sectionName: '지원 섹션 1',
        sectionDescription: '지원 섹션 1. 지원 섹션 1. 지원 섹션 1.',
      },
      {
        id: 2,
        sectionName: '지원 섹션 2',
        sectionDescription: '지원 섹션 2. 지원 섹션 2. 지원 섹션 2.',
      },
    ];
  else return DEFAULT_SECTION_DATA;
};

export const DUMMY_QUESTION_DATA = (applicationId) => {
  const questionData = [...DEFAULT_QUESTION_DATA];

  if (applicationId === 'L126ZC35K2') {
    const data = [
      generateCheckboxQues({
        id: 4,
        sectionId: 0,
        questionDescription: '객관식은 이런거에요',
        isMandatory: false,
        canMultipleCheck: true,
        options: [
          { id: 0, option: '옵션1' },
          { id: 1, option: '옵션2' },
          { id: 2, option: '옵션3' },
        ],
      }),
      generateCheckboxQues({
        id: 5,
        sectionId: 1,
        questionDescription: 'FE 객관식 1번',
        isMandatory: true,
        canMultipleCheck: false,
        options: [
          { id: 0, option: 'fe 옵션1' },
          { id: 1, option: 'fe 옵션2' },
          { id: 2, option: 'fe 옵션3' },
        ],
      }),
      generateDescriptiveQues({
        id: 6,
        sectionId: 1,
        questionDescription: 'FE 객관식 2번',
        isMandatory: true,
        characterLimit: 1500,
      }),
      generateDescriptiveQues({
        id: 7,
        sectionId: 2,
        questionDescription: '백엔드 어쩌구',
        isMandatory: true,
        characterLimit: 3000,
      }),
      generateCheckboxQues({
        id: 8,
        sectionId: 3,
        questionDescription: 'AI도 있어요?!',
        isMandatory: false,
        canMultipleCheck: false,
        options: [
          { id: 0, option: 'AI 최고' },
          { id: 1, option: 'AIAIAIA' },
          { id: 2, option: 'dmdkdkdkd' },
          { id: 3, option: '귀찮아' },
          { id: 4, option: '매우' },
        ],
      }),
    ];
    questionData.push(...data);
  } else if (applicationId === 'L251DKE3F3') {
    const data = [
      generateCheckboxQues({
        id: 4,
        sectionId: 0,
        questionDescription: '객관식은 이런거에요',
        isMandatory: false,
        canMultipleCheck: true,
        options: [
          { id: 0, option: '옵션1' },
          { id: 1, option: '옵션2' },
          { id: 2, option: '옵션3' },
        ],
      }),
      generateCheckboxQues({
        id: 5,
        sectionId: 1,
        questionDescription: 'FE 객관식 1번',
        isMandatory: true,
        canMultipleCheck: false,
        options: [
          { id: 0, option: 'fe 옵션1' },
          { id: 1, option: 'fe 옵션2' },
          { id: 2, option: 'fe 옵션3' },
        ],
      }),
      generateDescriptiveQues({
        id: 6,
        sectionId: 2,
        questionDescription: 'FE 객관식 2번',
        isMandatory: true,
        characterLimit: 1500,
      }),
      generateDescriptiveQues({
        id: 7,
        sectionId: 2,
        questionDescription: '백엔드 어쩌구',
        isMandatory: true,
        characterLimit: 3000,
      }),
      generateCheckboxQues({
        id: 8,
        sectionId: 2,
        questionDescription: 'AI도 있어요?!',
        isMandatory: false,
        canMultipleCheck: false,
        options: [
          { id: 0, option: 'AI 최고' },
          { id: 1, option: 'AIAIAIA' },
          { id: 2, option: 'dmdkdkdkd' },
          { id: 3, option: '귀찮아' },
          { id: 4, option: '매우' },
        ],
      }),
    ];
    questionData.push(...data);
  }

  return questionData;
};
