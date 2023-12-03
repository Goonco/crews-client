import React from 'react';
import downArrow from './downArrow.svg';
import styled from 'styled-components';
import ApplyItem from './ApplyItem';
function ApplyListSection() {
  return (
    <ApplyListSectionWrapper>
      <ApplyListIndex>
        지원서 리스트 <ApplyCount>46</ApplyCount>
      </ApplyListIndex>
      <SortMenu>
        <SortBasis>최신순</SortBasis>
        <DownArrow src={downArrow} />{' '}
      </SortMenu>
      <ApplyList>
        <ApplyItem isActive={false} />
        <ApplyItem isActive={true} />
        <ApplyItem isActive={false} />
        <ApplyItem isActive={false} />
        <ApplyItem isActive={false} />
        <ApplyItem isActive={false} />
        <ApplyItem isActive={false} />
        <ApplyItem isActive={false} />
        <ApplyItem isActive={false} />
        <ApplyItem isActive={true} />
        <ApplyItem isActive={false} />
        <ApplyItem isActive={false} />
        <ApplyItem isActive={false} />
        <ApplyItem isActive={false} />
        <ApplyItem isActive={false} />
        <ApplyItem isActive={false} />
        <ApplyItem isActive={false} />
        <ApplyItem isActive={true} />
        <ApplyItem isActive={false} />
        <ApplyItem isActive={false} />
        <ApplyItem isActive={false} />
        <ApplyItem isActive={false} />
        <ApplyItem isActive={false} />
        <ApplyItem isActive={false} />
        <ApplyItem isActive={false} />
        <ApplyItem isActive={true} />
        <ApplyItem isActive={false} />
        <ApplyItem isActive={false} />
        <ApplyItem isActive={false} />
        <ApplyItem isActive={false} />
        <ApplyItem isActive={false} />
        <ApplyItem isActive={false} />
        <ApplyItem isActive={false} />
        <ApplyItem isActive={true} />
        <ApplyItem isActive={false} />
        <ApplyItem isActive={false} />
        <ApplyItem isActive={false} />
        <ApplyItem isActive={false} />
        <ApplyItem isActive={false} />
        <ApplyItem isActive={false} />
        <ApplyItem isActive={false} />
        <ApplyItem isActive={true} />
        <ApplyItem isActive={false} />
        <ApplyItem isActive={false} />
        <ApplyItem isActive={false} />
        <ApplyItem isActive={false} />
        <ApplyItem isActive={false} />
        <ApplyItem isActive={false} />
        <ApplyItem isActive={false} />
        <ApplyItem isActive={true} />
        <ApplyItem isActive={false} />
        <ApplyItem isActive={false} />
        <ApplyItem isActive={false} />
        <ApplyItem isActive={false} />
        <ApplyItem isActive={false} />
        <ApplyItem isActive={false} />
      </ApplyList>
    </ApplyListSectionWrapper>
  );
}

const ApplyListSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  // 이 부분 유동적으로 바껴야함
  width: 1200px;
`;
const ApplyListIndex = styled.div`
  color: var(--black-bk-02, #101010);
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.4px;
`;
const ApplyCount = styled.span`
  color: var(--blue-b-05-m, #3172ea);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.4px;
`;
const SortMenu = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-end;
`;
const SortBasis = styled.div`
  color: var(--gray-g-05, #999);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.36px;
`;
const DownArrow = styled.img`
  width: 28px;
  height: 28px;
`;

const ApplyList = styled.div`
  display: flex;
  margin-top: 16px;
  flex-wrap: wrap;
  gap: 42px;
`;
export default ApplyListSection;
