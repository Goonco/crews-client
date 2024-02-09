import { useState } from 'react';
import styled from 'styled-components';
import useApplicantList from '../hooks/useApplicantList';
import { useNavigate } from 'react-router-dom';

import { BK02, G05, G02, G03, B02, B04 } from 'style/palette';

import { Flex, Text, Button } from 'components/atoms';
import EvaluationTable from './EvaluationTable';

const ApplyBlock = ({ applicantInfo }) => {
  const {
    studentId,
    name,
    major,
    selected,
    averageScore,
    percentage,
    evaluation,
  } = { ...applicantInfo };

  const { selectApplicant, detailedApplicant, detailApplicant } =
    useApplicantList();

  const handleSelect = (e) => {
    e.stopPropagation();
    selectApplicant(studentId);
  };

  const handleDetail = () => {
    detailApplicant(studentId);
  };

  const isDetailed = detailedApplicant === studentId;

  return (
    <ApplyBlockContainer selectedBlock={selected} onClick={handleDetail}>
      <UserInfoSection>
        <Flex direction="column" gap={2} align="start">
          <Text size="20px" weight={700} color={BK02} children={studentId} />
          <Text size="20px" weight={700} color={BK02} children={name} />
          <Text
            size="14px"
            weight={400}
            color={G05}
            lineHeight="160%"
            children={major}
          />
        </Flex>
        <Flex>
          <CheckApplyBlockButton
            onClick={handleSelect}
            selectedBlock={selected}
          />
        </Flex>
      </UserInfoSection>
      {isDetailed ? (
        <>
          <HR />
          <EvaluationTable
            averageScore={averageScore}
            percentage={percentage}
            evaluation={evaluation}
          />
          <Button
            width="100%"
            height="50px"
            size="18px"
            children="지원서 확인하기"
          />
        </>
      ) : null}
    </ApplyBlockContainer>
  );
};

const ApplyBlockContainer = styled.div`
  border: 1px solid ${G02};
  border-radius: 10px;
  width: 260px;
  height: fit-content;
  padding: 20px;

  background-color: ${({ selectedBlock }) => (selectedBlock ? B02 : 'inherit')};
  cursor: pointer;
`;

const HR = styled.span`
  display: block;

  margin: 20px 0;
  height: 0;
  border-bottom: 1px solid ${G03};
`;

const CheckApplyBlockButton = styled.button`
  border: 2px solid ${G03};
  border-radius: 999px;
  width: 25px;
  height: 25px;

  ${({ selectedBlock }) =>
    selectedBlock
      ? `&::after {
    content: '';
    display: block;
    margin: 0 auto;
    width: 13px;
    height: 13px;
    background-color: ${B04};
    border-radius: 999px;
  }`
      : ''}
`;

const UserInfoSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export default ApplyBlock;
