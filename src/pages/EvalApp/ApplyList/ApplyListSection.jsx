import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRecoilValue } from 'recoil';

import { applicantListAtom } from '../hooks/evaluateFormAtom';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { G05, B05 } from 'style/palette';

import ApplyBlock from './ApplyBlock';
import { Text } from 'components/atoms';

const polishApplicantList = (applicantList) => {
  let polishedApplicantList = [];
  for (let i = 0; ; i += 4) {
    let left = applicantList.length - i + 1;
    if (left > 4) polishedApplicantList.push(applicantList.slice(i, i + 4));
    else {
      polishedApplicantList.push(applicantList.slice(i));
      break;
    }
  }
  return polishedApplicantList;
};

const ApplyListSection = () => {
  const applicantList = useRecoilValue(applicantListAtom);
  const polishedList = polishApplicantList(applicantList);

  return (
    <ApplyListSectionWrapper>
      <Text size="20px" weight={600} children="지원서 리스트 " />
      <Text
        size="20px"
        weight={700}
        color={B05}
        children={` ${applicantList.length}`}
      />
      {/* <SortMenu>
        <SortOption>
          <Text size="18px" weight={400} children="점수순" />
        </SortOption>
        <FontAwesomeIcon icon={faAngleDown} />
        {/* <SortOption>학번순</SortOption>
        <SortOption>가나다순</SortOption>
      </SortMenu> */}
      <ApplyBlockList>
        {polishedList.map((innerList) => (
          <Row key={crypto.randomUUID()}>
            {innerList.map((it) => {
              return <ApplyBlock key={it.studentId} applicantInfo={it} />;
            })}
          </Row>
        ))}
      </ApplyBlockList>
    </ApplyListSectionWrapper>
  );
};

const ApplyListSectionWrapper = styled.section`
  margin-bottom: 50px;
`;

const ApplyBlockList = styled.div`
  display: flex;
  margin-top: 40px;
  flex-direction: column;
  gap: 25px;
`;

const Row = styled.div`
  display: flex;
  gap: 40px;
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

export default ApplyListSection;
