import { useRecoilState, useRecoilValue } from 'recoil';
import {
  applicantListAtom,
  applicantListSelector,
  detailedApplicantAtom,
} from './evaluateFormAtom';

import { useEvaluateformApi } from 'apis/api/evaluateform';
import { useState } from 'react';

export const useMyApplicantList = () => {
  return useRecoilState(applicantListAtom);
};

const useApplicantList = () => {
  const [applicantList, setApplicationList] = useRecoilState(applicantListAtom);
  const selectedApplicantList = useRecoilValue(applicantListSelector);
  const [detailedApplicant, setDetailedApplicant] = useRecoilState(
    detailedApplicantAtom
  );
  const [loading, setLoading] = useState(true);

  const { getApplicationList } = useEvaluateformApi();

  const fetchApplicantList = async (formId) => {
    try {
      setApplicationList((await getApplicationList(formId)).data);
      setLoading(false);
    } catch (e) {
      console.log(`[Error catched by fetchApplicantList]\n\n${e}`);
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
