import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Custom Hooks & Functions & Datas
import { useMySection } from './hooks/useSection';
import { useMyQuestion } from './hooks/useQuestion';
import { applicationApi } from 'apis/api';
import useAuthInstance from 'apis/utils/useAuthInstance';
import { generateRandomString, isUniqueSectionName } from './utils';
import { G06, BK01 } from 'style/palette';

// Components
import SectionBox from './Section/SectionBox';
import MakeAppHeader from './MakeAppHeader';
import { Button, Text } from 'components/atoms';
import { LoadingPage } from 'pages/Others';

export const MakeApp = () => {
  const { applicationId } = useParams();
  const [sectionData, setSectionData] = useMySection();
  const [questionData, setQuestionData] = useMyQuestion();
  const [loading, setLoading] = useState(2);
  const authInstance = useAuthInstance();

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
        `[Error : fetchSectionData error] : ${e.response.status} - ${e.response.statusText}`
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

  const addSection = () => {
    if (sectionData.length >= 5) {
      alert('섹션은 5개까지만 추가할 수 있습니다.');
      return;
    }

    let newName;
    do {
      newName = generateRandomString();
    } while (!isUniqueSectionName(sectionData, newName));

    const newId = sectionData[sectionData.length - 1].id + 1;
    setSectionData((prev) => [
      ...prev,
      {
        id: newId,
        sectionName: newName,
        sectionDescription: '',
      },
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      JSON.stringify(sectionData, null, 2),
      JSON.stringify(questionData, null, 2)
    );
  };

  if (loading !== 0) return <LoadingPage />;
  else
    return (
      <MakeAppWrapper>
        <MakeAppContainer onSubmit={handleSubmit}>
          <MakeAppHeader />

          <MakeAppContent>
            {sectionData.map((it, idx) => (
              <SectionBox key={idx} sectionData={it} idx={idx} />
            ))}
          </MakeAppContent>

          <MakeAppFooter>
            <NewSectionButton
              color={G06}
              onClick={addSection}
              children={
                <Text
                  size="20px"
                  weight="400"
                  children="새로운 섹션 추가하기"
                />
              }
            />

            <Button
              status="active"
              width="392px"
              height="65px"
              children="모집 공고 등록하기"
            />
          </MakeAppFooter>
        </MakeAppContainer>
      </MakeAppWrapper>
    );
};

const MakeAppWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  height: auto;
  margin: 0 auto;
  text-align: center;
`;

const MakeAppContainer = styled.form`
  width: 760px;
  margin: 0 auto;
`;

const MakeAppContent = styled.div`
  margin-bottom: 50px;
`;

const MakeAppFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 80px;
  margin-bottom: 80px;
`;

const NewSectionButton = styled.button`
  border-bottom: 1px solid ${({ color }) => color};
  color: ${G06};
  &:hover {
    color: ${BK01};
  }
`;
