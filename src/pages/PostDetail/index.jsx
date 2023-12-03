import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import backArrow from './backArrow.svg';
import profile from './profile.png';
import { Flex, Text, Space } from 'components/atoms';
import { instance } from 'api/axios';
import { postDetailRequest } from 'api/request';
import { useNavigate, useParams } from 'react-router-dom';
import backArrowIcon from './backArrow.svg';
import shareIcon from './share-icon.svg';
import bookMarkIcon from './bookmark.svg';
import activateBookMarkIcon from './blue-bookmark.svg';
import postImage from './postImage.png';
import dayjs from 'dayjs';
import copy from 'clipboard-copy';
export const PostDetail = () => {
  const navigate = useNavigate();
  const [isSaveBlue, setIsSaveBlue] = useState();
  const [countLikes, setCountLikes] = useState();
  const [recruitmentData, setRecruitmentData] = useState(null);
  const [crewData, setCrewData] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const params = useParams();
  const convertData = (str) => {
    // dayjs 사용해서
    if (!str) {
      return ''; // 날짜가 없을 경우 빈 문자열 반환
    }

    const formattedDate = dayjs(str).format('M월 D일 H시 m분');
    return formattedDate;
  };
  const onClickGoPost = () => {
    navigate(`/makepost/${params.postid}`);
  };

  const onClickGoHome = () => {
    console.log('?');
    navigate('/');
  };

  const onClickSaveIcon = () => {
    instance.post(
      `${postDetailRequest.likedPost}`,
      { post_id: params.postid },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access')}`,
        },
      }
    );
  };
  const handleCopyClick = () => {
    copy(window.location.href)
      .then(() => {
        alert('클립보드에 주소가 복사되었습니다!');
      })
      .catch((err) => {
        console.error('복사 중 오류 발생:', err);
      });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [postResponse, crewResponse] = await Promise.all([
          instance.get(`${postDetailRequest.getPostInfo}`, {
            params: {
              post_id: params.postid,
            },
          }),
          instance.get(`${postDetailRequest.getCrewInfo}`, {
            params: {
              post_id: params.postid,
            },
          }),
        ]);

        console.log(postResponse);
        setCountLikes(postResponse.data.total_likes);
        setRecruitmentData({
          ...postResponse.data,
          apply_start_date: convertData(postResponse.data.apply_start_date),
          apply_end_date: convertData(postResponse.data.apply_end_date),
          document_result_date: convertData(
            postResponse.data.document_result_date
          ),
          interview_start_date: convertData(
            postResponse.data.interview_start_date
          ),
          interview_end_date: convertData(postResponse.data.interview_end_date),
          final_result_date: convertData(postResponse.data.final_result_date),
        });
        setImageUrl(postResponse.data.image[0]);
        setCrewData({
          crew_name: crewResponse.data.crew.crew_name,
          category: crewResponse.data.crew.crew_category,
          crew_description: crewResponse.data.crew.description,
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [params.postid]);

  return (
    <DetailWrapper>
      <Space height="40px" />
      <CrewInfo>
        <Flex justify="start" height="100%">
          <Profile src={profile} />
          <Flex direction="column" gap={'12'} align="flex-start">
            <Flex>
              <CrewName> {crewData?.crew_name}</CrewName>
              <CrewCategory>{crewData?.category}</CrewCategory>
            </Flex>
            <CrewDetail>{crewData?.crew_description}</CrewDetail>
          </Flex>
        </Flex>
      </CrewInfo>
      <Space height="40px" />

      <ContentDiv>
        <Title>
          <BackArrow src={backArrow} onClick={onClickGoHome} />
          <Text weight={700} size="30px">
            {recruitmentData?.title}
          </Text>
        </Title>
        <Space height="40px" />
        <Image src={imageUrl}></Image>
        <Space height="40px" />
        <Content>
          <Flex direction="column" align="start">
            <Text color="#1557D0" weight={700} size="20px">
              모집내용
            </Text>
            <Space height="16px" />
            <Text
              color="#101010"
              weight={400}
              size="18px"
              align="start"
              style={{ whiteSpace: 'pre-line', lineHeight: '150%' }}
            >
              {recruitmentData?.content}
            </Text>
          </Flex>
        </Content>
        <Space height="40px" />

        <Target>
          <Flex direction="column" align="start">
            <Text color="#1557D0" weight={700} size="20px">
              지원자격{' '}
            </Text>{' '}
            <Space height="16px" />
            <Text
              color="#101010"
              weight={400}
              size="18px"
              align="start"
              style={{ whiteSpace: 'pre-line' }}
            >
              {recruitmentData?.requirement_target}
            </Text>
          </Flex>
        </Target>
        <Space height="40px" />

        <Process>
          <Flex direction="column" align="start">
            <Text color="#1557D0" weight={700} size="20px">
              모집 절차
            </Text>{' '}
            <Space height="16px" />
            <Text
              color="#101010"
              weight={400}
              size="18px"
              align="start"
              style={{ whiteSpace: 'pre-line' }}
            >
              {recruitmentData?.progress}
            </Text>
          </Flex>
        </Process>
        <Space height="40px" />

        <Schedule>
          <Flex direction="column" align="start">
            <Text color="#1557D0" weight={700} size="20px">
              모집 일정
            </Text>{' '}
            <Space height="16px" />
            <Document>
              <Flex direction="column" align="start">
                <Text color="#101010" weight={700} size="18px">
                  1차 서류심사
                </Text>{' '}
                <Space height="12px" />
                <Text color="#101010" weight={400} size="18px" align="start">
                  접수일 : {recruitmentData?.apply_start_date}~
                  {recruitmentData?.apply_end_date}
                </Text>{' '}
                <Space height="12px" />
                <Text color="#101010" weight={400} size="18px" align="start">
                  발표일 : {recruitmentData?.document_result_date}
                </Text>
                <Space height="16px" />
              </Flex>
            </Document>
            {recruitmentData?.has_interview && (
              <Interview>
                <Flex direction="column" align="start">
                  <Text color="#101010" weight={700} size="18px">
                    2차 면접
                  </Text>{' '}
                  <Space height="12px" />
                  <Text color="#101010" weight={400} size="18px" align="start">
                    접수일 : {recruitmentData?.interview_start_date}~
                    {recruitmentData?.interview_end_date}
                  </Text>{' '}
                  <Space height="12px" />
                  <Text color="#101010" weight={400} size="18px" align="start">
                    발표일 : {recruitmentData?.final_result_date}
                  </Text>
                </Flex>
              </Interview>
            )}
          </Flex>
        </Schedule>
        <Space height="40px" />

        <Fee>
          <Flex direction="column" align="start">
            <Text color="#1557D0" weight={700} size="20px">
              회비
            </Text>{' '}
            <Space height="12px" />
            <Text
              color="#101010"
              weight={400}
              size="18px"
              align="start"
              style={{ whiteSpace: 'pre-line' }}
            >
              {recruitmentData?.membership_fee}
            </Text>
          </Flex>
        </Fee>
      </ContentDiv>
      <Space height="200px" />
      <BottomFixBar>
        <LeftBoxWrapper>
          <BlackBox>모집 공고</BlackBox>
          <BlackBox>Q&A</BlackBox>
        </LeftBoxWrapper>
        <RightBoxWrapper>
          <ShareBox>
            <ShareIcon src={bookMarkIcon} onClick={handleCopyClick} />
          </ShareBox>
          <SaveBox onClick={onClickSaveIcon}>
            <SaveIcon src={shareIcon} />
            <SaveCount>24</SaveCount>
          </SaveBox>
          {/* 버튼상태 */}
          <WritePost>지원서 작성하기</WritePost>
        </RightBoxWrapper>
      </BottomFixBar>
    </DetailWrapper>
  );
};
const BlackBox = styled.div`
  display: flex;
  width: 140px;
  height: 60px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  background: var(--black-bk-01, #303030);
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.4px;
  cursor: pointer;
`;

const ShareBox = styled.div`
  width: 60px;
  height: 60px;
  flex-shrink: 0;
  border-radius: 10px;
  background: var(--blue-b-01, #f6f9fe);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const ShareIcon = styled.img``;

const SaveBox = styled.div`
  width: 92px;
  height: 60px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  cursor: pointer;
  border-radius: 10px;
  background: var(--blue-b-01, #f6f9fe);
`;
const SaveIcon = styled.img``;

const SaveCount = styled.div`
  color: var(--black-bk-01, #303030);
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.4px;
`;

const WritePost = styled.div`
  width: 250px;
  height: 60px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #fff;
  cursor: pointer;
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.4px;
  border-radius: 10px;
  background: var(--blue-b-05-m, #3172ea);
  justify-content: center;
`;

const LeftBoxWrapper = styled.div`
  display: flex;
  margin-right: auto;
  gap: 20px;
`;

const RightBoxWrapper = styled.div`
  display: flex;
  gap: 20px;
`;
const BottomFixBar = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  bottom: 0px;

  padding: 20px 28px 20px 1642px;
  justify-content: flex-end;
  align-items: center;
  position: fixed;

  flex-shrink: 0;
  background: var(--blue-b-02, #e8effd);
  padding: 28px;
`;
const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
const BackArrow = styled.img`
  position: absolute;
  left: -60px;
  top: -170px;
  cursor: pointer;
`;

const CrewInfo = styled.div`
  width: 760px;
  height: 128px;
  border-radius: 20px;
  background: #f6f8fe;
`;
const Profile = styled.img`
  margin-left: 25.65px;
`;
const CrewName = styled.div`
  margin-left: 25.76px;
  color: #101010;
  font-family: Pretendard;
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
`;
const CrewCategory = styled.div`
  margin-left: 12px;
  background-color: #3172ea;
  border-radius: 15.5px;
  display: inline-flex;
  padding: 6px 14px;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
`;
const CrewDetail = styled.div`
  margin-left: 25.76px;

  color: #666;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
`;

const ContentDiv = styled.div`
  width: 760px;
`;
const Content = styled.div`
  width: 760px;
`;
const Title = styled.div`
  width: 760px;
  position: relative;
`;
const Image = styled.img`
  margin: 0px 165px;
  width: 430px;
`;

const Target = styled.div``;
const Interview = styled.div``;
const Schedule = styled.div``;
const Document = styled.div``;
const Process = styled.div``;
const Fee = styled.div``;
