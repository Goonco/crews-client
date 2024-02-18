import styled from 'styled-components';

// Imported Functions & Datas
import { B04, W01 } from 'style/palette';

import { Text } from 'components/atoms';

const SectionHeader = ({ sectionData, idx }) => {
  const { sectionName, sectionDescription } = { ...sectionData };

  return (
    <SectionHeaderContainer>
      <Text
        align="left"
        color={W01}
        size="22px"
        weight={700}
        children={sectionName}
      />
      <Text
        align="left"
        color={W01}
        size="14px"
        weight={500}
        children={sectionDescription}
      />
    </SectionHeaderContainer>
  );
};

const SectionHeaderContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 8px;
  padding: 20px;
  color: #fff;
  background-color: ${B04};
`;

export default SectionHeader;
