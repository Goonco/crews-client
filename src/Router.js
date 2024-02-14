import { Route, Routes } from 'react-router-dom';
import {
  LeaderSignIn,
  MemberSignIn,
  MakeFormPage,
  WriteFormPage,
  EvaluateFormPage,
  EvaluateDetailPage,
  NotFoundPage,
} from 'pages';
import { RequireAuth } from 'components/templates';

export const ROLES = {
  member: 'member',
  leader: 'leader',
};

export const ROUTES = {
  SIGNINLEADER: '/',
  SIGNINMEMBER: (id) =>
    id ? `/recruitment/${id}` : '/recruitment/:recruitmentId',
};

const Router = () => {
  return (
    <Routes>
      {/* ************** Public Routes */}
      <Route path={ROUTES.SIGNINLEADER} element={<LeaderSignIn />} />
      <Route path={ROUTES.SIGNINMEMBER()} element={<MemberSignIn />} />

      {/* ************** Protected Routes */}

      {/* 1. Only Member */}
      {/* <Route element={<RequireAuth availRole={[ROLES.member]} />}>
        <Route path="/writeform" element={<WriteFormPage />} />
      </Route> */}

      {/* 2. Only Leader */}
      {/* <Route element={<RequireAuth availRole={[ROLES.leader]} />}>
        <Route path="/evaluateform/:formid" element={<EvaluateFormPage />} />
        <Route
          path="/evaluatedetail/:postid"
          element={<EvaluateDetailPage />}
        />
        <Route path="/makeform" element={<MakeFormPage />} />
      </Route> */}

      {/* 3. Both */}
      {/* <Route
        element={<RequireAuth availRole={[ROLES.member, ROLES.leader]} />}
      ></Route> */}

      {/* ************** Catch All */}
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Router;
