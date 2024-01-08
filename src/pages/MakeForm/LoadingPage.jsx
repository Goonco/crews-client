import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const LoadingPage = () => {
  return (
    <LoadingContainer>
      지원서 전송 중입니다. 잠시만 기달려 주세요 :)
      <FontAwesomeIcon className="fa-2xl" icon={faSpinner} spinPulse />
    </LoadingContainer>
  );
};

const LoadingContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
  opacity: 70%;
`;

export default LoadingPage;
