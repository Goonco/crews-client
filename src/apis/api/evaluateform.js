import { baseInstance } from 'apis/utils/instance';

import useAuthInstance from 'apis/utils/useAuthInstance';
import useAuth from 'apis/context/useAuth';

const EVALUATE_FORM_DEFAULT = 'evaluateform';

export const EVALUATE_FORM_REQUEST = {
  recruitmentName: (formId) =>
    `${EVALUATE_FORM_DEFAULT}/recruitmentName` +
    (formId ? `/${formId}` : '/:formId'),
  applicantList: (formId) =>
    `${EVALUATE_FORM_DEFAULT}/applicationList` +
    (formId ? `/${formId}` : '/:formId'),
};

export const useEvaluateformApi = () => {
  const authInstance = useAuthInstance();
  const { auth } = useAuth();

  const getRecruitmentName = async (formId) => {
    return await baseInstance.get(
      EVALUATE_FORM_REQUEST.recruitmentName(formId)
    );
  };

  const getApplicationList = async (formId) => {
    try {
      return await authInstance.get(
        EVALUATE_FORM_REQUEST.applicantList(formId)
      );
    } catch (e) {
      console.log(`[Error catched by getApplicantList]\n\n${e}`);
    }
    // return await baseInstance.get(EVALUATE_FORM_REQUEST.applicantList(formId), {
    //   headers: {
    //     Authorization: `Bearer ${auth.accessToken}`,

    //   },
    // });
  };

  return { getRecruitmentName, getApplicationList };
};
