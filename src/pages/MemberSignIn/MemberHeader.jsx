import { Flex, Text } from 'components/atoms';
import styled from 'styled-components';

import { B05, BK02 } from 'style/palette';

const MemberHeader = ({ recruitmentName }) => {
  return (
    <MemberHeaderContainer>
      <Flex gap={5}>
        <Text size="28px" color={B05} weight={700} children={recruitmentName} />
        <Text size="20px" color={BK02} weight={700}>
          에 지원하시나요?
        </Text>
      </Flex>
      <Text size="20px" color={BK02} weight={700}>
        아래에 지원 비밀번호를 입력해주세요 😀
      </Text>
    </MemberHeaderContainer>
  );
};

const MemberHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default MemberHeader;
