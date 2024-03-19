import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useOption, useQuestion } from '../hooks';

import { BK01, G03, G05 } from 'style/palette';
import { faXmark, faPlus } from '@fortawesome/free-solid-svg-icons';

import { Text } from 'components/atoms';
import ToggleButton from './ToggleButton';

const CheckBoxQues = ({ questionData }) => {
  const { id, isMandatory, canMultipleCheck, options } = { ...questionData };

  const { changeQuestion } = useQuestion();
  const { addOption, changeOption, deleteOption } = useOption();
  const handleAddOptionClick = () => addOption(id);
  const handleOnClick = (e) => changeQuestion(e, id);

  return (
    <>
      <ToggleButtonContainer>
        <ToggleButton
          name="isMandatory"
          status={isMandatory}
          onChange={handleOnClick}
          label="응답 필수"
        />
        <ToggleButton
          name="canMultipleCheck"
          status={canMultipleCheck}
          onChange={handleOnClick}
          label="중복 선택 가능"
        />
      </ToggleButtonContainer>
      {options.map((op) => (
        <OptionBox key={op.id}>
          <input type="radio" defaultChecked={false} />
          <OptionInput
            placeholder="옵션을 작성해주세요."
            value={op.option}
            onChange={(e) => changeOption(e, id, op.id)}
          />
          <DeleteOptionButton
            children={<FontAwesomeIcon icon={faXmark} className="fa-xl" />}
            onClick={() => deleteOption(id, op.id)}
          />
        </OptionBox>
      ))}
      <AddOptionButton onClick={handleAddOptionClick}>
        <FontAwesomeIcon icon={faPlus} />
        <Text size="16px" weight={400} children="옵션 추가" />
      </AddOptionButton>
    </>
  );
};
const OptionInput = styled.input`
  font-size: 16px;
  font-weight: 400;
  font-family: 'Pretendard-Regular';

  &::placeholder {
    color: ${BK01};
  }
`;

export const ToggleButtonContainer = styled.div`
  display: flex;
  justify-content: right;
  gap: 16px;
  margin: 16px 0 0;
`;

const OptionBox = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 20px 0;
  width: 100%;
  color: ${BK01};
`;

const DeleteOptionButton = styled.button`
  position: absolute;
  color: ${G03};
  right: 0px;
`;

const AddOptionButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${G05};
`;

export default CheckBoxQues;
