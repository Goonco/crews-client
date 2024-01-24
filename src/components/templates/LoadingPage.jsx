import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNodes } from '@fortawesome/free-solid-svg-icons';

import { W01, B07 } from 'style/palette';

import { Text } from 'components/atoms';

export const LoadingPage = () => {
  return (
    <PageContainer>
      <FontAwesomeIcon icon={faCircleNodes} beatFade className="fa-3x" />
      <Text size="20px" weight={700} children="로 딩 중" />
    </PageContainer>
  );
};

export const PageContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  background-color: ${W01};
  color: ${B07};

  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;
