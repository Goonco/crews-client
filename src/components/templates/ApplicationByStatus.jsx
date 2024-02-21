import { useEffect, useState } from 'react';

import { MakeApp, WaitApp, EvalApp, LoadingPage } from 'pages';

const STATUS = {
  default: 'default',
  makeApp: 'make',
  waitApp: 'wait',
  evalApp: 'eval',
};

export const ApplicationByStatus = () => {
  // 여기서 Authentication 잡아야할 거 같은데??/

  const [status, setStatus] = useState(STATUS.default);

  useEffect(() => {
    setStatus(STATUS.waitApp);
  }, []);

  switch (status) {
    case STATUS.makeApp:
      return <MakeApp />;
    case STATUS.waitApp:
      return <WaitApp />;
    case STATUS.evalApp:
      return <EvalApp />;
    default:
      return <LoadingPage />;
  }
};
