import { Route, Routes } from 'react-router-dom';
import { Header } from 'components/molecules';
import {
  Login,
  SignIn,
  MakeFormPage,
  WriteFormPage,
  EvaluateFormPage,
  MakePost,
  EvaluateDetailPage,
  MyPage,
  PostDetail,
  NotFoundPage,
} from 'pages';
import { RequireAuth } from 'components/templates';
import { Home } from 'pages/Home';
import MainCrewListSection from 'pages/Home/MainCrewListSection';
import MainPopularSection from 'pages/Home/MainPopularSection';
import MainHowToUseSection from 'pages/Home/MainHowToUseSection';
import MainCollaborateSection from 'pages/Home/MainCollaborateSection';

// Testing
import Register from 'pages/Test/Register';
import LoginTest from 'pages/Test/Login';

const Roles = {
  member: 'member',
  leader: 'leader',
};

const Router = () => {
  return (
    <Routes>
      {/* ************** Public Routes */}
      <Route path="/signup" element={<SignIn />} />
      <Route path="/signin" element={<Login />} />
      {/* <Route path="/home" element={<Home />}>
        <Route path="/test" element={<MainCrewListSection />}></Route>
        <Route path="/hot" element={<MainPopularSection />}></Route>
        <Route path="/how" element={<MainHowToUseSection />}></Route>
        <Route path="/crews" element={<MainCollaborateSection />}></Route>
      </Route> */}

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
        <Route path="/makepost" element={<MakePost />} />
      </Route>

      {/* 3. Both */}
      <Route element={<RequireAuth availRole={[Roles.member, Roles.leader]} />}>
        <Route path="/postdetail/:postid" element={<PostDetail />} />
        <Route path="/mypage" element={<MyPage />} />
      </Route>

      {/* ************** Testing Routes */}
      <Route path="/testRegister" element={<Register />} />
      <Route path="/testLogin" element={<LoginTest />} />

      {/* ************** Catch All */}
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Router;
