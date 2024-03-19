import {
  questionDataAtom,
  generateCheckboxQues,
  generateDescriptiveQues,
} from './MakeFormAtom';
import { useRecoilState } from 'recoil';
import { produce } from 'immer';

export const useQuestion = () => {
  const [questionData, setQuestionData] = useRecoilState(questionDataAtom);

  const changeType = (questionId, newQuesType) => {
    const nextState = produce(questionData, (draftState) => {
      draftState.forEach((ques, idx) => {
        if (ques.id === questionId) {
          if (newQuesType === 'checkbox')
            draftState[idx] = generateCheckboxQues({ ...ques });
          if (newQuesType === 'descriptive')
            draftState[idx] = generateDescriptiveQues({ ...ques });
        }
      });
    });

    setQuestionData(nextState);
  };

  const addQuestion = (sectionId) => {
    if (questionData.length >= 30) {
      alert('문항은 30개까지만 추가할 수 있습니다.');
      return;
    }

    const nextState = produce(questionData, (draftState) => {
      draftState.push(
        generateCheckboxQues({
          id: questionData[questionData.length - 1].id + 1,
          sectionId,
        })
      );
    });

    setQuestionData(nextState);
  };

  const deleteQuestion = (questionId) => {
    if (questionData.length == 1) {
      alert('문항이 최소 하나 이상 있어야 합니다');
      return;
    }

    setQuestionData(questionData.filter((ques) => ques.id !== questionId));
  };

  const changeQuestion = (e, questionId) => {
    const { name, value, checked } = e.target;

    const nextState = produce(questionData, (draftState) => {
      draftState.forEach((ques, idx) => {
        if (ques.id === questionId) {
          if (name === 'isMandatory' || name === 'canMultipleCheck')
            draftState[idx][name] = checked;
          else draftState[idx][name] = value;
        }
      });
    });

    setQuestionData(nextState);
  };

  const addOption = (idxToAdd) => {
    const newQuestionData = questionData.map((ques, idx) => {
      if (idx === idxToAdd) {
        const newId = ques.options.length;
        return {
          ...ques,
          options: [...ques.options, { id: newId, option: '' }],
        };
      }

      return ques;
    });

    setQuestionData(newQuestionData);
  };

  const deleteOption = (questionIdx, optionIdx) => {
    const newQuestionData = questionData.map((ques, idx) => {
      if (idx === questionIdx) {
        const newOptions = ques.options.filter(
          (op, opIdx) => opIdx !== optionIdx
        );
        return {
          ...ques,
          options: newOptions,
        };
      }
      return ques;
    });

    setQuestionData(newQuestionData);
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
    changeType,
    addQuestion,
    deleteQuestion,
    changeQuestion,
    addOption,
    deleteOption,
    changeOption,
  };
};
