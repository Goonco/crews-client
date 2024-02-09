import styled from 'styled-components';

import { BK02 } from 'style/palette';
import { Flex, Text } from 'components/atoms';

export const LoginOptions = () => {
  return (
    <LoginOptionContainer>
      <Flex justify="space-between">
        <StyledLabel>
          <StoreCheckInput type="checkbox" />
          <OptionText>아이디 저장</OptionText>
        </StyledLabel>
        <Flex gap="10">
          <OptionText className="bar">아이디 찾기</OptionText>
          <OptionText className="bar">비밀번호 찾기</OptionText>
          <OptionText>회원가입</OptionText>
        </Flex>
      </Flex>
    </LoginOptionContainer>
  );
};

const LoginOptionContainer = styled.div`
  margin: 30px 0;
`;

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const OptionText = ({ children, className }) => {
  return (
    <OptionButton className={className}>
      <Text color={BK02} size="15px" weight={500}>
        {children}
      </Text>
    </OptionButton>
  );
};

const OptionButton = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;

  &.bar:after {
    content: '';
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 1px;
    width: 0px;
    height: 15px;
  }
`;

const StoreCheckInput = styled.input`
  appearance: none;
  border: 2.5px solid #cccccc;
  border-radius: 50px;
  width: 20px;
  height: 20px;
  cursor: pointer;
  &:checked {
    border-color: transparent;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-color: #3172ea;
  }
`;
