import { EvaluationPageWrapper, EvaluationContentContainer } from 'pages';
import FormSection from './FormSection';
import AssessSection from './AssessSection';
import EvaluateDetailHeader from './EvaluateDetailHeader';
import ConfrimBar from 'pages/EvaluateForm/ConfirmBar';
import { Flex } from 'components/atoms';

export const EvaluateDetailPage = () => {
  return (
    <EvaluationPageWrapper>
      <EvaluationContentContainer>
        <EvaluateDetailHeader />
        <Flex justify="space-between" align="flex-start">
          <FormSection />
          <AssessSection />
        </Flex>
      </EvaluationContentContainer>

      <ConfrimBar />
    </EvaluationPageWrapper>
  );
};
