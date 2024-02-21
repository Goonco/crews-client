import styled from 'styled-components';

import { G05, B01, BK02, B05 } from 'style/palette';
import useApplicantList from './hooks/useApplicantList';

import { Text } from 'components/atoms';

function EvaluateSummarySection({ recruitmentName }) {
  const { applicantList, selectedApplicantList } = useApplicantList();

  const competetionRate = !selectedApplicantList.length
    ? '-'
    : Math.round((applicantList.length / selectedApplicantList.length) * 10) /
      10;

  return (
    <EvalutateSummarySectionWrapper>
      <EvaluateHeader
        align="left"
        size="28px"
        weight={700}
        children="지원서 평가하기"
      />
      <Text
        color={G05}
        size="20px"
        weight={600}
        children={`‘${recruitmentName}’ `}
      />
      <Text
        color={G05}
        size="20px"
        weight={400}
        children=" 에 제출된 지원서 목록입니다."
      />

      <InformationBoard>
        <MainInform>
          <SmallText color={BK02} children="지원자 " />
          <BigText color={BK02} children={applicantList.length} />
          <SmallText color={BK02} children=" 명 중 " />
          <BigText color={B05} children={selectedApplicantList.length} />
          <SmallText color={B05} children=" 명이 합격했어요 🎉" />
        </MainInform>
        <Text
          size="20px"
          color={G05}
          weight={400}
          children={`현재 경쟁률은 ${competetionRate} : 1 입니다`}
        />
      </InformationBoard>
    </EvalutateSummarySectionWrapper>
  );
}

export default EvaluateSummarySection;

const EvalutateSummarySectionWrapper = styled.section`
  width: 100%;
  text-align: left;
`;

const EvaluateHeader = styled(Text)`
  display: block;
  margin: 40px 0 10px;
`;

const InformationBoard = styled.div`
  width: fit-content;
  margin: 40px auto;
  padding: 25px 145px;
  border-radius: 10px;
  background: ${B01};

  text-align: center;
`;

const MainInform = styled.div`
  margin-bottom: 10px;
`;

const SmallText = ({ color, children }) => {
  return <Text color={color} size="30px" weight={600} children={children} />;
};

const BigText = ({ color, children }) => {
  return <Text color={color} size="40px" weight={700} children={children} />;
};
