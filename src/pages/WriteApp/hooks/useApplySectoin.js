import { useRecoilState } from 'recoil';
import { applySectionAtom, filteredApplySectionAtom } from './WriteAppAtom';

export const useApplySection = () => {
  return useRecoilState(applySectionAtom);
};

export const useFilteredApplySection = () => {
  return useRecoilState(filteredApplySectionAtom);
};
