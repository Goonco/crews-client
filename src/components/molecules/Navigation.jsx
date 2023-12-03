import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import { Flex } from 'components/atoms';
import basicProfile from './basic-profile.svg';
import { useEffect, useState } from 'react';
import { SignIn } from 'pages';
export const Navigation = () => {
  const nav = useNavigate();
  const [isLogin, setLogin] = useState();
  const location = useLocation();
  const onClickLogout = () => {
    localStorage.removeItem('access');
    setLogin(false);
    nav('/');
  };
  const onClickGoHome = () => {
    nav('/');
  };
  const onClickGoLogin = () => {
    nav('/login');
  };
  const onClickGoSignIn = () => {
    nav('/signin');
  };
  const onClickMyPage = () => {
    nav('/mypage');
  };
  useEffect(() => {
    const token = localStorage.getItem('access');
    console.log(1);
    if (token) {
      setLogin(true);
      console.log(1);
    } else {
      setLogin(false);
      console.log(1);
    }
  }, [location.pathname]);
  useEffect(() => {}, [isLogin]);
  return (
    <>
      <CrewsNav>
        <CrewsLogo onClick={onClickGoHome}>Crews 🛳️</CrewsLogo>
        <ProfileSection>
          {isLogin ? (
            <>
              <ProfileImage src={basicProfile} onClick={onClickMyPage} />
              <Flex direction="column" align="flex-start">
                <UserName>
                  {localStorage.getItem('studentid') +
                    ' ' +
                    localStorage.getItem('name')}
                </UserName>
                <LogoutButton onClick={onClickLogout}>로그아웃</LogoutButton>
              </Flex>{' '}
            </>
          ) : (
            <>
              <LoginButton onClick={onClickGoLogin}>로그인</LoginButton>
              <DivideLine />
              <SignInButton onClick={onClickGoSignIn}>회원가입</SignInButton>
            </>
          )}
        </ProfileSection>
      </CrewsNav>
    </>
  );
};

const NavigationContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: yellow;
  gap: 20px;
`;

const CrewsNav = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  background: var(--blue-b-02, #e8effd);
`;

const CrewsLogo = styled.div`
  margin-left: 25px;
  color: var(--blue-b-05-m, #3172ea);
  font-family: Poppin;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
  letter-spacing: -0.6px;
`;

const ProfileSection = styled.div`
  margin-left: auto;
  margin-right: 28px;
  display: flex;
  gap: 12px;
`;

const ProfileImage = styled.img`
  cursor: pointer;
`;

const UserName = styled.div`
  color: var(--black-bk-01, #303030);
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.36px;
`;
const LogoutButton = styled.div`
  color: var(--black-bk-01, #303030);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.28px;
  cursor: pointer;
  text-decoration-line: underline;
`;

const SignInButton = styled.div`
  color: var(--black-bk-01, #303030);
  text-align: center;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  letter-spacing: -0.36px;
`;

const LoginButton = styled.div`
  color: var(--black-bk-01, #303030);
  text-align: center;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  letter-spacing: -0.36px;
`;

const DivideLine = styled.div`
  width: 1.8px;
  height: 15.5px;
  align-self: center;
  background-color: #ccc;
`;
