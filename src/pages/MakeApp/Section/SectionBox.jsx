import styled from 'styled-components';

// Imported Functions & Datas
import { B01, B04 } from 'style/palette';
import { useQuestion } from '../hooks';

// Imported Components
import { Button } from 'components/atoms';
import SectionHeader from './SectionHeader';
import QuestionBox from '../Question/QuestionBox';

const SectionBox = ({ sectionData }) => {
  const { questionData, addQuestion } = useQuestion();

  const handleAddQuestionClick = () => addQuestion(sectionData.id);

  return (
    <SectionContainer>
      <SectionHeader sectionData={sectionData} />

      <SectionContent>
        {questionData.map((ques) =>
          ques.sectionId === sectionData.id ? (
            <QuestionBox key={ques.id} questionData={ques} />
          ) : null
        )}

        <QuestionAddButton
          width="100px"
          height="40px"
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
  margin-left: auto;
  background-color: ${B04};
`;

export default SectionBox;
