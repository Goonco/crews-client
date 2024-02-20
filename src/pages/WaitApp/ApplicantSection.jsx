import { useState } from 'react';
import styled from 'styled-components';

import { BK02, B01, B05 } from 'style/palette';

import { Text } from 'components/atoms';

const ApplicantSection = () => {
  const [appliedNum, setAppliedNum] = useState(12);

  return (
    <ApplicantContainer>
      <SmallText color={BK02} children="현재까지" />
      <BigText color={B05} children={appliedNum} />
      <SmallText color={B05} children="명이 지원했어요 😏" />
    </ApplicantContainer>
  );
};

const SmallText = ({ color, children }) => {
  return <Text color={color} size="30px" weight={600} children={children} />;
};

const BigText = ({ color, children }) => {
  return <Text color={color} size="40px" weight={700} children={children} />;
};

const ApplicantContainer = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;

  width: 750px;
  padding: 25px 145px;
  background-color: ${B01};
  border-radius: 10px;
`;

export default ApplicantSection;
