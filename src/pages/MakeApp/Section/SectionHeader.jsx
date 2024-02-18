import styled from 'styled-components';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useSection from '../hooks/useSection';

// Imported Functions & Datas
import { B04, W01, B03 } from 'style/palette';

import { Text } from 'components/atoms';

const SectionHeader = ({ sectionData, idx }) => {
  const { sectionName, sectionDescription } = { ...sectionData };
  const { deleteSection, changeSection } = useSection();
  const handleDeleteButtonClick = () => deleteSection(idx);
  const handelInputChange = (e) => changeSection(e, idx);

  return (
    <SectionHeaderContainer>
      {idx === 0 ? (
        <Text
          align="left"
          color={W01}
          size="22px"
          weight={700}
          children={sectionName}
        />
      ) : (
        <SectionNameInput
          name="sectionName"
          value={sectionName}
          placeholder="이름없는 섹션"
          onChange={handelInputChange}
        />
      )}
      <SectinoDescriptionInput
        name="sectionDescription"
        placeholder="섹션 설명 쓰기"
        value={sectionDescription}
        onChange={handelInputChange}
      />
      {idx !== 0 && (
        <DeleteSectionButton
          onClick={handleDeleteButtonClick}
          children={<FontAwesomeIcon icon={faXmark} className="fa-xl" />}
        />
      )}
    </SectionHeaderContainer>
  );
};

const SectionHeaderContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 8px;
  padding: 20px;
  color: #fff;
  background-color: ${B04};
`;

const SectionNameInput = styled.input`
  width: fit-content;
  color: ${W01};
  font-size: 22px;
  font-weight: 700;
  font-family: 'Pretendard-Regular';

  &::placeholder {
    color: ${B03};
  }
`;

const SectinoDescriptionInput = styled.input`
  color: ${W01};
  font-size: 14px;
  font-weight: 400;
  font-family: 'Pretendard-Regular';

  &::placeholder {
    color: ${W01};
    text-decoration: underline;
  }
`;

const DeleteSectionButton = styled.button`
  position: absolute;
  color: ${W01};
  top: 20px;
  right: 20px;
`;

export default SectionHeader;
