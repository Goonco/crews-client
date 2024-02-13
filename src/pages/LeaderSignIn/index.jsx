import styled from 'styled-components';

import LeaderSignInHeader from './LeaderHeader';
import LeaderInput from './LeaderInput';
import RecruitmentInput from './RecruitmentInput';
import DivisionLine from './DivisionLine';

export const LeaderSignIn = () => {
  return (
    <SignInWrapper>
      <SignInContainer>
        <LeaderSignInHeader />
        <RecruitmentInput />
        <DivisionLine />
        <LeaderInput />
      </SignInContainer>
    </SignInWrapper>
  );
};

export const SignInWrapper = styled.div`
  width: 100%;
  background-color: #fdfdfd;
`;

export const SignInContainer = styled.div`
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
