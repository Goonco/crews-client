import styled from 'styled-components';

import ApplicantSection from './ApplicantSection';
import DeadlineSection from './DeadlineSection';

import { Button } from 'components/atoms';
import { Modal, useModal } from 'components/organisms';
import { Confirm } from 'components/molecules';
import { W01 } from 'style/palette';

const confirmMsg = [
  '마감 기간 연장 시',
  '다시 되돌릴 수 없습니다 😥',
  ' 그래도 연장하시겠습니까?',
];

export const WaitApp = () => {
  const [isOpen, toggleOpen] = useModal();

  const handleClick = () => {
    toggleOpen();
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

      <Modal isOpen={isOpen} toggleOpen={toggleOpen}>
        <Confirm msgs={confirmMsg} />
      </Modal>
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

  background-color: ${W01};
`;
