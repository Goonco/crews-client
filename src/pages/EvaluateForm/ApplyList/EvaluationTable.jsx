import styled from 'styled-components';

import { BK02, G05, B05 } from 'style/palette';

import { Text } from 'components/atoms';

const Dummy = [
  { name: '김뭐뭐', eval: 3.5 },
  { name: '송뭐뭐', eval: 5 },
  { name: '이뭐뭐', eval: 4.5 },
  { name: '박뭐뭐', eval: 5 },
];

const EvaluationTable = () => {
  return (
    <TableContainer>
      <thead>
        <TableRow className="FirstRow">
          <th className="left">
            <Text color={BK02} size="16px" weight={700} children="평균점수" />
          </th>
          <th className="right">
            <Text
              color={B05}
              size="20px"
              weight={700}
              children="4.4 (상위10%)"
            />
          </th>
        </TableRow>
      </thead>

      <TableBody>
        {Dummy.map((it, idx) => (
          <TableRow key={idx}>
            <td className="left">
              <Text color={G05} size="14px" weight={500} children={it.name} />
            </td>
            <td className="right">
              <Text color={G05} size="20px" weight={600} children={it.eval} />
            </td>
          </TableRow>
        ))}
      </TableBody>
    </TableContainer>
  );
};

const TableContainer = styled.table`
  width: 100%;

  & th.left,
  td.left {
    text-align: left;
  }

  & th.right,
  td.right {
    text-align: right;
  }
`;

const TableBody = styled.tbody`
  width: 100%;
`;

const TableRow = styled.tr`
  width: 100%;
  border-bottom: 20px solid transparent;

  &.FirstRow {
    border-bottom: 25px solid transparent;
  }
`;

export default EvaluationTable;
