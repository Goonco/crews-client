import styled from 'styled-components';

import ApplicantSection from './ApplicantSection';
import DeadlineSection from './DeadlineSection';

import { Button } from 'components/atoms';

export const WaitApp = () => {
  const handleClick = () => {
    alert('마감 기간이 1일 연장됩니다. 마감기간은 되돌릴 수 없습니다. 🧐');
  };

  return (
    <WaitAppWrapper>
      <WaitAppContainer>
        <ApplicantSection />
        <DeadlineSection />
        <Button width="200px" height="50px" onClick={handleClick}>
          마감기간 연장하기
        </Button>
      </WaitAppContainer>
    </WaitAppWrapper>
  );
};

const WaitAppWrapper = styled.div`
  width: 100%;
`;

const WaitAppContainer = styled.div`
  margin: 0 auto;
  padding: 70px;
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 100px;

  background-color: #fff;
`;
