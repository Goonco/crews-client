import {
  questionDataAtom,
  generateCheckboxQues,
  generateDescriptiveQues,
} from './MakeFormAtom';
import { useRecoilState } from 'recoil';

const useQuestion = () => {
  const [questionData, setQuestionData] = useRecoilState(questionDataAtom);

  const changeType = (idxToChange, newQuestionType) => {
    const newQuestionData = questionData.map((ques, idx) => {
      if (idx === idxToChange) {
        if (newQuestionType === 'checkbox')
          return generateCheckboxQues({ ...ques });
        if (newQuestionType === 'descriptive')
          return generateDescriptiveQues({ ...ques });
      }
      return ques;
    });

    setQuestionData(newQuestionData);
  };

  const addQuestion = (sectionId) => {
    if (questionData.length >= 30) {
      alert('문항은 30개까지만 추가할 수 있습니다.');
      return;
    }

    let lastId =
      questionData.length === 0
        ? 0
        : questionData[questionData.length - 1].id + 1;

    setQuestionData([
      ...questionData,
      {
        id: lastId,
        sectionId,
        questionType: 'checkbox',
        questionDescription: '',
        isMandatory: false,
        canMultipleCheck: false,
        options: [{ id: 0, option: '' }],
      },
    ]);
  };

  const deleteQuestion = (idxToRemove) => {
    const newQuestionData = [...questionData];
    newQuestionData.splice(idxToRemove, 1);
    setQuestionData(newQuestionData);
  };

  const changeQuestion = (e, idxToChange) => {
    const { name, value, checked } = e.target;

    const newQuestionData = questionData.map((ques, idx) => {
      if (idx === idxToChange) {
        if (name === 'isMandatory' || name === 'canMultipleCheck')
          return { ...ques, [name]: checked };
        else return { ...ques, [name]: value };
      }
      return ques;
    });

    setQuestionData(newQuestionData);
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
    changeType,
    addQuestion,
    deleteQuestion,
    changeQuestion,
    addOption,
    deleteOption,
    changeOption,
  };
};

export const useMyQuestion = () => {
  return useRecoilState(questionDataAtom);
};

export default useQuestion;
