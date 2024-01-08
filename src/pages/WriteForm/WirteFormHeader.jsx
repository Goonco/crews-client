import styled from 'styled-components';

import { BK02, G05 } from 'style/palette';

import { Flex, Text, Space } from 'components/atoms';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';

const handleQuestionClick = () => {
  alert('설명창 미구현');
};

const WriteFormHeader = () => {
  return (
    <WriteFormHeaderContainer>
      <Flex justify="left" align="center" gap="12">
        <Text
          children="지원서 작성하기"
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
    </WriteFormHeaderContainer>
  );
};

const WriteFormHeaderContainer = styled.div`
  margin: 40px 0;
  text-align: left;
`;

const QuestionButton = styled.button`
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export default WriteFormHeader;
