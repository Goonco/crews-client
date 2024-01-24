import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import axios from 'axios';

// Imported Functions & Datas
import { sectionDataAtom, questionDataAtom } from './hooks/WriteFormAtom';
import { G05 } from 'style/palette';
import { writeformApi } from 'apis/api/writeform';

// Imported Components
import SectionBox from './Section/SectionBox';
import SelectSectionBox from './Section/SelectSectionBox';
import WriteFormHeader from './WirteFormHeader';
import { Button, Text } from 'components/atoms';
import { LoadingPage } from 'components/templates';

export const WriteFormPage = () => {
  const [sectionData, setSectionData] = useRecoilState(sectionDataAtom);
  const [questionData, setQuestionData] = useRecoilState(questionDataAtom);
  const [loading, setLoading] = useState(true);

  const fetchSectionAndQuestionData = async () => {
    try {
      setSectionData((await writeformApi.getSection()).data);
      setQuestionData((await writeformApi.getQuestion()).data);
      setLoading(false);
    } catch (e) {
      console.log(`${e} : WriteFormPage API Error`);
    }
  };

  useEffect(() => {
    fetchSectionAndQuestionData();
  }, []);

  if (loading) return <LoadingPage />;
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
