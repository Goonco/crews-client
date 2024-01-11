import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { BK02 } from 'style/palette';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

import { Text } from 'components/atoms';

function EvaluateDetailHeader() {
  return (
    <EvaluateDetailHeaderWrapper>
      <Text
        size="28px"
        weight={700}
        color={BK02}
        children="20201148 정인영 님의 지원서"
      />
      <PagenationBox>
        <FontAwesomeIcon icon={faChevronLeft} />
        <Text size="28px" weight={700} children="01 / 48" />
        <FontAwesomeIcon icon={faChevronRight} />
      </PagenationBox>
    </EvaluateDetailHeaderWrapper>
  );
}

const EvaluateDetailHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  margin: 40px 0;
`;

const PagenationBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  color: ${BK02};
`;

export default EvaluateDetailHeader;
