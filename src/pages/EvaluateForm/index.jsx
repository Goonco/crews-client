import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import useApplicantList from './hooks/useApplicantList';

import EvaluateSummarySection from './EvaluateSummarySection';
import ApplyListSection from './ApplyList/ApplyListSection';
import ConfirmBar from './ConfirmBar';

import { LoadingPage } from 'components/templates';
import { evaluateformApi } from 'apis/api/evaluateform';

export const EvaluateFormPage = () => {
  const { formid } = useParams();
  const { fetchApplicantList, loading } = useApplicantList();

  const [loading2, setLoading2] = useState(true);
  const [recruitmentName, setRecruitmentName] = useState('');
  const fetchRecruitmentName = async () => {
    try {
      setRecruitmentName(
        (await evaluateformApi.getRecruitmentName(formid)).data.recruitmentName
      );
      setLoading2(false);
    } catch (e) {
      console.log(`${e} : fetchRecruitmentName API Error`);
    }
  };

  useEffect(() => {
    fetchApplicantList(formid);
    fetchRecruitmentName(formid);
  }, []);

  if (loading || loading2) return <LoadingPage />;
  else {
    return (
      <EvaluationPageWrapper>
        <EvaluationContentContainer>
          <EvaluateSummarySection recruitmentName={recruitmentName} />
          <ApplyListSection />
        </EvaluationContentContainer>

        <ConfirmBar />
      </EvaluationPageWrapper>
    );
  }
};

export const EvaluationPageWrapper = styled.div`
  width: 100%;
`;

export const EvaluationContentContainer = styled.div`
  width: 1200px;
  margin: 0 auto;
`;
