import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Custom Hooks & Functions & Datas
import { useSection, useQuestion } from './hooks';
import { applicationApi } from 'apis/api';
import useAuthInstance from 'apis/utils/useAuthInstance';
import { G06, BK01 } from 'style/palette';

// Components
import SectionBox from './Section/SectionBox';
import AppHeader from 'pages/AppHeader';
import { Button, Text } from 'components/atoms';
import { LoadingPage } from 'pages/Others';
import { AuthFooter } from 'components/molecules';

export const MakeApp = () => {
  const { applicationId } = useParams();
  const authInstance = useAuthInstance();

  const { sectionData, setSectionData, addSection } = useSection();
  const { questionData, setQuestionData } = useQuestion();
  const [loading, setLoading] = useState(2);

  const fetchSectionData = async () => {
    try {
      const response = await applicationApi.getSectionData(
        authInstance,
        applicationId
      );

      setSectionData(response.data);
      setLoading((prev) => prev - 1);
    } catch (e) {
      console.log(
        `[Error : fetchSectionData error] : ${e.response?.status} - ${e.response?.statusText}`
      );
    }
  };

  const fetchQuestionData = async () => {
    try {
      const response = await applicationApi.getQuestionData(
        authInstance,
        applicationId
      );

      setQuestionData(response.data);
      setLoading((prev) => prev - 1);
    } catch (e) {
      console.log(
        `[Error : fetchQuestionData error] : ${e.response.status} - ${e.response.statusText}`
      );
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchSectionData();
      await fetchQuestionData();
    };

    fetchData();
  }, []);

  const handleSubmit = () => {
    console.log(
      JSON.stringify(sectionData, null, 2),
      JSON.stringify(questionData, null, 2)
    );
  };

  if (loading > 0) return <LoadingPage />;
  else
    return (
      <>
        <MakeAppWrapper>
          <MakeAppContainer>
            <AppHeader />

            <MakeAppContent>
              {sectionData.map((it) => (
                <SectionBox key={it.id} sectionData={it} />
              ))}
            </MakeAppContent>

            <NewSectionButton
              color={G06}
              onClick={addSection}
              children={<Text children="새로운 섹션 추가하기" />}
            />
          </MakeAppContainer>
        </MakeAppWrapper>
        <AuthFooter>
          <Button
            onClick={handleSubmit}
            status="active"
            width="200px"
            height="50px"
            children="모집 시작하기"
          />
        </AuthFooter>
      </>
    );
};

const MakeAppWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  height: auto;
  margin: 0 auto;
  text-align: center;
`;

const MakeAppContainer = styled.div`
  width: 700px;
  margin: 0 auto;
`;

const MakeAppContent = styled.div`
  margin-bottom: 50px;
`;

const NewSectionButton = styled.button`
  font-size: 18px;
  font-weight: 400;

  margin-bottom: 50px;
  padding-bottom: 2px;
  border-bottom: 1px solid;
  color: ${G06};

  &:hover {
    color: ${BK01};
  }
`;
