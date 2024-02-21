import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useMyApplicantList } from './hooks/useApplicantList';

import EvaluateSummarySection from './EvaluateSummarySection';
import ApplyListSection from './ApplyList/ApplyListSection';

import { LoadingPage } from 'pages';
import { applicationApi } from 'apis/api';
import useAuthInstance from 'apis/utils/useAuthInstance';
import { Button } from 'components/atoms';

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

  const handleClick = () => {
    alert(
      '평가 완료 시 합격자들에 대한 메일이 자동 통지되며 해당 행위는 번복할 수 없습니다. 정말 평가를 종료하겠습니까? 🙄'
    );
  };

  if (!loading)
    return (
      <EvaluationPageWrapper>
        <EvaluationContentContainer>
          <EvaluateSummarySection recruitmentName={applicationName} />
          <ApplyListSection />
          <Button
            className="positionButton"
            width="230px"
            height="50px"
            onClick={handleClick}
            children="지원서 평가 완료"
          />
        </EvaluationContentContainer>
      </EvaluationPageWrapper>
    );
  else return <LoadingPage />;
};

export const EvaluationPageWrapper = styled.div`
  width: 100%;
`;

export const EvaluationContentContainer = styled.div`
  width: fit-content;
  margin: 0 auto;

  .positionButton {
    position: fixed;
    bottom: 50px;
    right: 50px;
  }
`;
