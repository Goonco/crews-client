import { atom } from 'recoil';

export const sectionDataAtom = atom({
  key: 'writeSectionData',
  default: [],
});

export const questionDataAtom = atom({
  key: 'writeQuestionData',
  default: [],
});
