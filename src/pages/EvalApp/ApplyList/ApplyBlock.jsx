import styled from 'styled-components';
import useApplicantList from '../hooks/useApplicantList';

import { BK02, G01, G02, G03, G05, B02, B04 } from 'style/palette';

import { Flex, Text } from 'components/atoms';
import { Modal, useModal } from 'components/organisms';
import EvalDetail from '../EvalDetail/EvalDetail';

const ApplyBlock = ({ applicantInfo }) => {
  const [isOpen, toggleOpen] = useModal();
  const { studentId, name, major, selected } = { ...applicantInfo };

  const { selectApplicant, detailedApplicant, detailApplicant } =
    useApplicantList();

  const handleSelect = (e) => {
    e.stopPropagation();
    selectApplicant(studentId);
  };

  const handleDetail = () => {
    toggleOpen();
    detailApplicant(studentId);
  };

  return (
    <>
      <ApplyBlockContainer selectedBlock={selected} onClick={handleDetail}>
        <UserInfoSection>
          <Flex className="fixedWidth" direction="column" gap={2} align="start">
            <Text size="17px" weight={700} color={BK02} children={studentId} />
            <Text size="17px" weight={700} color={BK02} children={name} />
            <Text
              size="13px"
              weight={400}
              color={G05}
              lineHeight="160%"
              children={major}
            />
          </Flex>
          <Flex>
            <CheckApplyBlockButton
              onClick={handleSelect}
              selectedBlock={selected}
            />
          </Flex>
        </UserInfoSection>
      </ApplyBlockContainer>
      <Modal isOpen={isOpen} toggleOpen={toggleOpen} align="start">
        <EvalDetail />
      </Modal>
    </>
  );
};

const ApplyBlockContainer = styled.div`
  border: 1px solid ${G02};
  border-radius: 10px;

  width: 230px;
  height: fit-content;
  padding: 25px 20px 20px;

  background-color: ${({ selectedBlock }) => (selectedBlock ? B02 : 'inherit')};
  cursor: pointer;

  &:hover {
    background-color: ${G01};
  }
`;

const UserInfoSection = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const CheckApplyBlockButton = styled.button`
  border: 2px solid ${G03};
  border-radius: 999px;
  width: 25px;
  height: 25px;

  ${({ selectedBlock }) =>
    selectedBlock
      ? `&::after {
    content: '';
    display: block;
    margin: 0 auto;
    width: 13px;
    height: 13px;
    background-color: ${B04};
    border-radius: 999px;
  }`
      : ''}
`;

export default ApplyBlock;
