import styled from 'styled-components';

import { Text } from 'components/atoms';
import { B06 } from 'style/palette';
import useAuth from 'apis/context/useAuth';

const ClipBoardSection = () => {
  const { auth } = useAuth();

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(auth.id);
    } catch (e) {
      console.error(e.message);
    }
  };

  return (
    <ClipBoardBox>
      <button onClick={handleClick}>
        <Text color={B06} weight={700} underline={true}>
          여기
        </Text>
      </button>
      <Text>를 눌러 모집코드를 복사하세요.</Text>
    </ClipBoardBox>
  );
};

const ClipBoardBox = styled.section`
  span {
    font-size: 22px;
  }
`;

export default ClipBoardSection;
