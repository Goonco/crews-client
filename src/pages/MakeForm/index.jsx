import styled from 'styled-components';

import { instance } from 'api/axios';
import { applyAppPageRequest } from 'api/request';

// Imported Functions & Datas
import useSection from './useSection';
import useQuestion from './useQuestion';
import { G06, BK01 } from 'style/palette';

// Imported Components
import SectionBox from './Section/SectionBox';
import MakeFormHeader from './MakeFormHeader';
import LoadingPage from './LoadingPage';
import { Space, Button, Text } from 'components/atoms';
import { useState } from 'react';
import { useParams } from 'react-router';

export const MakeForm = () => {
  const [loading, setLoading] = useState(0);
  const { sectionData, addSection } = useSection();
  const { questionData } = useQuestion();
  const { postid } = useParams();

  const handleMakeFormClick = async () => {
    for (const section of sectionData) {
      const questions = questionData
        .filter((ques) => ques.sectionId === section.id)
        .map((ques) => {
          if (ques.questionType === 'checkbox')
            return {
              type: 'checkbox',
              is_essential: ques.isMandatory,
              question: ques.questionDescription,
              answer_minimum: 1,
              answer_maximum: ques.canMultipleCheck ? 1 : 2,
              options: ques.options.map((op) => op.option),
            };
          else
            return {
              type: 'long_sentence',
              is_essential: ques.isMandatory,
              question: ques.questionDescription,
              letter_count_limit: ques.characterLimit,
            };
        });

      const body = {
        post_id: Number(postid),
        section_name: section.sectionName,
        description: section.sectionDescription,
        question: questions,
      };

      setLoading((prev) => prev + 1);
      console.log({ ...body });
      await instance.post(
        `${applyAppPageRequest.applyApplication}`,
        { ...body },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access')}`,
          },
        }
      );
      setLoading((prev) => prev - 1);
    }
  };

  if (loading !== 0) return <LoadingPage />;
  else
    return (
      <MakeFormWrapper>
        <MakeFormContent>
          <Space height="40px" />
          <MakeFormHeader />
          <Space height="40px" />

          {sectionData.map((it, idx) => (
            <>
              <SectionBox key={idx} sectionData={it} idx={idx} />
              <Space height="50px" />
            </>
          ))}
          <Space height="50px" />

          <TextButton color={G06} onClick={addSection}>
            <Text size="20px" weight="400" children="새로운 섹션 추가하기" />
          </TextButton>
          <Space height="80px" />
          <CenteredButton
            status="active"
            width="392px"
            height="65px"
            children="모집 공고 등록하기"
            onClick={handleMakeFormClick}
          />
          <Space height="80px" />
        </MakeFormContent>
      </MakeFormWrapper>
    );
};

const MakeFormWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  height: auto;
  margin: 0 auto;
  text-align: center;
`;

const MakeFormContent = styled.div`
  width: 760px;
  margin: 0 auto;
`;

const TextButton = styled.button`
  border-bottom: 1px solid ${({ color }) => color};
  color: ${G06};
  &:hover {
    color: ${BK01};
  }
`;

const CenteredButton = styled(Button)`
  margin: 0 auto;
`;
