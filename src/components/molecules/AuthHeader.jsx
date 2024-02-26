import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { B02, B06, B07, W01 } from 'style/palette';
import { faAnchor, faCircleUser } from '@fortawesome/free-solid-svg-icons';

import { Text } from 'components/atoms';

export const AuthHeader = ({ show }) => {
  return (
    <HeaderContainer show={show}>
      <Logo>
        <FontAwesomeIcon icon={faAnchor} className="fa-2x" />
        <Text size="25px">Crews</Text>
      </Logo>
      <Profile />
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 20px;
  background-color: ${B02};

  /* display: ${({ show }) => (show ? 'flex' : 'none')}; */
  ${({ show }) => (!show ? 'margin-top: -100px;' : 'margin-top: 0px;')}
  transition: margin-top 0.2s linear;
`;

const Logo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  color: ${B06};
`;

const Profile = ({ id = 'L126ZC35K2', status = '모집' }) => {
  const typ = status === '모집' ? '모집' : '지원';

  return (
    <ProfileContainer>
      <ProfileLogo icon={faCircleUser} className="fa-2x" />
      <ProfileText>
        <Text size="16px" weight={600}>{`${typ} | ${id}`}</Text>
        <Text align="left" size="16px" weight={400} underline={true}>
          로그아웃
        </Text>
      </ProfileText>
    </ProfileContainer>
  );
};

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

const ProfileLogo = styled(FontAwesomeIcon)`
  font-size: 40px;
  border-radius: 999px;
  background-color: ${W01};
  color: ${B07};
`;

const ProfileText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 3px;
`;
