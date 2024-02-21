import { useRecoilState, useRecoilValue } from 'recoil';
import {
  applicantListAtom,
  applicantListSelector,
  detailedApplicantAtom,
} from './evaluateFormAtom';

export const useMyApplicantList = () => {
  return useRecoilState(applicantListAtom);
};

const useApplicantList = () => {
  const [applicantList, setApplicationList] = useRecoilState(applicantListAtom);
  const selectedApplicantList = useRecoilValue(applicantListSelector);
  const [detailedApplicant, setDetailedApplicant] = useRecoilState(
    detailedApplicantAtom
  );

  const selectApplicant = (studentId) => {
    const newApplicantList = applicantList.map((applicant) => {
      if (applicant.studentId === studentId) {
        return {
          ...applicant,
          selected: !applicant.selected,
        };
      } else return applicant;
    });
    setApplicationList(newApplicantList);
  };

  const detailApplicant = (studentId) => {
    if (detailedApplicant === studentId) setDetailedApplicant(-1);
    else setDetailedApplicant(studentId);
  };

  return {
    applicantList,
    selectedApplicantList,
    selectApplicant,
    detailedApplicant,
    detailApplicant,
  };
};

export default useApplicantList;
