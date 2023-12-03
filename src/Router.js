import { Route, Routes } from 'react-router-dom';
import { Header } from 'components/molecules';
import {
  MakeForm,
  MakePost,
  Login,
  SignIn,
  Evaluate,
  EvaluateDetail,
  MyPage,
  PostDetail,
} from 'pages';
import { Home } from 'pages/Home';
import MainCrewListSection from 'pages/Home/MainCrewListSection';
import MainPopularSection from 'pages/Home/MainPopularSection';
import MainHowToUseSection from 'pages/Home/MainHowToUseSection';
import MainCollaborateSection from 'pages/Home/MainCollaborateSection';
import { Navigation } from 'components/molecules/Navigation';
const Router = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/makeform/:postid" element={<MakeForm />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/makepost" element={<MakePost />} />
        <Route path="/login" element={<Login />} />
        <Route path="/postdetail/:postid" element={<PostDetail />} />
        <Route path="/evaluate" element={<Evaluate />} />
        <Route path="/evaluatedetail" element={<EvaluateDetail />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/" element={<Home />}>
          <Route path="" element={<MainCrewListSection />}></Route>
          <Route path="/hot" element={<MainPopularSection />}></Route>
          <Route path="/how" element={<MainHowToUseSection />}></Route>
          <Route path="/crews" element={<MainCollaborateSection />}></Route>
        </Route>
      </Routes>
    </>
  );
};

export default Router;
