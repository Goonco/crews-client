import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { sectionDataAtom } from '../hooks/WriteFormAtom';
import { useState } from 'react';

// Imported Functions & Datas
import { W01, B04, B03 } from 'style/palette';

// Imported Components
import SectionBox from './SectionBox';
import { Text } from 'components/atoms';

const SelectSectionBox = () => {
  const sectionData = useRecoilValue(sectionDataAtom);
  const sectionNames = sectionData
    .map((it) => it.sectionName)
    .filter((it) => it !== '공통');

  const [selectedSectionName, setSelectedSectionName] = useState(
    sectionNames[0]
  );

  const changeSelectedSectionName = (e) => {
    if (!window.confirm('섹션 변경 시 기입했던 내용이 사라집니다.')) return;
    setSelectedSectionName(e.currentTarget.name);
  };

  return (
    <SelectSectionContainer>
      <SelectSection>
        {sectionNames.map((it, idx) => (
          <SelectSectionButton
            name={it}
            onClick={changeSelectedSectionName}
            className={it === selectedSectionName ? 'selectedSection' : ''}
          >
            <Text color={W01} size="16px" weight={700} children={it} />
          </SelectSectionButton>
        ))}
      </SelectSection>
      {sectionData.map((it, idx) => {
        if (it.sectionName === selectedSectionName)
          return <SectionBox key={idx} sectionData={it} idx={idx} />;
      })}
    </SelectSectionContainer>
  );
};

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
