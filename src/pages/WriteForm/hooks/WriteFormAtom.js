import { atom } from 'recoil';

const Dummy_Section_Data = [
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

const Dummy_Question_Data = [
  {
    id: 0,
    sectionId: 0,
    questionDescription: '공통섹션 - 객관식 질문',
    questionType: 'checkbox',
    isMandatory: true,
    canMultipleCheck: true,
    options: [
      {
        id: 0,
        option: '보기 1',
      },
      {
        id: 1,
        option: '보기 2',
      },
      {
        id: 2,
        option: '보기 3',
      },
    ],
  },
  {
    id: 1,
    sectionId: 0,
    questionDescription: '공통섹션 - 주관식 질문',
    isMandatory: true,
    questionType: 'descriptive',
    characterLimit: '200',
  },
  {
    id: 2,
    sectionId: 1,
    questionDescription: '지원섹션1 - 주관식 질문',
    isMandatory: false,
    questionType: 'descriptive',
    characterLimit: 1000,
  },
  {
    id: 3,
    sectionId: 1,
    questionType: 'checkbox',
    questionDescription: '지원섹션1 - 객관식 질문',
    isMandatory: true,
    canMultipleCheck: false,
    options: [
      {
        id: 0,
        option: '무조건 이거 선택 해용',
      },
    ],
  },
  {
    id: 4,
    sectionId: 2,
    questionType: 'checkbox',
    questionDescription: '지원 섹션 2 - 객관식 질문',
    isMandatory: false,
    canMultipleCheck: true,
    options: [
      {
        id: 0,
        option: '양자 택일 1',
      },
      {
        id: 1,
        option: '양자 택일 2',
      },
    ],
  },
  {
    id: 5,
    sectionId: 2,
    questionDescription: '지원 섹션 2 - 객관식 질문',
    isMandatory: true,
    questionType: 'descriptive',
    characterLimit: '3000',
  },
];

export const sectionDataAtom = atom({
  key: 'writeSectionData',
  default: Dummy_Section_Data,
});

export const questionDataAtom = atom({
  key: 'writeQuestionData',
  default: Dummy_Question_Data,
});
