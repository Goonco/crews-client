import React from 'react';
import styled from 'styled-components';

import { BK02 } from 'style/palette';

export const AppContainer = ({ children }) => {
  return <StyledApp>{children}</StyledApp>;
};

const StyledApp = styled.div`
  /* max-width: 1920px; */
  color: ${BK02};
`;
