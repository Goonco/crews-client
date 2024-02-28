import styled from 'styled-components';

import { Text } from 'components/atoms';
import { G04, G06 } from 'style/palette';

const DivisionLine = () => {
  return (
    <LineContainer>
      <Line />
      <Text weight={300} color={G06}>
        or
      </Text>
      <Line />
    </LineContainer>
  );
};

const LineContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  gap: 10px;
`;

const Line = styled.span`
  width: 100%;
  height: 0;
  border-bottom: 1px solid ${G04};
`;

export default DivisionLine;
