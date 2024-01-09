import React from 'react';
import styled from 'styled-components';
import backArrowIcon from './backArrow.svg';
import beforeArrowIcon from './beforeArrow.svg';
import nextArrowIcon from './nextArrow.svg';

function EvaluateDetailHeader() {
  return (
    <EvaluateDetailHeaderWrapper>
      <EvaluateH1>20201148 정인영 님의 지원서</EvaluateH1>
      <BackArrowIcon src={backArrowIcon} />
      <EvaluatePagenation>
        <BeforeButton src={beforeArrowIcon} />
        <IndexState>01 / 48</IndexState>
        <AfterButton src={nextArrowIcon} />
      </EvaluatePagenation>
    </EvaluateDetailHeaderWrapper>
  );
}

const EvaluateDetailHeaderWrapper = styled.div`
  position: sticky;
  top: 0px;
  display: flex;
  align-items: center;
  background-color: white;
  height: 113px;
  width: 100%;

  z-index: 3;
`;

const EvaluatePagenation = styled.div`
  margin-left: auto;
  display: flex;
  gap: 8px;
  align-items: center;
`;

const BeforeButton = styled.img`
  cursor: pointer;
`;
const AfterButton = styled.img`
  cursor: pointer;
`;

const BackArrowIcon = styled.img`
  cursor: pointer;
  position: absolute;
  top: 43px;
  left: -46px;
`;
const IndexState = styled.div`
  margin-top: 4px;
  color: var(--black-bk-02, #101010);
  font-size: 28px;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.56px;
`;

const EvaluateH1 = styled.div`
  color: var(--black-bk-02, #101010);
  font-family: Pretendard;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.56px;
`;

export default EvaluateDetailHeader;
