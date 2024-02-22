import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useFilteredApplySection } from '../hooks/useApplySectoin';

// Imported Functions & Datas
import { W01, B04, B03 } from 'style/palette';

// Imported Components
import SectionBox from './SectionBox';
import { Text } from 'components/atoms';
import { LoadingPage } from 'pages/Others';
import { Modal, useModal } from 'components/organisms';
import { Confirm } from 'components/molecules';
import { useApplyQuestion } from '../hooks/useApplyQuestion';

const SelectSectionBox = () => {
  const [filteredSectionData, _] = useFilteredApplySection();
  const [questionData, __] = useApplyQuestion();
  const [selectedSectionName, setSelectedSectionName] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // recoilstate의 값을 default 값으로 사용 못함
    setSelectedSectionName(filteredSectionData[0].sectionName);
    setLoading(false);
  }, [filteredSectionData]);

  const selectedSectionData = filteredSectionData.filter(
    (it) => it.sectionName === selectedSectionName
  )[0];

  const [isOpen, toggleOpen] = useModal();

  const [deleteTarget, setDeleteTarget] = useState();
  const handleClick = (e) => {
    toggleOpen();
    setDeleteTarget(e.currentTarget.name);
  };

  const handleConfirm = () => {
    setSelectedSectionName(deleteTarget);
    toggleOpen();
  };

  if (!loading) {
    return (
      <>
        <SelectSectionContainer>
          <SelectSection>
            {filteredSectionData.map((it, idx) => (
              <SelectSectionButton
                key={idx}
                name={it.sectionName}
                onClick={handleClick}
                className={
                  it.sectionName === selectedSectionName
                    ? 'selectedSection'
                    : ''
                }
              >
                <Text
                  color={W01}
                  size="16px"
                  weight={700}
                  children={it.sectionName}
                />
              </SelectSectionButton>
            ))}
          </SelectSection>
          <SectionBox
            sectionData={selectedSectionData}
            questionData={questionData}
            idx={selectedSectionData.id}
          />
        </SelectSectionContainer>
        <Modal isOpen={isOpen} toggleOpen={toggleOpen}>
          <Confirm msgs={msgs} handleConfirm={handleConfirm} />
        </Modal>
      </>
    );
  } else return <LoadingPage />;
};

const msgs = [
  '섹션 변경 시',
  '기입 내용이 사라집니다. 😣',
  '정말 변경하시겠습니까?',
];

const SelectSectionContainer = styled.div`
  margin-top: 25px;
`;

const SelectSection = styled.div`
  display: flex;
  gap: 6px;
`;

const SelectSectionButton = styled.button`
  margin-bottom: -10px;
  padding: 14px 18px 24px;
  border-radius: 10px 10px 0 0;
  background-color: ${B03};

  &.selectedSection {
    background-color: ${B04};
  }
`;

export default SelectSectionBox;
