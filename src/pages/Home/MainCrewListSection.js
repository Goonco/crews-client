import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Space } from 'components/atoms';
import searchIcon from './search.svg';
import arrowUpIcon from './arrowUpICon.svg';
import MainCrewCard from './MainCrewCard';
import { instance } from 'api/axios';
import { homePageRequest } from 'api/request';
import { useNavigate } from 'react-router-dom';
function MainCrewListSection() {
  const [searchInput, setSearchInput] = useState('');
  const navigate = useNavigate();
  const [isLabelBlue, setIsLabelBlue] = useState({
    it: false,
    game: false,
    vol: false,
    sports: false,
    eng: false,
    art: false,
    job: false,
    friend: false,
    etc: false,
  });
  // 랜더링할 게시글 데이터 리스트
  const [postData, setPostData] = useState([]);
  const onSearchChange = (e) => {
    setSearchInput(e.target.value);
  };
  const onClickLabel = (e) => {
    const name = e.target.getAttribute('name');
    if (isLabelBlue[name]) setIsLabelBlue({ ...isLabelBlue, [name]: false });
    else setIsLabelBlue({ ...isLabelBlue, [name]: true });
  };
  useEffect(() => {
    const userCategoriesArray = Object.keys(isLabelBlue).filter(
      (key) => isLabelBlue[key]
    );
    if (userCategoriesArray.length === 0) {
      fetchData();
    } else {
      fetchFilteredData();
    }
  }, [isLabelBlue]);

  useEffect(() => {
    fetchData();
  }, []);
  console.log(postData);
  const fetchData = async () => {
    // 로그인했을 경우
    try {
      if (localStorage.getItem('access')) {
        const res = await instance.get(`${homePageRequest.normalPostInfo}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access')}`,
          },
        });
        setPostData(res.data);
      }
      // 로그인하지 않을 경우
      else {
        const res = await instance.get(`${homePageRequest.normalPostInfo}`);
        setPostData(res.data);
      }
    } catch (err) {
      const res = await instance.get(`${homePageRequest.normalPostInfo}`);
      setPostData(res.data);
    }
  };

  const fetchFilteredData = async () => {
    const userCategoriesArray = Object.keys(isLabelBlue).filter(
      (key) => isLabelBlue[key]
    );
    const categoriesQueryString = userCategoriesArray.join('&categories=');
    // 로그인 O
    if (localStorage.getItem('access')) {
      const headers = {
        Authorization: `Bearer ${localStorage.getItem('access')}`,
      };
      try {
        let url = homePageRequest.specificPostInfo;
        if (searchInput) {
          url += `?query=${searchInput}`;
        }
        if (userCategoriesArray.length > 0) {
          url += `${
            searchInput ? '&' : '?'
          }categories=${categoriesQueryString}`;
        }

        const res = await instance.get(url, { headers });
        setPostData(res.data);
      } catch (error) {
        console.error('Error fetching filtered data:', error);
      }
    }
    // 로그인 X
    else {
      try {
        let url = homePageRequest.specificPostInfo;
        if (searchInput) {
          url += `?query=${searchInput}`;
        }
        if (userCategoriesArray.length > 0) {
          url += `${
            searchInput ? '&' : '?'
          }categories=${categoriesQueryString}`;
        }
        const res = await instance.get(url);
        setPostData(res.data);
      } catch (error) {
        console.error('Error fetching filtered data:', error);
      }
    }
  };

  return (
    <>
      <MainSearchSection>
        <SearchInput
          placeholder="당신의 도전을 펼칠 동아리를 검색해주세요."
          value={searchInput}
          onChange={onSearchChange}
        />
        <SearchIcon src={searchIcon} onClick={fetchFilteredData} />
      </MainSearchSection>
      <Space height={'30px'} />
      <SearchLabelListContainer>
        <SearchLabelList>
          <SearchLabel
            name="it"
            $isLabelBlue={isLabelBlue.it}
            onClick={onClickLabel}
          >
            IT / 코딩
          </SearchLabel>
          <SearchLabel
            name="game"
            $isLabelBlue={isLabelBlue.game}
            onClick={onClickLabel}
          >
            게임
          </SearchLabel>
          <SearchLabel
            name="vol"
            $isLabelBlue={isLabelBlue.vol}
            onClick={onClickLabel}
          >
            봉사
          </SearchLabel>
          <SearchLabel
            name="sports"
            $isLabelBlue={isLabelBlue.sports}
            onClick={onClickLabel}
          >
            스포츠
          </SearchLabel>
          <SearchLabel
            name="eng"
            $isLabelBlue={isLabelBlue.eng}
            onClick={onClickLabel}
          >
            어학
          </SearchLabel>
          <SearchLabel
            name="art"
            $isLabelBlue={isLabelBlue.art}
            onClick={onClickLabel}
          >
            예술/공연
          </SearchLabel>
          <SearchLabel
            name="job"
            $isLabelBlue={isLabelBlue.job}
            onClick={onClickLabel}
          >
            창업/취업
          </SearchLabel>
          <SearchLabel
            name="friend"
            $isLabelBlue={isLabelBlue.friend}
            onClick={onClickLabel}
          >
            친목
          </SearchLabel>
          <SearchLabel
            name="etc"
            $isLabelBlue={isLabelBlue.etc}
            onClick={onClickLabel}
          >
            기타
          </SearchLabel>
        </SearchLabelList>
      </SearchLabelListContainer>
      <Space height={'30px'}></Space>
      <SortingTypeList>
        <SortingType>
          모집 마감순 <ArrowIcon src={arrowUpIcon} />
        </SortingType>
        <SortingType>
          모집 기간 유형
          <ArrowIcon src={arrowUpIcon} />
        </SortingType>
      </SortingTypeList>

      <MainCrewCardList>
        {postData.map((item) => (
          <MainCrewCard
            key={item.id}
            id={item.id}
            title={item.title}
            endDate={item.apply_end_date}
            crewName={item.crew_name}
            dayLeft={item.d_minus_info}
            likeCount={item.current_like_count}
            category={item.category}
            isLiked={item.is_liked}
          />
        ))}
      </MainCrewCardList>
    </>
  );
}

const MainSearchSection = styled.section`
  width: 80%;
  margin-top: 28px;
  width: 760px;
  height: 65px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid var(--gray-g-03, #ccc);
  background: #fff;
  display: flex;
  align-items: center;
`;
const SearchInput = styled.input.attrs({ type: 'text' })`
  width: 80%;
  flex-grow: 1;
  font-family: Pretendard;
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.36px;
  padding: 10px;
  margin-left: 10px;
  border: none;
  outline: none;
  &:placeholder {
    color: var(--gray-g-04, #b3b3b3);
  }
`;

const SearchIcon = styled.img`
  margin-right: 22px;
  cursor: pointer;
`;

const SearchLabelListContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const SearchLabelList = styled.div`
  display: flex;
  width: 80%;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
`;

const SearchLabel = styled.label`
  width: 100px;
  height: 39px;
  flex-shrink: 0;
  border-radius: 99px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: ${(props) => (props.$isLabelBlue ? '700' : '400')};
  color: ${(props) => (props.$isLabelBlue ? '#fff' : '#ccc')};
  background: ${(props) => (props.$isLabelBlue ? '#3172ea' : 'none')};
  border-radius: 99px;
  border: ${(props) => (props.$isLabelBlue ? 'none' : '1px solid #ccc')};
  cursor: pointer;
`;

const SortingTypeList = styled.div`
  display: flex;
  gap: 20px;
  justify-content: flex-end;
`;

const ArrowIcon = styled.img``;

const SortingType = styled.div`
  display: flex;
  cursor: pointer;
  color: var(--gray-g-05, #999);
  align-items: center;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.36px;
`;

const MainCrewCardList = styled.div`
  display: flex;
  margin-top: 20px;
  gap: 26px;
  flex-wrap: wrap;
`;
export default MainCrewListSection;
