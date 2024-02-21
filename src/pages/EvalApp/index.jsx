import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useMyApplicantList } from './hooks/useApplicantList';

import EvaluateSummarySection from './EvaluateSummarySection';
import ApplyListSection from './ApplyList/ApplyListSection';
import ConfirmBar from './ConfirmBar';

import { LoadingPage } from 'pages';
import { applicationApi } from 'apis/api';
import useAuthInstance from 'apis/utils/useAuthInstance';

export const EvalApp = () => {
  const { applicationId } = useParams();
  const authInstance = useAuthInstance();

  const [loading, setLoading] = useState(2);
  const [applicationName, setApplicationName] = useState('');
  const [_, setApplicationList] = useMyApplicantList();

  const fetchApplicationName = async () => {
    try {
      const response = await applicationApi.getApplicationName(applicationId);
      const { applicationName } = { ...response.data };
      setApplicationName(applicationName);
      setLoading((prev) => prev - 1);
    } catch (e) {
      console.log(`${e} : fetchApplicationName API Error`);
    }
  };

  const fetchApplicants = async () => {
    try {
      const response = await applicationApi.getApplicants(
        authInstance,
        applicationId
      );

      const applicants = response.data;
      setApplicationList(applicants);
      setLoading((prev) => prev - 1);
    } catch (e) {
      console.log(`${e} : fetchApplicants API Error`);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchApplicationName();
      await fetchApplicants();
    };
    fetchData();
  }, []);

  if (!loading)
    return (
      <EvaluationPageWrapper>
        <EvaluationContentContainer>
          <EvaluateSummarySection recruitmentName={applicationName} />
          <ApplyListSection />
        </EvaluationContentContainer>

        <ConfirmBar />
      </EvaluationPageWrapper>
    );
  else return <LoadingPage />;
};

export const EvaluationPageWrapper = styled.div`
  width: 100%;
`;

export const EvaluationContentContainer = styled.div`
  width: 1200px;
  margin: 0 auto;
`;
