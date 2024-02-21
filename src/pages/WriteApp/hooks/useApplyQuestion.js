import { useRecoilState } from 'recoil';
import { applyQuestionAtom } from './WriteAppAtom';

export const useApplyQuestion = () => {
  return useRecoilState(applyQuestionAtom);
};
