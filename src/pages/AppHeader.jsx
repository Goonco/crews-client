import styled from 'styled-components';

import { BK02, G05 } from 'style/palette';

import { Flex, Text } from 'components/atoms';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import { Modal, useModal } from 'components/organisms';
import { Alert, Confirm } from 'components/molecules';

const titles = {
  make: '모집하기',
  wait: '모집 대기',
  eval: '평가하기',
};

const descriptions = [
  '모집을 위한 지원서를 생성하는 페이지입니다.',
  '공통 섹션과 섹션 내 4개의 문항은 평가 및 합격 이메일 전달을 위해 사용됩니다.',
];

const AppHeader = ({ status }) => {
  const [isOpen, toggleOpen] = useModal();

  const title = titles[status];

  return (
    <>
      <AppHeaderContainer>
        <Flex justify="start" gap={8}>
          <Text children={title} size="28px" weight={700} color={BK02} />
          <QuestionButton>
            <FontAwesomeIcon
              onClick={toggleOpen}
              icon={faCircleQuestion}
              style={{ color: BK02, fontSize: '23px' }}
            />
          </QuestionButton>
        </Flex>

        <DescriptionContainer>
          {descriptions.map((msg, idx) => (
            <Text key={idx} children={msg} />
          ))}
        </DescriptionContainer>
      </AppHeaderContainer>
      <Modal isOpen={isOpen}>
        <Alert
          msgs={[
            '아직 설명창이 구현되지 않았습니다.',
            '빠른 시일내에 구현될 예정입니다. 😨',
          ]}
          handleAlert={toggleOpen}
        />
      </Modal>
    </>
  );
};

const AppHeaderContainer = styled.div`
  margin: 40px 0;
  text-align: left;
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 5px;

  margin-top: 15px;

  font-size: 17px;
  font-weight: 400;
  color: ${G05};
`;

const QuestionButton = styled.button`
  &:hover {
    opacity: 0.8;
  }
`;
export default AppHeader;
