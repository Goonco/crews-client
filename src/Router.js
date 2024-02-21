import { Route, Routes } from 'react-router-dom';
import { LeaderSignIn, MemberSignIn, WriteFormPage, NotFoundPage } from 'pages';
import { RequireAuth, ApplicationByStatus } from 'components/templates';

export const ROLES = {
  member: 'member',
  leader: 'leader',
};

export const ROUTES = {
  SIGNINLEADER: '/',
  SIGNINMEMBER: (id) =>
    id ? `/recruitment/${id}` : '/recruitment/:recruitmentId',
  APPLICATION: (id) =>
    id ? `/application/${id}` : '/application/:applicationId',
  APPLY: (recruitmentId, memberId) =>
    recruitmentId
      ? `/apply/${recruitmentId}/${memberId}`
      : '/apply/:recruitmentId/:memberId',
};

const Router = () => {
  return (
    <Routes>
      {/* ************** Public Routes */}
      <Route path={ROUTES.SIGNINLEADER} element={<LeaderSignIn />} />
      <Route path={ROUTES.SIGNINMEMBER()} element={<MemberSignIn />} />

      {/* ************** Protected Routes */}

      {/* 1. Only Leader */}
      <Route
        element={
          <RequireAuth
            availRole={[ROLES.leader]}
            redirectUrl={ROUTES.SIGNINLEADER}
          />
        }
      >
        <Route path={ROUTES.APPLICATION()} element={<ApplicationByStatus />} />
      </Route>

      {/* 2. Only Member */}
      <Route
        element={
          <RequireAuth
            availRole={[ROLES.member]}
            redirectUrl={ROUTES.SIGNINMEMBER()}
          />
        }
      >
        <Route path={ROUTES.APPLY()} element={<WriteFormPage />} />
      </Route>

      {/* ************** Catch All */}
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Router;
