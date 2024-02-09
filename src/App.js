import styled from 'styled-components';

import 'style/font.css';
import GlobalStyle from 'style/GlobalStyle';
import { BK02 } from 'style/palette';
import Router from 'Router';

function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <Router />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  /* max-width: 1920px; */
  color: ${BK02};
`;

export default App;
