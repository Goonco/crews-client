import styled from 'styled-components';
import { useQuestion } from '../hooks';

// Imported Functions & Datas
import { G02, W01, BK01, B04 } from 'style/palette';

// Imported Components
import QuestionHeader from './QuestionHeader';
import CheckBoxQues from './CheckBoxQues';
import DescriptiveQues from './DescriptiveQues';

const QuestionBox = ({ questionData }) => {
  const { id, questionType, questionDescription } = { ...questionData };
  const { changeQuestion } = useQuestion();
  const onChangeQuestion = (e) => changeQuestion(e, id);

  return (
    <>
      <QuestionHeader questionType={questionType} questionId={id} />
      <QuestionBoxContainer>
        <QuestionDescription
          name="questionDescription"
          value={questionDescription}
          placeholder="질문을 입력해주세요."
          onChange={onChangeQuestion}
        />
        {questionType === 'checkbox' ? (
          <CheckBoxQues questionData={questionData} />
        ) : questionType === 'descriptive' ? (
          <DescriptiveQues questionData={questionData} />
        ) : null}
      </QuestionBoxContainer>
    </>
  );
};

const QuestionBoxContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
  padding: 15px 20px;
  border: 1px solid ${G02};
  border-radius: 0 10px 10px 10px;

  background-color: ${W01};
  color: ${BK01};

  text-align: left;
`;

const QuestionDescription = styled.input`
  color: ${BK01};

  width: 100%;
  font-size: 17px;
  font-weight: 600;
  font-family: 'Pretendard-Regular';

  padding-bottom: 10px;
  border-bottom: 2px solid ${B04};

  &::placeholder {
    color: ${BK01};
  }
`;

export default QuestionBox;
