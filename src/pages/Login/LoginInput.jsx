import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
//imported components
import { Button, Input, Space, Text } from 'components/atoms';
//imported styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { BK02, R02 } from 'style/palette';
import { LoginOptions } from './LoginOptions';
import eyeIcon from './eye.svg';
import eyeXIcon from './eyeX.svg';
//import api
import { loginRequest } from 'api/request';
import { instance } from 'api/axios';
import { useNavigate } from 'react-router-dom';
export const LoginInput = () => {
  //state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //input box status
  const [emailStatus, setEmailStatus] = useState('inactive');
  const [passwordStatus, setPasswordStatus] = useState('inactive');
  //x버튼 표시 toggle
  const [showEmailX, setShowEmailX] = useState(false);
  const [showPwX, setShowPwX] = useState(false);
  //비밀번호 표시 toggle
  const [showPW, setShowPW] = useState(false);
  //user id pw 쿠키
  const [cookies, setCookie, removeCookie] = useCookies([
    'userEmail',
    'userPassword',
  ]);
  //id 저장할건지 체크박스 유무
  const [isStore, setIsStore] = useState(false);
  //로그인이 일치하지않아요 toggle
  const [notMatch, setNotMatch] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    // 컴포넌트가 렌더링될 때 쿠키가 있으면 바로 입력
    const savedEmail = cookies.userEmail;
    const savedPassword = cookies.userPassword;
    if (savedEmail && savedPassword) {
      setEmail(savedEmail);
      setPassword(savedPassword);
    }
  }, []);

  const toggleIsStore = (e) => {
    const isStoreChecked = e.target.checked;
    setIsStore(isStoreChecked);
  };

  const onSubmitHanlder = (e) => {
    e.preventDefault();
    if (notMatch === true) {
      setNotMatch(false);
    }

    if (email.trim() === '') {
      alert('아이디를 입력하세요');
    } else if (password.toString().trim() === '') {
      alert('비밀번호를 입력하세요');
    } else {
      loginUser(email, password);
      setEmail('');
      setPassword('');
      if (isStore) {
        const oneMonth = 30 * 24 * 60 * 60; // 1달 cookie 저장
        setCookie('userEmail', email, { path: '/', maxAge: oneMonth });
        setCookie('userPassword', password, { path: '/', maxAge: oneMonth });
      }
    }
  };

  //login
  let isLoginPending = false;
  const loginUser = async (id, pw) => {
    try {
      if (isLoginPending) {
        return;
      }
      isLoginPending = true;
      const response = await instance.post(loginRequest.loginPost, {
        email: id,
        password: pw,
      });
      // 로그인이 성공한 경우
      console.log(response);
      const accessToken = response.data.access;
      const refreshToken = response.data.refresh;
      const studentid = response.data.student_number;
      const name = response.data.name;
      localStorage.setItem('name', name);
      localStorage.setItem('studentid', studentid);
      localStorage.setItem('access', accessToken);
      localStorage.setItem('refresh', refreshToken);
      navigate('/');
      // console.log(accessToken);
      // console.log(refreshToken);
    } catch (error) {
      setEmailStatus('error');
      setPasswordStatus('error');
      setNotMatch(true);
    } finally {
      // 로그인 요청 완료 후 상태를 false로 설정
      isLoginPending = false;
    }
  };
  return (
    <LoginInputWrapper>
      <form onSubmit={onSubmitHanlder}>
        <LoginBoxWrapper>
          <label>
            <Text
              children="아이디"
              color={BK02}
              size="20px"
              weight={600}
              spacing="-0.4px"
            />
            <Space height="16px" />
            <Input
              status={emailStatus}
              placeholder="이메일을 입력해주세요."
              width="512px"
              height="65px"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => {
                setEmailStatus('active');
                setShowEmailX(true);
              }}
              onBlur={() => {
                setEmailStatus('inactive');
                setShowEmailX(false);
              }}
              padding="0px 50px 0px 0px"
            />
          </label>
          {showEmailX === true && (
            <FontAwesomeIcon
              className="deleteButton"
              icon={faCircleXmark}
              style={{ color: '#999999', width: '24px', height: '24px' }}
              onMouseDown={() => {
                setEmail('');
              }}
              cursor={'pointer'}
            />
          )}
        </LoginBoxWrapper>
        <Space height="26px" />
        <LoginBoxWrapper>
          <label>
            <Text
              children="비밀번호"
              color={BK02}
              size="20px"
              weight={600}
              spacing="-0.4px"
            />
            <Space height="16px" />
            <Input
              status={passwordStatus}
              placeholder="비밀번호를 입력해주세요."
              width="512px"
              height="65px"
              type={showPW ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => {
                setPasswordStatus('active');
                setShowPwX(true);
              }}
              onBlur={() => {
                setPasswordStatus('inactive');
                setShowPwX(false);
              }}
              padding="0px 90px 0px 0px"
            />
          </label>
          {showPwX === true &&
            (showPW === true ? (
              <EyeXIcon
                className="showPwEyeX"
                src={eyeXIcon}
                onMouseDown={(e) => {
                  e.preventDefault(); // 기본 동작(예: 텍스트 선택) 방지
                  e.stopPropagation();
                  setShowPW(!showPW);
                }}
              />
            ) : (
              <EyeIcon
                className="showPwEye"
                src={eyeIcon}
                onMouseDown={(e) => {
                  e.preventDefault(); // 기본 동작(예: 텍스트 선택) 방지
                  e.stopPropagation();
                  setShowPW(!showPW);
                }}
              />
            ))}
          {showPwX === true && (
            <FontAwesomeIcon
              className="deleteButton"
              icon={faCircleXmark}
              style={{ color: '#999999', width: '24px', height: '24px' }}
              onMouseDown={() => {
                setPassword('');
              }}
              cursor={'pointer'}
            />
          )}
        </LoginBoxWrapper>
        <Space height="16px" />
        {notMatch === true ? (
          <Text color={R02} size="18px" weight={500} spacing="-0.36px">
            아이디 혹은 비밀번호가 일치하지 않아요. 다시 확인해 주세요.
          </Text>
        ) : null}
        <Space height="26px" />

        <LoginOptions isStore={isStore} toggleIsStore={toggleIsStore} />

        <Space height="40px" />
        <Button
          children="로그인"
          width="512px"
          height="65px"
          onClick={onSubmitHanlder}
        />
      </form>
    </LoginInputWrapper>
  );
};

const LoginInputWrapper = styled.div`
  width: 512px;
`;
const LoginBoxWrapper = styled.div`
  position: relative;
  .deleteButton {
    position: absolute;
    top: 61px;
    right: 22px;
  }
  .showPwEye {
    position: absolute;
    top: 57px;
    right: 56px;
  }
  .showPwEyeX {
    position: absolute;
    top: 57.5px;
    right: 56px;
  }
`;
const EyeIcon = styled.img`
  padding: 5.833px 2.333px;
`;
const EyeXIcon = styled.img`
  padding: 2.333px;
`;
