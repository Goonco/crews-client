import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import selectRadio from './select.svg';
import { useNavigate } from 'react-router-dom';
function ApplyItem({}) {
  const [isSelected, setIsSelcted] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const handleClickItem = (event) => {
    event.stopPropagation();
    if (event.target.tagName == 'INPUT') {
      setIsSelcted(!isSelected);
      return;
    }
    setIsActive(!isActive);
  };
  const navigate = useNavigate();
  const onClick = () => {
    navigate('/evaluatedetail');
  };
  return (
    <ApplyItemContainer>
      {isActive ? (
        <ActiveApplyItem $isSelected={isSelected}>
          <ApplicantDivideSection onClick={handleClickItem}>
            <ApplicantInform>
              <div className="student-id">20201148</div>
              <div className="name">정인영</div>
              <div className="class">아트엔테크놀리지학과</div>
            </ApplicantInform>
            <IsSelectedCheckBox
              checked={isSelected}
              onChange={handleClickItem}
            />
          </ApplicantDivideSection>

          <AverageScoreSection>
            {/* 평가한 스태프들의 평균점수 */}
            <label>평균점수</label>
            <score>4.4 (상위 10%) </score>
          </AverageScoreSection>
          {/* 평가한 스태프 리스트 */}
          <StaffEvaluationItem>
            <name>윤태호</name>
            <score>4.4</score>
          </StaffEvaluationItem>
          <StaffEvaluationItem>
            <name>한우석</name>
            <score>4.9</score>
          </StaffEvaluationItem>
          <StaffEvaluationItem>
            <name>정지우</name>
            <score>4.0</score>
          </StaffEvaluationItem>
          <StaffEvaluationItem>
            <name>진민석</name>
            <score>4.1</score>
          </StaffEvaluationItem>
          <StaffEvaluationItem>
            <name>박채린</name>
            <score>4.2</score>
          </StaffEvaluationItem>

          <CheckApplicationButton onClick={onClick}>
            지원서 확인하기
          </CheckApplicationButton>
        </ActiveApplyItem>
      ) : (
        <UnActivateApplyItem onClick={handleClickItem} $isSelected={isSelected}>
          <ApplicantInform>
            <div className="student-id">20201148</div>
            <div className="name">정인영</div>
            <div className="class">아트엔테크놀리지학과</div>
          </ApplicantInform>
          <IsSelectedCheckBox checked={isSelected} onChange={handleClickItem} />
        </UnActivateApplyItem>
      )}
    </ApplyItemContainer>
  );
}

const ApplyItemContainer = styled.div`
  width: 258px;
`;

const ActiveApplyItem = styled.div`
  width: 258px;
  height: 427px;
  border-radius: 10px;
  border: 1px solid var(--gray-g-02, #e6e6e6);
  background: ${(props) => (props.$isSelected ? '#E8EFFD' : '#fff')};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UnActivateApplyItem = styled.div`
  width: 258px;
  height: 121px;
  border-radius: 10px;
  border: 1px solid var(--gray-g-02, #e6e6e6);
  background: ${(props) => (props.$isSelected ? '#E8EFFD' : '#fff')};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 75px;
`;

const ApplicantDivideSection = styled.div`
  height: 121px;
  display: flex;
  align-items: center;
  gap: 75px;
  border-bottom: 2px solid #ccc;
`;

const ApplicantInform = styled.div`
  .student-id {
    color: var(--black-bk-02, #101010);
    font-size: 20px;
    font-weight: 700;
    letter-spacing: -0.4px;
  }
  .name {
    color: var(--black-bk-02, #101010);
    font-size: 20px;
    font-weight: 700;
  }
  .class {
    color: var(--gray-g-05, #999);
    font-size: 14px;
    font-weight: 400;
  }
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const AverageScoreSection = styled.div`
  display: flex;
  width: 80%;
  height: 68px;
  align-items: center;
  label {
    color: var(--black-bk-01, #303030);
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
  }

  score {
    margin-left: auto;
    color: var(--blue-b-05-m, #3172ea);
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.4px;
  }
`;
const StaffEvaluationItem = styled.div`
  display: flex;
  height: 30px;
  align-items: center;
  width: 80%;
  name {
    color: var(--gray-g-05, #999);
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.28px;
  }
  score {
    margin-left: auto;
    color: var(--gray-g-05, #999);
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
  }
`;

const CheckApplicationButton = styled.div`
  width: 218px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: var(--blue-b-05-m, #3172ea);
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  margin-top: 24px;
`;
const IsSelectedCheckBox = styled.input.attrs(() => ({ type: 'checkbox' }))`
  width: 24px;
  height: 24px;
  appearance: none;
  border-radius: 50%;
  border: 2px solid gray;

  &:checked {
    background: no-repeat center/100% url('${selectRadio}');
    border: none;
  }

  &:checked {
    poinbter-events: none;
  }
`;

export default ApplyItem;
