import styled from 'styled-components';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSection } from '../hooks';

// Imported Functions & Datas
import { B04, W01, B03 } from 'style/palette';

const SectionHeader = ({ sectionData }) => {
  const { sectionName, sectionDescription } = { ...sectionData };
  const { deleteSection, changeSection } = useSection();
  const handleDeleteButtonClick = () => deleteSection(sectionData.id);
  const handelInputChange = (e) => changeSection(e, sectionData.id);

  const readOnly = sectionData.id === 0 ? true : false;

  return (
    <SectionHeaderContainer>
      <SectionNameInput
        name="sectionName"
        value={sectionName}
        placeholder="섹션명을 적어주세요."
        onChange={handelInputChange}
        readOnly={readOnly}
        autoComplete="off"
      />

      <SectinoDescriptionInput
        name="sectionDescription"
        placeholder="섹션 설명을 적어주세요."
        value={sectionDescription}
        onChange={handelInputChange}
        autoComplete="off"
      />
      {!readOnly && (
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

  cursor: ${({ readOnly }) => (readOnly ? 'default' : 'inherit')};
`;

const SectinoDescriptionInput = styled.input`
  color: ${W01};
  font-size: 14px;
  font-weight: 400;
  font-family: 'Pretendard-Regular';

  &::placeholder {
    color: ${B03};
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
