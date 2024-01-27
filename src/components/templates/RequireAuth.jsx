import { Outlet, Navigate, useLocation } from 'react-router-dom';
import useAuth from 'apis/context/useAuth';

import { UnauthenticatedPage } from 'pages';

export const RequireAuth = ({ availRole }) => {
  const { auth } = useAuth();
  const currentLocation = useLocation();

  const available = auth?.roles?.filter((it) => availRole.includes(it))?.length;

  if (!auth?.id)
    return (
      <Navigate to="/signin" state={{ from: currentLocation }} replace={true} />
    );
  else if (!available) return <UnauthenticatedPage />;
  else if (available) return <Outlet />;
};
