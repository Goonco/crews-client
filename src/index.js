import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

// Global States
import { RecoilRoot } from 'recoil';
import { worker } from './mocks/browser';
import { AuthProvider } from 'apis/context/AuthProvider';

if (process.env.REACT_APP_NODE_ENV === 'development') {
  worker.start();
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <RecoilRoot>
      <AuthProvider>
        <App />
      </AuthProvider>
    </RecoilRoot>
  </BrowserRouter>
  // </React.StrictMode>
);
