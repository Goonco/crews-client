import styled from 'styled-components';
import { G04, BK02 } from 'style/palette';

const DescriptiveQues = ({ questionData, idx }) => {
  return <DescribeArea placeholder="답변을 입력해주세요." />;
};

const DescribeArea = styled.textarea`
  border-radius: 10px;
  border: 1px solid ${G04};
  padding: 13px;

  width: 100%;
  height: 140px;

  font-size: 16px;
  font-family: 'Pretendard-Regular';
  font-weight: 400;
  letter-spacing: 125%;
  color: ${BK02};

  &::placeholder {
    color: ${G04};
  }
`;

export default DescriptiveQues;
