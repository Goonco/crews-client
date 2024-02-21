import { Outlet, Navigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import useAuth from 'apis/context/useAuth';

import { UnauthenticatedPage } from 'pages';
import { Button } from 'components/atoms';

export const RequireAuth = ({ availRole, redirectUrl }) => {
  const { auth } = useAuth();
  const currentLocation = useLocation();

  const available = auth?.roles?.filter((it) => availRole.includes(it))?.length;

  if (!auth?.accessToken)
    return (
      <Navigate
        to={redirectUrl}
        state={{ from: currentLocation }}
        replace={true}
      />
    );
  else if (!available) return <UnauthenticatedPage />;
  else if (available)
    return (
      <LogOutButton>
        <Outlet />
      </LogOutButton>
    );
};

const LogOutButton = () => {
  return (
    <>
      <HeaderBar>
        <Button
          className="positionButton"
          width="100px"
          height="30px"
          // onClick={handleClick}
          children="로그아웃"
        />
      </HeaderBar>
      <Outlet />
    </>
  );
};

const HeaderBar = styled.div`
  width: 100%;
  padding: 20px 20px 0 0;

  button {
    margin-left: auto;
  }
`;

// const FixedButton = styled(Button)`
//   position: fixed;
//   top: 50px;
//   right: 50px;
// `;
