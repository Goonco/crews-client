import styled from 'styled-components';

// Imported Functions & Datas
import { G02, W01, BK01, B06 } from 'style/palette';

// Imported Components
import { Text } from 'components/atoms';
import CheckBoxQues from './CheckBoxQues';
import DescriptiveQues from './DescriptiveQues';

const QuestionBox = ({ questionData, idx }) => {
  const { questionDescription } = { ...questionData };

  return (
    <QuestionBoxContainer>
      <Text
        size="18px"
        weight={700}
        color={BK01}
        children={questionDescription}
      />

      <QuestionBoxContent questionData={questionData} idx={idx} />
    </QuestionBoxContainer>
  );
};

const QuestionBoxContent = ({ questionData, idx }) => {
  const { questionType, isMandatory, characterLimit, canMultipleCheck } = {
    ...questionData,
  };

  const getOptionString = () => {
    let opStr = '';
    opStr += isMandatory ? '응답 필수, ' : '응답 필수 아님, ';
    if (questionType === 'checkbox')
      opStr += canMultipleCheck ? '중복 선택 가능' : '중복 선택 불가';
    if (questionType === 'descriptive') opStr += `글자수 (0/${characterLimit})`;
    return opStr;
  };

  return (
    <ContentContainer>
      <Text
        align="left"
        size="14px"
        weight={400}
        color={B06}
        children={getOptionString()}
      />
      {questionType === 'checkbox' ? (
        <CheckBoxQues questionData={questionData} idx={idx} />
      ) : questionType === 'descriptive' ? (
        <DescriptiveQues questionData={questionData} idx={idx} />
      ) : null}
    </ContentContainer>
  );
};

const QuestionBoxContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
  padding: 20px;
  border: 1px solid ${G02};
  border-radius: 10px;

  background-color: ${W01};
  color: ${BK01};

  text-align: left;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 20px;

  margin-top: 10px;
`;

export default QuestionBox;
