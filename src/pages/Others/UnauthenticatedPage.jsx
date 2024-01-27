import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRoadBarrier } from '@fortawesome/free-solid-svg-icons';

import { Text } from 'components/atoms';
import { PageContainer } from './LoadingPage';

export const UnauthenticatedPage = () => {
  return (
    <PageContainer>
      <FontAwesomeIcon icon={faRoadBarrier} shake className="fa-3x" />
      <Text
        size="20px"
        weight={700}
        children="Not Authorized / Authenticated"
      />
    </PageContainer>
  );
};
