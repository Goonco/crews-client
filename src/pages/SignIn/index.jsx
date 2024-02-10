import styled from 'styled-components';

import LoginHeader from './LoginHeader';
import LeaderInput from './LeaderInput';
import MemberInput from './MemberInput';
import DivisionLine from './DivisionLine';

export const Login = () => {
  return (
    <LoginPageWrapper>
      <LoginPageContainer>
        <LoginHeader />
        <MemberInput />
        <DivisionLine />
        <LeaderInput />
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
  gap: 40px;

  background-color: #fff;
`;
