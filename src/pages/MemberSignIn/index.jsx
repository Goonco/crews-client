import { useState, useEffect } from 'react';
import { applicationApi } from 'apis/api';

import { useNavigate, useParams, useLocation } from 'react-router-dom';

import { SignInContainer, SignInWrapper } from 'pages';
import { LoadingPage } from 'pages/Others';
import MemberHeader from './MemberHeader';
import MemberInput from './MemberInput';

export const MemberSignIn = () => {
  const { recruitmentId } = useParams();
  const navigate = useNavigate();
  const from = useLocation();

  const [crewName, setCrewName] = useState(false);

  const fetchRecruitmentName = async () => {
    try {
      const response = await applicationApi.getApplicationName(recruitmentId);
      const { applicationName } = { ...response.data };
      setCrewName(applicationName);
    } catch (e) {
      if (e.response.status === 404) {
        const redirectUrl = '/notfound?errormsg=존재하지 않는 모집 공고입니다.';
        navigate(redirectUrl, { state: { from }, replace: true });
      }
    }
  };

  // Rendering Logic

  useEffect(() => {
    fetchRecruitmentName();
  }, []);

  if (crewName)
    return (
      <SignInWrapper>
        <SignInContainer>
          <MemberHeader recruitmentName={crewName} />
          <MemberInput recruitmentId={recruitmentId} />
        </SignInContainer>
      </SignInWrapper>
    );
  else return <LoadingPage />;
};
