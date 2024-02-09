import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonCircleQuestion } from '@fortawesome/free-solid-svg-icons';

import { Text } from 'components/atoms';
import { PageContainer } from './LoadingPage';

export const NotFoundPage = () => {
  return (
    <PageContainer>
      <FontAwesomeIcon icon={faPersonCircleQuestion} bounce className="fa-3x" />
      <Text size="20px" weight={700} children="404 Not Found" />
    </PageContainer>
  );
};
