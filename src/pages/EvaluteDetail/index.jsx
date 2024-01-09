import { Flex } from 'components/atoms';
import ApplicationSection from './ApplicationSection';
import AssessSection from './AssessSection';
import EvaluateDetailHeader from './EvaluateDetailHeader';
import BottomBar from 'pages/EvaluateForm/BottomBar';
import React from 'react';
import styled from 'styled-components';
export const EvaluateDetail = () => {
  return (
    <>
      <EvaluateDetailContainer>
        <EvaluateDetailHeader />
        <ApplicationSection />
        <AssessSection />
      </EvaluateDetailContainer>
      <BottomBar />
    </>
  );
};

const EvaluateDetailContainer = styled.div`
  width: 1200px;
  margin: 0 auto;
  position: relative;
`;
