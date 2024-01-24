import { useRecoilState, useRecoilValue } from 'recoil';
import {
  applicantListAtom,
  applicantListSelector,
  detailedApplicantAtom,
} from './evaluateFormAtom';

import { evaluateformApi } from 'apis/api/evaluateform';
import { useState } from 'react';

const useApplicantList = () => {
  const [applicantList, setApplicationList] = useRecoilState(applicantListAtom);
  const selectedApplicantList = useRecoilValue(applicantListSelector);
  const [detailedApplicant, setDetailedApplicant] = useRecoilState(
    detailedApplicantAtom
  );
  const [loading, setLoading] = useState(true);

  const fetchApplicantList = async (formId) => {
    try {
      setApplicationList(
        (await evaluateformApi.getApplicationList(formId)).data
      );
      setLoading(false);
    } catch (e) {
      console.log(`${e} : fetchApplicantList API Error`);
    }
  };

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
    fetchApplicantList,
    loading,
    selectApplicant,
    detailedApplicant,
    detailApplicant,
  };
};

export default useApplicantList;
