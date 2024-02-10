import styled from 'styled-components';
import { useRef, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import useAuth from 'apis/context/useAuth';
import { signInAPI } from 'apis/api/signin';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faCircleXmark,
  faEye,
  faEyeSlash,
} from '@fortawesome/free-solid-svg-icons';
import { BK02, R02 } from 'style/palette';

import {
  InputLabelText,
  InputContainer,
  StyledLabel,
  PositioningButton,
  CustomIcon,
} from './LeaderInput';
import { Button, Input, Text } from 'components/atoms';

const MemberInput = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const idRef = useRef();

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

    // try {
    //   const response = await signInAPI.signIn(inputs);
    //   const accessToken = response?.data?.accessToken;
    //   const roles = response?.data?.roles;

    //   setAuth({ id: inputs.id, pw: inputs.pw, accessToken, roles });
    //   setInputs({ id: '', pw: '' });
    //   navigate(from, { replace: true });
    // } catch (e) {
    //   // 에러 코드에 따른 setErrorMsg()
    //   setErrorMsg('로그인 실패 😡');
    // }
  };

  const inputStatus = (key) =>
    errorMsg ? 'error' : focus ? 'active' : 'inactive';

  return (
    <InputContainer onSubmit={handleSubmit}>
      <StyledLabel>
        <InputLabelText children="지원하기" />
        <PositioningButton>
          <Input
            refer={idRef}
            status={inputStatus('id')}
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

export default MemberInput;
