import styled from 'styled-components';

import { Flex, Text } from 'components/atoms';
import { B05, BK01, BK02, G03, G04, G05, W01 } from 'style/palette';

const dummy = [
  {
    name: '김뭐뭐',
    comment: '3 / 나쁘지 않은듯',
  },
  {
    name: '송뭐뭐',
    comment: '4 / 좋은듯?',
  },
  {
    name: '이뭐뭐',
    comment: '2 / 난좀 별로...',
  },
  {
    name: '박뭐뭐',
    comment: '5 / 최고다 최고!!',
  },
];

const AssessSection = () => {
  return (
    <AssessContainer>
      <Flex justify="space-between">
        <Text color={BK02} size="22px" weight={700} children="평균 점수" />
        <Text color={B05} size="22px" weight={700} children="4.4 (상위 10%)" />
      </Flex>

      <Line />

      <CommentTable>
        {dummy.map((it, idx) => (
          <CommentRow>
            <CommentItem className="author">
              <Text size="16px" weight={400} color={G05} children={it.name} />
            </CommentItem>
            <CommentItem className="comment">
              <Text
                size="18px"
                weight={500}
                color={BK01}
                children={it.comment}
              />
            </CommentItem>
          </CommentRow>
        ))}
      </CommentTable>

      <Line />

      <Flex justify="begin" gap={10}>
        <Text size="18px" weight={700} color={BK01} children="내 점수" />
        <Text size="14px" weight={400} color={G05} children="최대 5점" />
      </Flex>
      <CommentInput height="60px" placeholder="숫자를 입력해주세요." />
      <Flex justify="begin" gap={10}>
        <Text
          size="18px"
          weight={700}
          color={BK01}
          children="나의 한 줄 평가"
        />
        <Text size="14px" weight={400} color={G05} children="글자 수 (0/200)" />
      </Flex>
      <CommentInput
        height="130px"
        placeholder="지원서에 대한 코멘트를 남겨주세요."
      />

      <ButtonContainer>
        <ReviseAssessButton>내 평가 수정하기</ReviseAssessButton>
        <FirstPassButton>1차 합격 시키기</FirstPassButton>
      </ButtonContainer>
    </AssessContainer>
  );
};

const AssessContainer = styled.section`
  padding: 20px;
  width: 360px;
  height: fit-content;
  border-radius: 10px;
  background-color: #f7f7f7;
`;

const Line = styled.span`
  display: block;
  margin: 20px 0;

  border-top: 1px solid ${G03};
`;

const CommentTable = styled.table`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const CommentRow = styled.tr`
  display: flex;
  align-items: center;
`;

const CommentItem = styled.td`
  &.author {
    width: 45px;
    margin-right: 10px;
  }
  &.comment {
  }
`;

const CommentInput = styled.textarea`
  margin: 16px 0;
  width: 100%;
  padding: 20px;
  border: none;
  border-radius: 10px;
  height: ${({ height }) => height};

  font-family: 'Pretendard-Regular';
  font-size: 16px;
  font-weight: 400;
  color: ${BK02};
  background-color: ${W01};

  &::placeholder {
    color: ${G04};
  }
`;

const ButtonContainer = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const FirstPassButton = styled.button`
  width: 100%;
  height: 50px;
  border-radius: 10px;
  background: var(--blue-b-05-m, #3172ea);
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 18px;
  font-weight: 600;
`;

const ReviseAssessButton = styled(FirstPassButton)`
  border-radius: 10px;
  background: var(--black-bk-01, #303030);
`;
export default AssessSection;
