import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { sectionDataAtom } from './hooks/EvaluateDetailAtom';

import SectionBox from '../WriteApp/Section/SectionBox';

function FormSection() {
  const sectionData = useRecoilValue(sectionDataAtom);

  return (
    <FormSectionWrapper>
      <SectionBox sectionData={sectionData[0]} idx={0} />
      <SectionBox sectionData={sectionData[1]} idx={1} />
      <SectionBox sectionData={sectionData[2]} idx={2} />
    </FormSectionWrapper>
  );
}

const FormSectionWrapper = styled.div`
  width: 760px;
  margin-bottom: 150px;
`;
export default FormSection;
