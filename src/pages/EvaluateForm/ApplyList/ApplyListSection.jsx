import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { G05, B05 } from 'style/palette';

import ApplyBlock from './ApplyBlock';
import { Text } from 'components/atoms';

function ApplyListSection() {
  return (
    <ApplyListSectionWrapper>
      <Text size="20px" weight={600} children="지원서 리스트 " />
      <Text size="20px" weight={700} color={B05} children=" 48" />
      <SortMenu>
        <SortOption>
          <Text size="18px" weight={400} children="점수순" />
        </SortOption>
        <FontAwesomeIcon icon={faAngleDown} />
        {/* <SortOption>학번순</SortOption>
        <SortOption>가나다순</SortOption> */}
      </SortMenu>
      <ApplyBlockList>
        <ApplyBlock />
        <ApplyBlock />
        <ApplyBlock />
        <ApplyBlock />
        <ApplyBlock />
        <ApplyBlock />
        <ApplyBlock />
        <ApplyBlock />
        <ApplyBlock />
        <ApplyBlock />
        <ApplyBlock />
        <ApplyBlock />
        <ApplyBlock />
        <ApplyBlock />
        <ApplyBlock />
        <ApplyBlock />
        <ApplyBlock />
        <ApplyBlock />
        <ApplyBlock />
        <ApplyBlock />
        <ApplyBlock />
        <ApplyBlock />
        <ApplyBlock />
        <ApplyBlock />
        <ApplyBlock />
        <ApplyBlock />
        <ApplyBlock />
        <ApplyBlock />
      </ApplyBlockList>
    </ApplyListSectionWrapper>
  );
}

const ApplyBlockList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const SortMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 5px;

  margin: 17px 0;
  color: ${G05};
`;

const SortOption = styled.li``;

const ApplyListSectionWrapper = styled.section`
  margin-bottom: 180px;
`;

export default ApplyListSection;
