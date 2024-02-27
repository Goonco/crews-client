import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import useAuth from 'apis/context/useAuth';

import { UnauthenticatedPage } from 'pages';
import { AuthHeader } from 'components/molecules';
import useMousePosition from 'components/molecules/useMousePosition';

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
      <>
        <AuthHeader />
        <Outlet />
      </>
    );
};

const MousePositionHeader = () => {
  // const mousePosition = useMousePosition();

  const [showHeader, setShowHeader] = useState(true);

  // useEffect(() => {
  //   if (mousePosition.y < 150) setShowHeader(true);
  //   else setShowHeader(false);
  // }, [mousePosition]);

  return (
    <>
      <AuthHeader show={showHeader} />
      <Outlet />
    </>
  );
};
