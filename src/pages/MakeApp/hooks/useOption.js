import { questionDataAtom } from './MakeFormAtom';
import { useRecoilState } from 'recoil';
import { produce } from 'immer';

export const useOption = () => {
  const [questionData, setQuestionData] = useRecoilState(questionDataAtom);

  const addOption = (questionId) => {
    const nextState = produce(questionData, (draftState) => {
      draftState.forEach((ques, idx) => {
        if (ques.id === questionId) {
          draftState[idx].options.push({
            id: ques.options[ques.options.length - 1].id + 1,
            option: '',
          });
        }
      });
    });

    setQuestionData(nextState);
  };

  const deleteOption = (questionId, optionId) => {
    const nextState = produce(questionData, (draftState) => {
      draftState.forEach((ques, idx) => {
        if (ques.id === questionId) {
          if (ques.options.length == 1)
            alert('옵션이 하나 이상 존재해야 합니다.');
          else {
            const newOptions = ques.options.filter((op) => op.id !== optionId);
            draftState[idx].options = newOptions;
          }
        }
      });
    });

    setQuestionData(nextState);
  };

  const changeOption = (e, questionIdx, optionIdx) => {
    const { value } = e.target;

    const newQuestionData = questionData.map((ques, idx) => {
      if (idx === questionIdx) {
        const newOptions = [...ques.options];
        newOptions[optionIdx] = { ...newOptions[optionIdx], option: value };
        return { ...ques, options: newOptions };
      }
      return ques;
    });
    setQuestionData(newQuestionData);
  };

  return {
    questionData,
    setQuestionData,
    addOption,
    deleteOption,
    changeOption,
  };
};
