import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Outlet, Link, useLocation } from 'react-router-dom';
import IntroSection from './IntroSection';
import { Space } from 'components/atoms';
import MainCrewListSection from './MainCrewListSection';
import { instance } from 'apis/axios';
import { homePageRequest } from 'apis/request';
export const Home = () => {
  const [isActive, setIsActive] = useState({
    list: false,
    popular: false,
    how: false,
    crews: false,
  });
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/') {
      setIsActive({ list: true, popular: false, how: false, crews: false });
    } else if (pathname === '/hot') {
      setIsActive({ list: false, popular: true, how: false, crews: false });
    } else if (pathname === '/how') {
      setIsActive({ list: false, popular: false, how: true, crews: false });
    } else if (pathname == '/crews') {
      setIsActive({ list: false, popular: false, how: false, crews: true });
    }
  }, [pathname]);

  return (
    <HomeContainer>
      <IntroSection />
      <Space height={'30px'} />
      <MainInfoContainer>
        <MainNav>
          <Link to="/">
            <Li $isActive={isActive.list}>동아리 목록</Li>
          </Link>
          <Link to="/hot">
            <Li $isActive={isActive.popular}>인기 동아리</Li>
          </Link>
          <Link to="/how">
            <Li $isActive={isActive.how}>사용 방법</Li>
          </Link>
          <Link to="/crews">
            <Li $isActive={isActive.crews}>함께하는 동아리</Li>
          </Link>
        </MainNav>
        <Outlet />
      </MainInfoContainer>
    </HomeContainer>
  );
};

const HomeContainer = styled.div``;

const MainInfoContainer = styled.div`
  width: 760px;
  margin: 0 auto;
`;

const MainNav = styled.div`
  display: flex;
  gap: 32px;
  color: var(--gray-g-04, #b3b3b3);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.4px;
  list-style: none;
`;

const Li = styled.li`
  color: ${(props) => (props.$isActive ? '#1557D0' : '#B3B3B3')};
  border-bottom: ${(props) => (props.$isActive ? '4px solid #1557D0' : '')};
  padding-bottom: 2px;
`;
