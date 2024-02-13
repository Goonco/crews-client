import styled from 'styled-components';

import { Text } from 'components/atoms';

const DivisionLine = () => {
  return (
    <LineContainer>
      <Text width="10px">또는</Text>
    </LineContainer>
  );
};

const LineContainer = styled.span``;

export default DivisionLine;
