import styled from 'styled-components';

import { Text, Flex } from 'components/atoms';
import { BK02, W01, B05 } from 'style/palette';

export const Confirm = ({ msgs, handleConfirm }) => {
  return (
    <ConfirmContainer>
      <Flex direction="column" gap={10}>
        {msgs.map((msg, idx) => (
          <Text key={idx} size="18px" weight={500}>
            {msg}
          </Text>
        ))}
      </Flex>
      <button onClick={handleConfirm}>
        <Text color={B05} size="20px" weight={600} children="확인" />
      </button>
    </ConfirmContainer>
  );
};

const ConfirmContainer = styled.div`
  padding: 50px 100px 30px;
  border-radius: 10px;

  color: ${BK02};
  text-align: center;
  background-color: ${W01};

  button {
    margin-top: 30px;
  }
`;
