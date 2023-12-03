import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ImageSection from './ImageSection';
import H1 from './H1';
import FormTitle from './FormTitle';
import FormTextArea from './FormTextArea';
import { Space } from 'components/atoms';
import textData from './textData';
import RecruitPlanSection from './RecruitPlanSection';
import { instance } from 'api/axios';
import { applyPostPageRequest } from 'api/request';
import { useRecoilValue } from 'recoil';
import { intPlanAtom } from './atom';
import { useNavigate } from 'react-router-dom';

export const MakePost = () => {
  // 백엔드로 전달할 상태관리변수
  // 연결할거임
  const [form, setForm] = useState({
    title: '',
    mainContent: '',
    applyQualify: '',
    recruitProcess: '',
    isContinuousRecruitment: false,
    hasSecondInterview: true,
    recruitProcedure: '',
    membershipFee: '',
    uploadImage: [],
  });
  const ipas = useRecoilValue(intPlanAtom);
  const onTextFieldChange = (name, value) => {
    setForm((prev) => {
      return { ...prev, [name]: value };
    });
    localStorage.setItem(name, value);
  };
  const onImageFieldChange = (value) => {
    setForm((prev) => {
      return { ...prev, uploadImage: value };
    });
  };

  // 텍스트 데이터 임시저장
  useEffect(() => {
    for (const key in localStorage) {
      const value = localStorage.getItem(key);
      setForm((prev) => {
        return { ...prev, [key]: value };
      });
    }
  }, []);

  const navigate = useNavigate();

  const onClickPostFormData = async () => {
    // crew 같은 경우는 라우팅할 때 동아리 id를 설정, 토큰은 일단 예시로
    const res = await instance.post(
      applyPostPageRequest.applyPost,
      {
        title: form.title,
        content: form.mainContent,
        requirement_target: form.applyQualify,
        progress: form.recruitProcess,
        apply_start_date: `${ipas.firstsy}-${ipas.firstsm}-${ipas.firstsd} ${ipas.firstsh}:${ipas.firstsmn}:00`,
        apply_end_date: `${ipas.firstey}-${ipas.firstem}-${ipas.firsted} ${ipas.firsteh}:${ipas.firstemn}:00`,
        document_result_date: `${ipas.firstay}-${ipas.firstam}-${ipas.firstad} ${ipas.firstah}:${ipas.firstamn}:00`,
        has_interview: form.hasSecondInterview,
        interview_start_date: `${ipas.secondsy}-${ipas.secondsm}-${ipas.secondsd} ${ipas.secondsh}:${ipas.secondsmn}:00`,
        interview_end_date: `${ipas.secondey}-${ipas.secondem}-${ipas.seconded} ${ipas.secondeh}:${ipas.secondemn}:00`,
        final_result_date: `${ipas.seconday}-${ipas.secondam}-${ipas.secondad} ${ipas.secondah}:${ipas.secondamn}:00`,
        membership_fee: form.membershipFee,
        crew: 1,
      },
      {
        header:
          'Beader eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzAwNDg4MTEzLCJpYXQiOjE3MDA0ODQ1MTMsImp0aSI6IjIyNjg0ZTg4YmIzZjQ2ZGViMTlmZmY1ZjM4NTQzZjRlIiwidXNlcl9pZCI6M30.VKLfT5AQxXvXw-PmRdY1hRBRuc7zFVP3RBNHEFBbS9Q',
      }
    );

    navigate(`/${res.data.id}`);
  };

  return (
    <MakePostWrapper>
      <H1 />
      <FormList>
        <FormItem>
          <FormTitle index={1} content={'모집 제목'} />
          <FormTextArea
            name="title"
            value={form.title}
            height={'68px'}
            onTextFieldChange={onTextFieldChange}
            placeholder={textData.모집제목}
          />
        </FormItem>
        <FormItem>
          <FormTitle index={2} content={'공고할 내용'} />
          <FormTextArea
            name="mainContent"
            value={form.mainContent}
            height={'220px'}
            onTextFieldChange={onTextFieldChange}
            placeholder={textData.공고내용}
          />
        </FormItem>
        <FormItem>
          <FormTitle index={3} content={'지원 자격'} />
          <FormTextArea
            name="applyQualify"
            value={form.applyQualify}
            height={'130px'}
            onTextFieldChange={onTextFieldChange}
            placeholder={textData.지원자격}
          />
        </FormItem>
        <FormItem>
          <FormTitle index={4} content={'모집 절차'} />
          <FormTextArea
            name="recruitProcess"
            value={form.recruitProcess}
            placeholder={textData.모집절차}
            height={'130px'}
            onTextFieldChange={onTextFieldChange}
          />
        </FormItem>
        <FormItem>
          <FormTitle index={5} content={'모집 일정'} />
          <RecruitPlanSection />
        </FormItem>
        <FormItem>
          <FormTitle index={6} content={'회비'} />
          <FormTextArea
            name="membershipFee"
            value={form.membershipFee}
            onTextFieldChange={onTextFieldChange}
            height={'68px'}
            placeholder={textData.회비}
          />
        </FormItem>
        <FormItem>
          <FormTitle index={7} content={'이미지 첨부'} />
          <GuideText>{textData.이미지첨부}</GuideText>
          <ImageSection onImageFieldChange={onImageFieldChange} />
        </FormItem>
      </FormList>
      <Space height={'52px'}></Space>
      <GuideText>{textData.유의사항}</GuideText>
      <MoveButton onClick={onClickPostFormData}>
        'STEP 02 지원서 양식 작성’ 으로 이동하기
      </MoveButton>
    </MakePostWrapper>
  );
};

const MakePostWrapper = styled.div`
  margin: 0 auto;
  width: 760px;
`;

const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const FormList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const GuideText = styled.div`
  color: var(--gray-g-04, #b3b3b3);
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.4px;
`;

const MoveButton = styled.button`
  all: unset; // 버튼 css 초기화. 나중에 전역스타일링에서 바꿔주면 될듯함
  margin: 80px auto 80px;
  width: 392px;
  height: 65px;
  border-radius: 10px;
  background: var(--blue-b-05-m, #3172ea);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
`;
