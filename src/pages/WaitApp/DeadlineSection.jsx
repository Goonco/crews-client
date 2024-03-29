import { useState } from 'react';
import styled from 'styled-components';

import { BK02, B01, B05 } from 'style/palette';
import { getTime, timeformat } from './util';

import { Text } from 'components/atoms';

const DeadlineSection = () => {
  const [deadline, setDeadline] = useState(new Date('2024-04-01T20:00:00'));
  const [today, setToday] = useState(new Date());

  const timeDiff = new Date(deadline - today);
  const day = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

  // setInterval(() => {
  //   setToday(new Date());
  // }, 1000);

  return (
    <DeadlineContainer>
      <TimeBox>
        <SmallText color={BK02} children={`D-${day}`} />
        <FixTime>
          <BigText color={B05} children={timeformat(timeDiff)} />
        </FixTime>
      </TimeBox>
      <Text size="20px" color="#999">
        {`마감일자 : ${deadline.getFullYear()}-${getTime(deadline)} ${deadline
          .toTimeString()
          .substring(0, 8)}`}
      </Text>
    </DeadlineContainer>
  );
};

const SmallText = ({ color, children }) => {
  return <Text color={color} size="30px" weight={600} children={children} />;
};

const BigText = ({ color, children }) => {
  return <Text color={color} size="40px" weight={700} children={children} />;
};

const DeadlineContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  width: 750px;
  padding: 25px 145px;
  background-color: ${B01};
  border-radius: 10px;
`;

const TimeBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const FixTime = styled.div`
  width: 200px;
  text-align: center;
`;

export default DeadlineSection;
