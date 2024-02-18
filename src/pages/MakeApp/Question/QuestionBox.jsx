import styled from 'styled-components';
import useQuestion from '../hooks/useQuestion';

// Imported Functions & Datas
import { G02, W01, BK01, B04 } from 'style/palette';

// Imported Components
import QuestionHeader from './QuestionHeader';
import CheckBoxQues from './CheckBoxQues';
import DescriptiveQues from './DescriptiveQues';

const QuestionBox = ({ questionData, idx }) => {
  const { questionType, questionDescription } = { ...questionData };
  const { changeQuestion } = useQuestion();
  const onChangeQuestion = (e) => changeQuestion(e, idx);

  return (
    <>
      <QuestionHeader questionType={questionType} idx={idx} />
      <QuestionBoxContainer>
        <QuestionDescription
          name="questionDescription"
          value={questionDescription}
          placeholder="질문을 입력해주세요."
          onChange={onChangeQuestion}
        />
        <QuestionBoxContent questionData={questionData} idx={idx} />
      </QuestionBoxContainer>
    </>
  );
};

const QuestionBoxContent = ({ questionData, idx }) => {
  const { questionType } = { ...questionData };

  if (questionType === 'checkbox')
    return <CheckBoxQues questionData={questionData} idx={idx} />;
  else if (questionType === 'descriptive')
    return <DescriptiveQues questionData={questionData} idx={idx} />;
  else if (questionType === 'file') return null;
};

const QuestionBoxContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
  padding: 20px;
  border: 1px solid ${G02};
  border-radius: 0 10px 10px 10px;

  background-color: ${W01};
  color: ${BK01};

  text-align: left;
`;

const QuestionDescription = styled.input`
  color: ${BK01};

  width: 100%;
  font-size: 18px;
  font-weight: 700;
  font-family: 'Pretendard-Regular';

  padding-bottom: 16px;
  border-bottom: 3px solid ${B04};

  &::placeholder {
    color: ${BK01};
  }
`;

export default QuestionBox;
