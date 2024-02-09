import { atom, selector } from 'recoil';

export const applicantListAtom = atom({
  key: 'applicantList',
  default: [],
});

export const applicantListSelector = selector({
  key: 'selectedApplicantList',
  get: ({ get }) => {
    const applicantList = get(applicantListAtom);
    return applicantList.filter((it) => it.selected);
  },
});

export const detailedApplicantAtom = atom({
  key: 'detailedApplicant',
  default: -1,
});
