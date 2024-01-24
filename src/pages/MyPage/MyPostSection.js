import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import PostItem from './PostItem';
import { instance } from 'apis/axios';
import { myPageRequest } from 'apis/request';
function MyPostSection() {
  const [isOperator, setIsOperator] = useState(true);
  const [isApplyPost, setIsApplyPost] = useState(true);
  const [postLists, setPostLists] = useState({
    operatorList: [],
    likedList: [],
    appliedList: [],
  });
  const showApplyPost = () => {
    setIsApplyPost(true);
  };
  const showSavePost = () => {
    setIsApplyPost(false);
  };
  // 한번에 fetch하는게 맞긴해.. 근데 상태가너무많아.. 전역변수 설정해주자 나중에
  useEffect(() => {
    const token = localStorage.getItem('access');
    // 토큰은 로컬이든 쿠키에서 어떻게든 가져왔다고 가정, 테스트 토큰임
    const fetchProfileData = async () => {
      const { data } = await instance.get(`${myPageRequest.allInOne}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          // 테스트 토큰 주석처리, 새로 발급받아야함
          // 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzAwMzM2MDg4LCJpYXQiOjE3MDAzMzI0ODgsImp0aSI6IjI5ZWQxMWI0MDg1ZTRmY2ZhNzg4MTkyZTk5ZjZmNGUwIiwidXNlcl9pZCI6MX0.XLg8jI4FZJOMqM1S_sN_pI28CfPeE2kDASB1GOqlf0I'
        },
      });
      // 동아리 계정일경우
      if (data.crew_info) {
        const { post_list_info: postData } = data;
        setPostLists({ operatorList: postData });
      }
      // 일반 유저일경우
      else {
        setIsOperator(false);
        setPostLists({
          appliedList: data.applied_list,
          likedList: data.liked_list,
        });
      }
    };

    fetchProfileData();
  }, []);

  return (
    <MyPostSectionWrapper>
      <SelectPostType>
        {isOperator ? (
          <CurrentRecruitH1>모집 중인 공고</CurrentRecruitH1>
        ) : (
          <>
            {' '}
            <ApplyPost $isBlue={isApplyPost} onClick={showApplyPost}>
              지원한 공고
            </ApplyPost>
            <SavePost $isBlue={!isApplyPost} onClick={showSavePost}>
              찜한 공고
            </SavePost>
          </>
        )}
      </SelectPostType>
      {/* // 동아리여부, 지원한 공고, 찜한 공고예 따라 조건부 랜더링 */}
      <PostList>
        {isApplyPost
          ? isOperator
            ? postLists?.operatorList.map((item) => (
                <PostItem
                  key={item.id}
                  name={item.crew_name}
                  category={item.category_name}
                  title={item.title}
                  enddate={item.apply_end_date}
                  isOperator={true}
                  isSave={false}
                />
              ))
            : postLists.appliedList.map((item) => (
                <PostItem
                  key={item.id}
                  name={item.crew_name}
                  category={item.category_name}
                  title={item.title}
                  enddate={item.apply_end_date}
                  isOperator={false}
                  isSave={false}
                />
              ))
          : isOperator
          ? ''
          : postLists.likedList.map((item) => (
              <PostItem
                key={item.id}
                name={item.crew_name}
                category={item.category_name}
                title={item.title}
                enddate={item.apply_end_date}
                isOperator={false}
                isSave={true}
              />
            ))}
      </PostList>
      {isOperator ? (
        <WritePostButtton>새로운 모집 공고 작성하기</WritePostButtton>
      ) : (
        ''
      )}
    </MyPostSectionWrapper>
  );
}

const MyPostSectionWrapper = styled.section`
  margin-top: 81px;
`;

const SelectPostType = styled.div`
  display: flex;
  gap: 32px;
`;
const CurrentRecruitH1 = styled.h1`
  color: var(--black-bk-02, #101010);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.4px;
`;

const ApplyPost = styled.div`
  color: ${(props) => (props.$isBlue ? '#1557d0' : '#B3B3B3')};
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: ${(props) => (props.$isBlue ? '700' : '400')};
  line-height: normal;
  cursor: pointer;
  letter-spacing: -0.4px;
  border-bottom: ${(props) => (props.$isBlue ? '4px solid #1557d0' : 'none')};
`;
const SavePost = styled(ApplyPost)``;

const PostList = styled.div`
  margin-top: 28px;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const WritePostButtton = styled.div`
  margin: 32px 0px;
  cursor: pointer;
  color: var(--gray-g-04, #b3b3b3);
  display: flex;
  justify-content: center;
  font-family: Pretendard;
  font-size: 18px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.36px;
  text-decoration-line: underline;
`;

export default MyPostSection;
