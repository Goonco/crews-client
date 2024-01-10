import styled from 'styled-components';

import { G05, B01, BK02, B05 } from 'style/palette';

import { Text } from 'components/atoms';

function EvaluateSummarySection() {
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
        children="‘멋쟁이 사자처럼 서강대에서 19기 아기사자를 모집합니다!’ "
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
          <BigText color={BK02} children="48" />
          <SmallText color={BK02} children=" 명 중 " />{' '}
          <BigText color={B05} children="12" />
          <SmallText color={B05} children=" 명이 합격했어요 🎉" />
        </MainInform>
        <Text
          size="20px"
          color={G05}
          weight={400}
          children="경쟁률 4.0 (최신 업데이트 13 : 07 : 23)"
        />
      </InformationBoard>
    </EvalutateSummarySectionWrapper>
  );
}

export default EvaluateSummarySection;

const EvalutateSummarySectionWrapper = styled.section`
  padding: 40px 0;
  text-align: left;
`;

const EvaluateHeader = styled(Text)`
  display: block;
  margin-bottom: 10px;
`;

const InformationBoard = styled.div`
  width: fit-content;
  margin: 40px auto 0;
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
