import styled from 'styled-components';

import { LoginInput } from './LoginInput';
import { LoginHeader } from './LoginHeader';

export const Login = () => {
  return (
    <LoginPageWrapper>
      <LoginPageContainer>
        <LoginHeader />
        <LoginInput />
      </LoginPageContainer>
    </LoginPageWrapper>
  );
};

const LoginPageWrapper = styled.div`
  width: 100%;
  background-color: #fdfdfd;
`;

const LoginPageContainer = styled.div`
  margin: 0 auto;
  padding: 70px;
  width: fit-content;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #fff;
`;
