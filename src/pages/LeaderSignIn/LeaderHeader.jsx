import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnchor } from '@fortawesome/free-solid-svg-icons';

import { B05, BK02 } from '../../style/palette';

import { Flex, Text } from 'components/atoms';

const LeaderSignInHeader = () => {
  return (
    <LeaderSignInHeaderContainer>
      <Text color={BK02} size="22px" weight={700}>
        누구나 쉽게 모집 · 지원
      </Text>
      <Flex gap="10">
        <Text size="32px" weight={700}>
          Crews
        </Text>
        <FontAwesomeIcon icon={faAnchor} className="fa-2x" />
      </Flex>
    </LeaderSignInHeaderContainer>
  );
};

const LeaderSignInHeaderContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: start;
  gap: 8px;
  color: ${B05};
`;

export default LeaderSignInHeader;
