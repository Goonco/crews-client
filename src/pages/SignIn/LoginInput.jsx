import styled from 'styled-components';
import { useRef, useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
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
import { LoginOptions } from './LoginOptions';

export const LoginInput = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const idRef = useRef();
  const pwRef = useRef();

  const [inputs, setInputs] = useState({ id: '', pw: '' });
  const handleInputsChange = (e) =>
    setInputs({ ...inputs, [e.target.id]: e.target.value });

  const [focuses, setFocuses] = useState({ id: false, pw: false });
  const handleFocusChange = (e) =>
    setFocuses({ ...focuses, [e.target.id]: true });
  const handleBlurChange = (e) => {
    if (canBlur) setFocuses({ ...focuses, [e.target.id]: false });
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
    idRef.current.focus();
  }, []);

  useEffect(() => {
    setErrorMsg('');
  }, [inputs]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!inputs.id || !inputs.pw) {
      setErrorMsg('아이디 혹은 비밀번호를 입력해주세요. 😕');
      return;
    }

    try {
      const response = await signInAPI.signIn(inputs);
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({ id: inputs.id, pw: inputs.pw, accessToken, roles });
      setInputs({ id: '', pw: '' });
      navigate(from, { replace: true });
    } catch (e) {
      // 에러 코드에 따른 setErrorMsg()
      setErrorMsg('로그인 실패 😡');
    }
  };

  const inputStatus = (key) =>
    errorMsg ? 'error' : focuses[key] ? 'active' : 'inactive';

  return (
    <LoginInputContainer>
      <form onSubmit={handleSubmit}>
        <StyledLabel id="id">
          <InputLabelText children="아이디 (이메일)" />
          <PositioningButton>
            <Input
              id="id"
              refer={idRef}
              status={inputStatus('id')}
              placeholder="이메일을 입력해주세요."
              width="100%"
              height="55px"
              value={inputs.id}
              onChange={handleInputsChange}
              onFocus={handleFocusChange}
              onBlur={handleBlurChange}
            />
            {inputs.id && focuses.id && (
              <button onMouseDown={() => setInputs({ ...inputs, id: '' })}>
                <CustomIcon icon={faCircleXmark} />
              </button>
            )}
          </PositioningButton>
        </StyledLabel>

        <StyledLabel id="pw">
          <InputLabelText children="비밀번호" />
          <PositioningButton>
            <Input
              id="pw"
              refer={pwRef}
              type={showPW ? 'text' : 'password'}
              status={inputStatus('pw')}
              placeholder="비밀번호를 입력해주세요."
              width="100%"
              height="55px"
              value={inputs.pw}
              onChange={handleInputsChange}
              onFocus={handleFocusChange}
              onBlur={handleBlurChange}
            />
            {inputs.pw && focuses.pw && (
              <button onMouseDown={() => setInputs({ ...inputs, pw: '' })}>
                <CustomIcon icon={faCircleXmark} />
              </button>
            )}
            {inputs.pw &&
              focuses.pw &&
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

        <LoginOptions />

        <Button type="submit" children="로그인" width="100%" height="50px" />
      </form>
    </LoginInputContainer>
  );
};

const InputLabelText = ({ children }) => {
  return (
    <Text color={BK02} size="16px" weight={600}>
      {children}
    </Text>
  );
};

const LoginInputContainer = styled.div`
  margin: 40px 0;
  width: 416px;
`;

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: start;

  gap: 16px;
  margin-bottom: 25px;
`;

const PositioningButton = styled.span`
  width: 100%;
  position: relative;
`;

const CustomIcon = styled(FontAwesomeIcon)`
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
