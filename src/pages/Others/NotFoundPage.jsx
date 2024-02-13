import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import { useSearchParams } from 'react-router-dom';

import { Text } from 'components/atoms';
import { PageContainer } from './LoadingPage';

export const NotFoundPage = () => {
  const [searchParams] = useSearchParams();
  const msg = searchParams.get('errormsg') || '404 Not Found';

  return (
    <PageContainer>
      <FontAwesomeIcon icon={faPersonCircleQuestion} bounce className="fa-3x" />
      <Text size="20px" weight={700} children={msg} />
    </PageContainer>
  );
};
