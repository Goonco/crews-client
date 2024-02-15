import { useEffect, useState } from 'react';

import { MakeFormPage, LoadingPage } from 'pages';

const STATUS = {
  makeApp: 'make',
};

export const ApplicationByStatus = () => {
  const [status, setStatus] = useState(false);

  useEffect(() => {
    setStatus(STATUS.makeApp);
  }, []);

  switch (status) {
    case STATUS.makeApp:
      return <MakeFormPage />;
    default:
      return <LoadingPage />;
  }
};
