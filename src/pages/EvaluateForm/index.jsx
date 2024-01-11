import styled from 'styled-components';

import EvaluateSummarySection from './EvaluateSummarySection';
import ApplyListSection from './ApplyList/ApplyListSection';
import ConfirmBar from './ConfirmBar';

export const EvaluateFormPage = () => {
  return (
    <EvaluationPageWrapper>
      <EvaluationContentContainer>
        <EvaluateSummarySection />
        <ApplyListSection />
      </EvaluationContentContainer>

      <ConfirmBar />
    </EvaluationPageWrapper>
  );
};

export const EvaluationPageWrapper = styled.div`
  width: 100%;
`;

export const EvaluationContentContainer = styled.div`
  width: 1200px;
  margin: 0 auto;
`;
