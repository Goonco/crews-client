import styled from 'styled-components';

import { G06, G02, B04, W01 } from 'style/palette';
import { Text } from 'components/atoms';

const ToggleButton = ({ name, status, onClick, label }) => {
  return (
    <LabelBox>
      <Text size="14px" color={G06} children={label} />
      <InvisibleInput
        name={name}
        type="checkbox"
        checked={status}
        onChange={onClick}
      />
      <ToggleContainer isOn={status}>
        <ToggleCircle isOn={status} />
      </ToggleContainer>
    </LabelBox>
  );
};

const InvisibleInput = styled.input`
  width: 100%;
  height: 100%;
  opacity: 0;

  position: absolute;
  z-index: 1;
  cursor: pointer;
`;

const LabelBox = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
`;

const ToggleContainer = styled.button`
  position: relative;
  border-radius: 999px;
  width: 40px;
  height: 21px;

  background-color: ${({ isOn }) => (isOn ? B04 : G02)};
  transition: 0.5s;
`;

const ToggleCircle = styled.div`
  width: 15px;
  height: 15px;

  ${({ isOn }) => (isOn ? 'margin-left: 22px;' : 'margin-left: 3px;')}
  transition: all 0.5s;
  border-radius: 999px;
  background-color: ${W01};
`;

export default ToggleButton;
