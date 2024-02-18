import styled from 'styled-components';

import { BK02, G05 } from 'style/palette';

import { Flex, Text, Space } from 'components/atoms';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';

const handleQuestionClick = () => {
  alert('설명창 미구현');
};

const MakeAppHeader = () => {
  return (
    <MakeAppHeaderContainer>
      <Flex justify="left" align="center" gap="12">
        <Text children="STEP 02" size="28px" weight="bold" color={BK02} />
        <TextLine color={G05} size="22px" />
        <Text
          children="지원서 양식 작성"
          size="28px"
          weight="bold"
          color={BK02}
        />
        <QuestionButton>
          <FontAwesomeIcon
            onClick={handleQuestionClick}
            icon={faCircleQuestion}
            className="fa-2xl"
            style={{ color: BK02 }}
          />
        </QuestionButton>
      </Flex>
      <Space height="12px" />
      <Text
        children="지원서는 모집 기간 이후 수정이 불가능하니 신중하게 작성해주세요."
        size="20px"
        weight="400"
        color={G05}
      />
    </MakeAppHeaderContainer>
  );
};

const MakeAppHeaderContainer = styled.div`
  margin: 40px 0;
  text-align: left;
`;

const QuestionButton = styled.button`
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const TextLine = styled.span`
  border: 2px solid ${({ color }) => color};
  border-radius: 999px;
  height: ${({ size }) => size};
`;

export default MakeAppHeader;
