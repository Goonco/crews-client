import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnchor } from '@fortawesome/free-solid-svg-icons';

import { B05, BK02 } from '../../style/palette';

import { Flex, Text } from 'components/atoms';

export const LoginHeader = () => {
  return (
    <LoginHeaderContainer>
      <Text color={BK02} size="22px" weight={700}>
        동아리 모집과 지원을 한번에
      </Text>
      <Flex gap="10">
        <Text size="32px" weight={700}>
          Crews
        </Text>
        <FontAwesomeIcon icon={faAnchor} className="fa-2x" />
      </Flex>
    </LoginHeaderContainer>
  );
};

const LoginHeaderContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: start;
  gap: 8px;
  color: ${B05};
`;
