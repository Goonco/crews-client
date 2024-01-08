import styled from 'styled-components';

import { BK01, B06, G03, G05 } from 'style/palette';

import { Text } from 'components/atoms';

const CheckBoxQues = ({ questionData, idx }) => {
  const { isMandatory, canMultipleCheck, options } = { ...questionData };

  return (
    <>
      {options.map((it, opIdx) => (
        <>
          <OptionBox key={it.id}>
            <input type="radio" checked={false} />
            <Text size="16px" weight={400} children={it.option} />
          </OptionBox>
        </>
      ))}
    </>
  );
};

const OptionBox = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  color: ${BK01};
`;

export default CheckBoxQues;
