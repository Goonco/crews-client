import styled from 'styled-components';

import ApplicantSection from './ApplicantSection';
import DeadlineSection from './DeadlineSection';

import { Button } from 'components/atoms';
import { Modal, useModal } from 'components/organisms';
import { AuthFooter, Confirm } from 'components/molecules';
import { W01 } from 'style/palette';
import AppHeader from 'pages/AppHeader';

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
    <>
      <WaitAppWrapper>
        <WaitAppContainer>
          <AppHeader status="wait" />

          <WaitAppContent>
            <ApplicantSection />
            <DeadlineSection />
          </WaitAppContent>
        </WaitAppContainer>

        <Modal isOpen={isOpen}>
          <Confirm msgs={confirmMsg} handleCancel={toggleOpen} />
        </Modal>
      </WaitAppWrapper>
      <AuthFooter>
        <Button
          onClick={handleClick}
          status="active"
          width="200px"
          height="50px"
          children="마감기간 연장하기"
        />
      </AuthFooter>
    </>
  );
};

const WaitAppWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  height: auto;
  margin: 0 auto;
  text-align: center;
`;

const WaitAppContainer = styled.div`
  width: 700px;
  margin: 0 auto;
`;

const WaitAppContent = styled.div`
  margin: 150px 0;
  display: flex;
  flex-direction: column;
  gap: 100px;
`;
