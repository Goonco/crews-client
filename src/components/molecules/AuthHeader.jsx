import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { B02, B06, B07, W01 } from 'style/palette';
import { faAnchor, faCircleUser } from '@fortawesome/free-solid-svg-icons';

import { Text } from 'components/atoms';
import { Modal, useModal } from 'components/organisms';
import { Confirm } from './Confirm';

export const AuthHeader = ({ show = true }) => {
  return (
    <HeaderContainer show={show}>
      <Logo>
        <FontAwesomeIcon icon={faAnchor} className="fa-lg" />
        <Text size="27px" weight={700}>
          Crews
        </Text>
      </Logo>
      <Profile />
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  position: sticky;
  left: 0;
  top: 0;
  z-index: 999;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100vw;
  padding: 10px 20px;
  background-color: ${B02};

  ${({ show }) => (!show ? 'margin-top: -100px;' : 'margin-top: 0px;')}
  transition: margin-top 0.2s linear;
`;

const Logo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
  color: ${B06};
`;

const Profile = ({ id = 'L126ZC35K2', status = '모집' }) => {
  const [isOpen, toggleOpen] = useModal();
  const typ = status === '모집' ? '모집' : '지원';

  const handleClick = () => {
    toggleOpen();
  };

  return (
    <>
      <ProfileContainer>
        <ProfileLogo icon={faCircleUser} />
        <Text size="16px" weight={600}>{`${typ} | ${id}`}</Text>
        <button onClick={handleClick}>
          <Text align="left" size="16px" weight={400} underline={true}>
            로그아웃
          </Text>
        </button>
      </ProfileContainer>
      <Modal isOpen={isOpen} toggleOpen={toggleOpen}>
        <Confirm msgs={['로그아웃하시나요? 😢']} />
      </Modal>
    </>
  );
};

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
`;

const ProfileLogo = styled(FontAwesomeIcon)`
  font-size: 30px;
  border-radius: 999px;
  background-color: ${W01};
  color: ${B07};
`;
