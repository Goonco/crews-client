import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RecoilRoot } from 'recoil';
import { worker } from './mocks/browser';

import { AuthProvoider } from 'pages/Test/AuthProvider';

if (process.env.REACT_APP_NODE_ENV === 'development') {
  worker.start();
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <RecoilRoot>
    <AuthProvoider>
      <App />
    </AuthProvoider>
  </RecoilRoot>
  // </React.StrictMode>
);
