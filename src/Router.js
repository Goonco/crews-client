import { Route, Routes } from 'react-router-dom';
import { Navigation } from 'components/molecules';
import { Hello, MakeForm } from 'pages';

const Router = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/makeform" element={<MakeForm />} />
      </Routes>
    </>
  );
};

export default Router;
