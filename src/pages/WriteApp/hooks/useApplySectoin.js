import { useRecoilState } from 'recoil';
import { applySectionAtom } from './WriteAppAtom';

export const useApplySection = () => {
  return useRecoilState(applySectionAtom);
};
