import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Flex, Space } from 'components/atoms';
import basicProfile from './basic-profile.svg';
import dummyImage from './dummyImage.png';
import saveImage from './save.svg';
import saveBlueImage from './save-blue.svg';
import { instance } from 'apis/axios';
import { homePageRequest } from 'apis/request';
import { useNavigate } from 'react-router-dom';
import PostCategoryData from './PostCategory';
function MainCrewCard({
  title,
  endDate,
  id,
  crewName,
  dayLeft,
  likeCount,
  category,
  isLiked,
  isSmall,
}) {
  const [isSaveBlue, setIsSaveBlue] = useState(isLiked);
  const [countLikes, setCountLikes] = useState(likeCount);
  const navigate = useNavigate();
  const postLikePost = async (id) => {
    await instance.post(
      `${homePageRequest.likePost}`,
      {
        post_id: id,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access')}`,
        },
      }
    );
    if (isSaveBlue) {
      setCountLikes(countLikes - 1);
    } else {
      setCountLikes(countLikes + 1);
    }
    setIsSaveBlue(!isSaveBlue);
  };
  const onClickSaveButton = (e) => {
    e.stopPropagation();
    if (localStorage.getItem('access')) {
      postLikePost(id);
    } else {
      navigate('/login');
    }
  };
  useEffect(() => {}, [isSaveBlue]);

  const onClickGoDetailPost = (e) => {
    navigate(`/postdetail/${id}`);
  };
  return (
    <MainCrewCardItem $isSmall={isSmall} onClick={onClickGoDetailPost}>
      <DdayLabel>모집 마감 {dayLeft}</DdayLabel>
      <CrewPostImage src={dummyImage} />
      <Space height={'10px'} />
      <PostDataContainer>
        <Flex justify="flex-start" gap={'7'}>
          <CrewImage src={basicProfile} />
          <CrewName>{crewName}</CrewName>
        </Flex>
        <PostTitle>{title}</PostTitle>
        <PostCategory>
          <PostCategoryData category={category} />
        </PostCategory>
        <PostSaveView>
          {isSaveBlue ? (
            <SaveImage
              src={saveImage}
              onClick={onClickSaveButton}
              className="save"
            />
          ) : (
            <SaveImage
              src={saveBlueImage}
              onClick={onClickSaveButton}
              className="save"
            />
          )}

          <SaveCount $isLiked={isSaveBlue}>{countLikes}</SaveCount>
        </PostSaveView>
      </PostDataContainer>
    </MainCrewCardItem>
  );
}

const MainCrewCardItem = styled.div`
  width: 236px;
  height: 448px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid var(--gray-g-02, #e6e6e6);
  background: #fff;
  position: relative;
  transform: ${(props) => (props.$isSmall ? 'scale(0.8)' : 'scale(1)')};
`;

const DdayLabel = styled.div`
  border-radius: 30px;
  background: var(--red-r-02, #f15454);
  display: flex;
  padding: 6px 14px;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 16px;
  left: 16px;
  color: #ffffff;
`;

const CrewPostImage = styled.img`
  width: 100%;
  height: 234px;
  border-radius: 10px 10px 0px 0px;
  object-fit: cover;
`;

const PostDataContainer = styled.div`
  display: flex;
  width: 85%;
  margin: 0 auto;
  flex-direction: column;
  gap: 16px;
`;

const CrewImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;
const CrewName = styled.div`
  color: var(--gray-g-05, #999);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.32px;
`;

const PostTitle = styled.p`
  color: var(--black-bk-02, #101010);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px; /* 130% */
  letter-spacing: -0.4px;
`;

const PostCategory = styled.div`
  display: flex;
  padding: 6px 14px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 30px;
  background: var(--blue-b-05-m, #3172ea);
  color: #fff;
  position: absolute;
  bottom: 53px;
`;
const PostSaveView = styled.label`
  display: flex;
  position: absolute;
  bottom: 16px;
  right: 16px;
  gap: 4px;
`;

const SaveImage = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;
const SaveCount = styled.div`
  color: ${(props) => (props.$isLiked ? '#3172ea' : '#101010')};
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: ${(props) => (props.$isLiked ? '700' : '400')};
  line-height: normal;
  letter-spacing: -0.36px;
`;
export default MainCrewCard;
