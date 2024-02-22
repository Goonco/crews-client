import styled from 'styled-components';
import { useState, useEffect } from 'react';

// Imported Functions & Datas
import { useApplySection } from './hooks/useApplySectoin';
import { useApplyQuestion } from './hooks/useApplyQuestion';
import { applicationApi } from 'apis/api';
import { useParams } from 'react-router-dom';
import useAuthInstance from 'apis/utils/useAuthInstance';
import { G05 } from 'style/palette';

// Imported Components
import SectionBox from './Section/SectionBox';
import SelectSectionBox from './Section/SelectSectionBox';
import WriteFormHeader from './WirteFormHeader';
import { Button, Text } from 'components/atoms';
import { LoadingPage } from 'pages/Others';

export const WriteApp = () => {
  const { applicationId, memberId } = useParams();
  const authInstance = useAuthInstance();

  const [loading, setLoading] = useState(2);
  const [sectionData, setSectionData] = useApplySection();
  const [_, setQuestionData] = useApplyQuestion();

  const fetchSectionData = async () => {
    try {
      const response = await applicationApi.getSectionData(
        authInstance,
        applicationId
      );

      setSectionData(response.data);
      setLoading((prev) => prev - 1);
    } catch (e) {
      console.log(`[Error : fetchApplySectionData error] : ${e}`);
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
        `[Error : fetchApplyQuestionData error] : ${e.response?.status} - ${e.response?.statusText}`
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

  if (!loading) {
    return (
      <WriteFormWrapper>
        <WriteFormContainer>
          <WriteFormHeader />

          <WriteFormContent>
            <SectionBox key={0} sectionData={sectionData[0]} idx={0} />
            <Text
              children="지원항목은 선택한 하나의 항목에만 응답할 수 있습니다."
              size="20px"
              weight="400"
              color={G05}
            />
            <SelectSectionBox />
          </WriteFormContent>

          <WriteFormFooter>
            <Button
              status="active"
              width="392px"
              height="65px"
              children="모집 공고 등록하기"
              onClick={() => alert('모집 공고 제출')}
            />
          </WriteFormFooter>
        </WriteFormContainer>
      </WriteFormWrapper>
    );
  } else return <LoadingPage />;
};

const WriteFormWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  height: auto;
  margin: 0 auto;
  text-align: center;
`;

const WriteFormContainer = styled.div`
  width: 760px;
  margin: 0 auto;
`;

const WriteFormContent = styled.div`
  margin-bottom: 50px;
  text-align: left;
`;

const WriteFormFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 80px;
  margin-bottom: 80px;
`;
