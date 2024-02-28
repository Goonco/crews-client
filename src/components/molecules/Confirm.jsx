import styled from 'styled-components';

import { Text, Flex } from 'components/atoms';
import { BK02, W01, B05, G02, G01, B06 } from 'style/palette';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';

export const Confirm = ({ msgs, handleConfirm, handleCancel }) => {
  return (
    <ConfirmContainer>
      <ConfirmLogo icon={faCircleExclamation} />
      <Flex direction="column" gap={10}>
        {msgs.map((msg, idx) => (
          <Text key={idx} size="18px" weight={600}>
            {msg}
          </Text>
        ))}
      </Flex>
      <ButtonContainer>
        <StyledButton className="inactive" onClick={handleCancel}>
          <Text children="취소" />
        </StyledButton>
        <StyledButton className="active" onClick={handleConfirm}>
          <Text children="확인" />
        </StyledButton>
      </ButtonContainer>
    </ConfirmContainer>
  );
};

const ConfirmContainer = styled.div`
  padding: 15px 35px;
  border-radius: 10px;

  color: ${BK02};
  text-align: center;
  background-color: ${W01};

  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const ConfirmLogo = styled(FontAwesomeIcon)`
  font-size: 30px;
  color: ${G01};
  margin-top: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

const StyledButton = styled.button`
  font-size: 15px;
  font-weight: 400;
  width: 120px;
  height: 40px;
  border-radius: 10px;

  &.active {
    background-color: ${B05};
    color: ${W01};

    &:hover {
      background-color: ${B06};
    }
  }

  &.inactive {
    background-color: ${G01};
    color: ${BK02};

    &:hover {
      background-color: ${G02};
    }
  }
`;
