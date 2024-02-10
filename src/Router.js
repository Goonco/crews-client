import { Route, Routes } from 'react-router-dom';
import { Header } from 'components/molecules';
import {
  Login,
  MakeFormPage,
  WriteFormPage,
  EvaluateFormPage,
  EvaluateDetailPage,
  NotFoundPage,
} from 'pages';
import { RequireAuth } from 'components/templates';

const Roles = {
  member: 'member',
  leader: 'leader',
};

const Router = () => {
  return (
    <Routes>
      {/* ************** Public Routes */}
      <Route path="/" element={<Login />} />

      {/* ************** Protected Routes */}

      {/* 1. Only Member */}
      <Route element={<RequireAuth availRole={[Roles.member]} />}>
        <Route path="/writeform" element={<WriteFormPage />} />
      </Route>

      {/* 2. Only Leader */}
      <Route element={<RequireAuth availRole={[Roles.leader]} />}>
        <Route path="/evaluateform/:formid" element={<EvaluateFormPage />} />
        <Route
          path="/evaluatedetail/:postid"
          element={<EvaluateDetailPage />}
        />
        <Route path="/makeform" element={<MakeFormPage />} />
      </Route>

      {/* 3. Both */}
      <Route
        element={<RequireAuth availRole={[Roles.member, Roles.leader]} />}
      ></Route>

      {/* ************** Catch All */}
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Router;
