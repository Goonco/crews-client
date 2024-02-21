import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { R02 } from 'style/palette';
import { ROUTES } from 'Router';

import {
  InputLabelText,
  InputContainer,
  StyledLabel,
  PositioningButton,
  CustomIcon,
} from './LeaderInput';
import { Button, Input, Text } from 'components/atoms';

const RecruitmentInput = () => {
  const idRef = useRef();
  const navigate = useNavigate();

  const [input, setInput] = useState('');
  const handleInputsChange = (e) => setInput(e.target.value);
  const handleDeleteClick = () => setInput('');

  const [focus, setFocus] = useState(false);
  const handleFocusChange = (e) => setFocus(true);
  const handleBlurChange = (e) => setFocus(false);

  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    idRef.current.focus();
  }, []);

  useEffect(() => {
    setErrorMsg('');
  }, [input]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!input) {
      setErrorMsg('모집공고 코드를 입력해주세요 😕');
      return;
    }

    navigate(ROUTES.SIGNINMEMBER(input));
  };

  const inputStatus = errorMsg ? 'error' : focus ? 'active' : 'inactive';

  return (
    <InputContainer onSubmit={handleSubmit}>
      <StyledLabel>
        <InputLabelText children="지원하기" />
        <PositioningButton>
          <Input
            refer={idRef}
            status={inputStatus}
            placeholder="모집공고 코드"
            width="100%"
            height="55px"
            value={input}
            onChange={handleInputsChange}
            onFocus={handleFocusChange}
            onBlur={handleBlurChange}
          />
          {input && focus && (
            <button onMouseDown={handleDeleteClick}>
              <CustomIcon icon={faCircleXmark} />
            </button>
          )}
        </PositioningButton>
      </StyledLabel>

      {errorMsg ? (
        <Text size="16px" color={R02} weight={500}>
          {errorMsg}
        </Text>
      ) : (
        <></>
      )}

      <Button type="submit" children="지원하기" width="100%" height="50px" />
    </InputContainer>
  );
};

export default RecruitmentInput;
