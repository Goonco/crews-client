import { DUMMY_QUESTION_DATA, DUMMY_SECTION_DATA } from 'mocks/dummyDatas';
import SectionBox from 'pages/WriteApp/Section/SectionBox';
import styled from 'styled-components';

const EvalDetail = ({ applyId }) => {
  const sectionData = DUMMY_SECTION_DATA('L126ZC35K2');
  const questionData = DUMMY_QUESTION_DATA('L126ZC35K2');
  return (
    <EvalDetailContaier>
      {sectionData.map((it) => (
        <SectionBox sectionData={it} questionData={questionData} idx={it.id} />
      ))}
    </EvalDetailContaier>
  );
};

const EvalDetailContaier = styled.div``;

export default EvalDetail;
