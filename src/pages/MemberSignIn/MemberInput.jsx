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

import { Button, Input, Text } from 'components/atoms';

const MemberInput = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const pwRef = useRef();

  const [input, setInput] = useState('');
  const handleInputsChange = (e) => setInput(e.target.value);
  const handleDeleteClick = () => setInput('');

  const [focus, setFocus] = useState(false);
  const handleFocusChange = (e) => setFocus(true);
  const handleBlurChange = (e) => {
    if (canBlur) setFocus(false);
  };

  const [showPW, setShowPW] = useState(false);
  const [canBlur, setCanBlur] = useState(true);
  const toggleShowPW = () => {
    setShowPW(!showPW);
    setCanBlur(false);
  };
  const handleClick = (e) => {
    e.preventDefault();
    setCanBlur(true);
    pwRef.current.focus();
  };

  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    setErrorMsg('');
  }, [input]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!input) {
      setErrorMsg('지원서 비밀번호를 입력해주세요 😕');
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
        {/* <InputLabelText children="" /> */}
        <PositioningButton>
          <Input
            refer={pwRef}
            type={showPW ? 'text' : 'password'}
            status={inputStatus('pw')}
            placeholder="지원서 비밀번호"
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
          {input &&
            focus &&
            (showPW ? (
              <button onMouseDown={toggleShowPW} onClick={handleClick}>
                <CustomIcon className="eyes" icon={faEye} />
              </button>
            ) : (
              <button onMouseDown={toggleShowPW} onClick={handleClick}>
                <CustomIcon className="eyes" icon={faEyeSlash} />
              </button>
            ))}
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

export const InputLabelText = ({ children }) => {
  return (
    <Text color={BK02} size="16px" weight={600}>
      {children}
    </Text>
  );
};

export const InputContainer = styled.form`
  width: 416px;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 25px;
`;

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: start;

  width: 100%;
  gap: 16px;
`;

export const PositioningButton = styled.span`
  width: 100%;
  position: relative;
`;

export const CustomIcon = styled(FontAwesomeIcon)`
  width: 20px;
  height: 20px;

  color: #999;
  position: absolute;

  top: 50%;
  right: 5%;
  transform: translate(30%, -50%);

  &.eyes {
    right: 13%;
  }
`;

export default MemberInput;
