import { useEffect, useState } from 'react';

import { MakeApp, LoadingPage, WaitApp } from 'pages';

const STATUS = {
  makeApp: 'make',
  waitApp: 'wait',
  evalApp: 'eval',
};

export const ApplicationByStatus = () => {
  // 여기서 Authentication 잡아야할 거 같은데??/

  const [status, setStatus] = useState(false);

  useEffect(() => {
    setStatus(STATUS.waitApp);
  }, []);

  switch (status) {
    case STATUS.makeApp:
      return <MakeApp />;
    case STATUS.waitApp:
      return <WaitApp />;
    default:
      return <LoadingPage />;
  }
};
