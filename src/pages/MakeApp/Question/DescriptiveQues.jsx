import styled from 'styled-components';
import { G06 } from 'style/palette';

import useQuestion from '../hooks/useQuestion';

import ToggleButton from './ToggleButton';
import { Text } from 'components/atoms';
import { ToggleButtonContainer } from './CheckBoxQues';

const DescriptiveQues = ({ questionData, idx }) => {
  const { isMandatory, characterLimit } = { ...questionData };

  const { changeQuestion } = useQuestion();
  const handleOnClick = (e) => changeQuestion(e, idx);

  return (
    <ToggleButtonContainer>
      <ToggleButton
        name="isMandatory"
        status={isMandatory}
        onClick={handleOnClick}
        label="응답 필수"
      />

      <label>
        <Text size="14px" color={G06} children="글자 수" />
        <NumberInput
          name="characterLimit"
          type="text"
          value={characterLimit}
          onChange={handleOnClick}
        />
        <Text size="14px" color={G06} children="자 제한" />
      </label>
    </ToggleButtonContainer>
  );
};

const NumberInput = styled.input`
  margin: 0 5px 2px 0;
  width: 40px;

  font-size: 14px;
  font-weight: 700;
  font-family: 'Pretendard-Regular';
  text-decoration: underline;
  text-align: right;
`;

export default DescriptiveQues;
