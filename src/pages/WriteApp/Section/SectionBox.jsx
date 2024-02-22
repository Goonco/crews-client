import styled from 'styled-components';

// Imported Functions & Datas
import { B01, B04 } from 'style/palette';

// Imported Components
import SectionHeader from './SectionHeader';
import QuestionBox from '../Question/QuestionBox';

const SectionBox = ({ sectionData, questionData, idx }) => {
  const { id, sectionName, sectionDescription } = { ...sectionData };

  return (
    <SectionContainer>
      <SectionHeader sectionData={sectionData} idx={idx} />
      <SectionContent>
        {questionData.map((ques, idx) => {
          if (ques.sectionId === id)
            return <QuestionBox questionData={ques} idx={idx} />;
        })}
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

  & div:last-child {
    margin-bottom: 0;
  }
`;

export default SectionBox;
