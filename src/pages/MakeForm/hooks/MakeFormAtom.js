import { atom } from 'recoil';

export const sectionDataAtom = atom({
  key: 'sectionData',
  default: [
    {
      id: 0,
      sectionName: '공통',
      sectionDescription: '',
    },
  ],
});

export const questionDataAtom = atom({
  key: 'questionData',
  default: [
    {
      id: 0,
      sectionId: 0,
      questionDescription: '',
      questionType: 'checkbox',
      isMandatory: false,
      canMultipleCheck: false,
      options: [{ id: 0, option: '' }],
    },
  ],
});

export const DEFAULT_CHECKBOX_DATA = ({
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

export const DEFAULT_DESCRIPTIVE_DATA = ({
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
