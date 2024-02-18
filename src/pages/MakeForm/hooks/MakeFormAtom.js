import { atom } from 'recoil';

export const generateCheckboxQues = ({
  id,
  sectionId,
  questionDescription,
  isMandatory,
  canMultipleCheck = false,
  options = [{ id: 0, option: '' }],
}) => ({
  id,
  sectionId,
  questionDescription,
  isMandatory,
  questionType: 'checkbox',
  canMultipleCheck,
  options,
});

export const generateDescriptiveQues = ({
  id,
  sectionId,
  questionDescription,
  isMandatory,
  characterLimit = 1000,
}) => ({
  id,
  sectionId,
  questionDescription,
  isMandatory,
  questionType: 'descriptive',
  characterLimit,
});

export const sectionDataAtom = atom({
  key: 'sectionData',
  default: [],
});

export const questionDataAtom = atom({
  key: 'questionData',
  default: [],
});
