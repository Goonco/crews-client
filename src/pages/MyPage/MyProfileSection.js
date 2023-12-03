import React, { useEffect } from 'react';
import styled from 'styled-components';
import backArrow from './backArrow.svg';
import basicImage from './basic-profile.svg';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { instance } from 'api/axios';
import { myPageRequest } from 'api/request';
import { ClubType } from './PostItem';

function MyProfileSection() {
  // input 폼으로 만들었고, 프로필 편집 누르면 여기에서 바로 편집되도록 함
  const [isEdit, setIsEdit] = useState(false);
  const [isOperator, setIsOperator] = useState(true);
  const [profileText, setProfileText] = useState({
    name: '',
    email: '',
    major: [],
    description: '',
    oneLiner: '',
  });
  const onChangeProfileText = (e) => {
    e.stopPropagation();
    if (e.target.name.includes('major')) {
      const majorIndex = parseInt(e.target.name.replace('major', ''), 10);
      const updatedMajor = [...profileText.major];
      updatedMajor[majorIndex] = e.target.value;
      setProfileText({
        ...profileText,
        major: updatedMajor,
      });
      return;
    }
    setProfileText({ ...profileText, [e.target.name]: e.target.value });
  };

  const deleteMajor = (idx) => {
    const updatedMajor = [
      ...profileText.major.slice(0, idx),
      ...profileText.major.slice(idx + 1),
    ];
    if (updatedMajor.length < 1) {
      alert('전공을 최소 1개란을 입력해야 해요.');
      return;
    }
    setProfileText({ ...profileText, major: updatedMajor });
  };
  const toggleIsEdit = () => {
    setIsEdit(!isEdit);
  };
  const addMajor = () => {
    const updatedMajor = [...profileText.major, ''];
    if (updatedMajor.length > 3) {
      alert('전공을 3개이상 추가할 수 없어요.');
      return;
    }
    setProfileText({ ...profileText, major: updatedMajor });
  };

  useEffect(() => {
    // 토큰은 로컬이든 쿠키에서 어떻게든 가져왔다고 가정, 테스트 토큰임
    const token = localStorage.getItem('access');
    const fetchProfileData = async () => {
      const { data } = await instance.get(`${myPageRequest.allInOne}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          // 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzAwMzM2MDg4LCJpYXQiOjE3MDAzMzI0ODgsImp0aSI6IjI5ZWQxMWI0MDg1ZTRmY2ZhNzg4MTkyZTk5ZjZmNGUwIiwidXNlcl9pZCI6MX0.XLg8jI4FZJOMqM1S_sN_pI28CfPeE2kDASB1GOqlf0I',
        },
      });
      //동아리 관리자일경우
      if (data.crew_info) {
        const crewInfo = data.crew_info;
        console.log(crewInfo);
        setIsOperator(true);
        setProfileText({
          name: crewInfo.crew_name,
          // 동아리 email 받아와야됨 백엔드에게 문의
          email: 'ceos@naver.com',
          description: crewInfo.crew_description,
        });
      }
      // 일반유저일경우
      else {
        const { user_nomal_info: userInfo } = data;
        const majorList = [];
        if (userInfo.first_major) {
          majorList.push(userInfo.first_major);
        }
        if (userInfo.second_major) {
          majorList.push(userInfo.second_major);
        }
        if (userInfo.third_major) {
          majorList.push(userInfo.third_major);
        }
        setIsOperator(false);
        setProfileText({
          name: userInfo.name,
          email: userInfo.email,
          major: majorList,
        });
      }
    };

    fetchProfileData();
  }, []);

  return (
    <MyProfileSectionWrapper>
      <BackArrow src={backArrow} />
      <H1>마이페이지</H1>
      <ProfileBox>
        <ProfileCircle $backgroundImage={basicImage}>
          <EditButton onClick={toggleIsEdit}>
            {isEdit ? '프로필 수정 완료' : '프로필 수정'}
          </EditButton>
        </ProfileCircle>
        <ProfilBasicInfo>
          <NameInput>
            {profileText.name}
            {isOperator ? <ClubTagType>IT/코딩</ClubTagType> : ''}
          </NameInput>
          <EmailInput>{profileText.email}</EmailInput>
          {isOperator ? (
            <OneLinerInput
              value={profileText.description}
              name={'description'}
              onChange={onChangeProfileText}
              $isEdit={isEdit}
              disabled={isEdit ? false : true}
            />
          ) : (
            ''
          )}
        </ProfilBasicInfo>
        {isOperator ? (
          ''
        ) : (
          <MajorInfo>
            {profileText.major.map((item, idx) => {
              return (
                <MajorLabel>
                  <LabelText>제{idx + 1}전공</LabelText>
                  <MajorItem
                    value={profileText.major[idx]}
                    name={`${idx}major`}
                    onChange={onChangeProfileText}
                    $isEdit={isEdit}
                    disabled={isEdit ? false : true}
                  />
                  {isEdit ? (
                    <FontAwesomeIcon
                      icon={faCircleXmark}
                      onClick={() => {
                        deleteMajor(idx);
                      }}
                      size="lg"
                      style={{
                        position: 'absolute',
                        top: '7px',
                        left: '-25px',
                        cursor: 'pointer',
                      }}
                    />
                  ) : (
                    ''
                  )}
                </MajorLabel>
              );
            })}
            {isEdit ? (
              <AddMajorButton onClick={addMajor}>전공 추가하기</AddMajorButton>
            ) : (
              ''
            )}
          </MajorInfo>
        )}
      </ProfileBox>
    </MyProfileSectionWrapper>
  );
}

const MyProfileSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 40px;
  gap: 38px;
`;

const BackArrow = styled.img`
  position: absolute;
  top: -2px;
  left: -43px;
  cursor: pointer;
`;

const H1 = styled.h1`
  color: var(--black-bk-02, #101010);
  font-family: Pretendard;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  letter-spacing: -0.56px;
`;

const ProfileBox = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
`;

const ProfileCircle = styled.div`
  border-radius: 50%;
  width: 120px;
  height: 120px;
  position: relative;
  background-image: url(${(props) => props.$backgroundImage});
`;

const ProfilBasicInfo = styled.div`
  display: flex;
  width: 216px;
  flex-direction: column;
  gap: 10px;
`;

const NameInput = styled.div`
  color: var(--black-bk-02, #101010);
  font-family: Pretendard;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  border-radius: 8.046px;
  position: relative;
`;

const ClubTagType = styled(ClubType)`
  position: absolute;
  top: 0;
  left: 90px;
`;

const EmailInput = styled.div`
  border: none;
  color: var(--gray-g-04, #b3b3b3);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  border-radius: 8.046px;
  font-weight: 500;
`;

const OneLinerInput = styled.input`
  color: var(--gray-g-06, #666);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  background ${(props) =>
    props.$isEdit ? 'var(--blue-b-01, #f6f9fe);' : 'none'}  ;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.4px;
  border:none;
  &:focus {
    outline: none;
  }
`;

const MajorInfo = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  gap: 8px;
  position: relative;
  align-items: flex-end;
`;

const MajorLabel = styled.label`
  position: relative;
`;

const LabelText = styled.div`
  position: absolute;
  top: 0px;
  left: 14px;
  height: 100%;
  color: var(--gray-g-05, #999);
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 400;
  display: flex;
  align-items: center;
`;

const MajorItem = styled.input`
  width: 307px;
  height: 35px;
  flex-shrink: 0;
  border-radius: 8.046px;
  border: 1px solid var(--gray-g-02, #e6e6e6);
  background: #fff;
  background ${(props) =>
    props.$isEdit ? 'var(--blue-b-01, #f6f9fe);' : 'none'}  ;
  &:focus {
    outline: none;
  }
  color: var(--black-bk-01, #303030);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding-left: 70px;
`;

const EditButton = styled.div`
  color: var(--gray-g-04, #b3b3b3);
  font-family: Pretendard;
  position: absolute;
  cursor: pointer;
  top: 130px;
  left: 20px;
  text-align: center;
  width: 90px;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.28px;
  text-decoration-line: underline;
`;

const AddMajorButton = styled.div`
  position: absolute;
  left: 60px;
  text-decoration-line: underline;
  bottom: -30px;
`;
export default MyProfileSection;
