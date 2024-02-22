import { atom, selector } from 'recoil';

export const applySectionAtom = atom({
  key: 'applySection',
  default: [],
});

export const filteredApplySectionAtom = selector({
  key: 'filteredApplySection',
  get: ({ get }) => {
    const sectionData = get(applySectionAtom);

    return sectionData.filter((it) => it.sectionName !== '공통');
  },
});

export const applyQuestionAtom = atom({
  key: 'applyQuestion',
  default: [],
});
