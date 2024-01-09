import styled from 'styled-components';

import EvaluateSummarySection from './EvaluateSummarySection';
import ApplyListSection from './ApplyList/ApplyListSection';
import ConfirmBar from './BottomBar';

export const EvaluateFormPage = () => {
  return (
    <EvaluationFormPageWrapper>
      <EvaluationContentContainer>
        <EvaluateSummarySection />
        <ApplyListSection />
      </EvaluationContentContainer>

      <ConfirmBar />
    </EvaluationFormPageWrapper>
  );
};

const EvaluationFormPageWrapper = styled.div`
  width: 100%;
`;

const EvaluationContentContainer = styled.div`
  width: 1100px;
  margin: 0 auto;
  padding: 40px 0 180px;
`;
