import { atom } from 'recoil';

export const generateCheckboxQues = ({
  id,
  sectionId,
  questionDescription,
  isMandatory,
}) => ({
  id,
  sectionId,
  questionDescription,
  isMandatory,
  questionType: 'checkbox',
  canMultipleCheck: false,
  options: [{ id: 0, option: '' }],
});

export const generateDescriptiveQues = ({
  id,
  sectionId,
  questionDescription,
  isMandatory,
}) => ({
  id,
  sectionId,
  questionDescription,
  isMandatory,
  questionType: 'descriptive',
  characterLimit: 1000,
});

export const sectionDataAtom = atom({
  key: 'sectionData',
  default: [],
});

export const questionDataAtom = atom({
  key: 'questionData',
  default: [
    generateDescriptiveQues({
      id: 0,
      sectionId: 0,
      questionDescription: '이름을 작성해주세요.',
      isMandatory: true,
    }),
    generateDescriptiveQues({
      id: 1,
      sectionId: 0,
      questionDescription: '학번을 작성해주세요.',
      isMandatory: true,
    }),
    generateDescriptiveQues({
      id: 2,
      sectionId: 0,
      questionDescription: '전공을 작성해주세요.',
      isMandatory: true,
    }),
    generateDescriptiveQues({
      id: 3,
      sectionId: 0,
      questionDescription:
        '이메일을 작성해주세요. (해당 이메일로 결과가 통지됩니다.)',
      isMandatory: true,
    }),
  ],
});
