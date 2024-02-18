import styled from 'styled-components';

// Imported Functions & Datas
import { B01, B04 } from 'style/palette';
import useQuestion from '../hooks/useQuestion';

// Imported Components
import { Button } from 'components/atoms';
import SectionHeader from './SectionHeader';
import QuestionBox from '../Question/QuestionBox';

const SectionBox = ({ sectionData, idx }) => {
  const { id, sectionName, sectionDescription } = { ...sectionData };
  const { questionData, addQuestion } = useQuestion();

  const handleAddQuestionClick = () => addQuestion(sectionData.id);

  return (
    <SectionContainer>
      <SectionHeader sectionData={sectionData} idx={idx} />
      <SectionContent>
        {questionData.map((ques, idx) => {
          if (ques.sectionId === id)
            return <QuestionBox key={idx} questionData={ques} idx={idx} />;
        })}

        <QuestionAddButton
          width="120px"
          height="50px"
          fontSize="18px"
          children="질문 추가"
          onClick={handleAddQuestionClick}
        />
      </SectionContent>
    </SectionContainer>
  );
};

const SectionContainer = styled.div`
  overflow: hidden;
  margin-bottom: 50px;
  width: 100%;
  border-radius: 10px;
  background-color: ${B01};
`;

const SectionContent = styled.div`
  padding: 20px;
`;

const QuestionAddButton = styled(Button)`
  background-color: ${B04};
`;

export default SectionBox;
