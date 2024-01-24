import { baseInstance, authInstance } from 'apis/utils/instance';

const EVALUATE_FORM_DEFAULT = 'evaluateform';

export const EVALUATE_FORM_REQUEST = {
  recruitmentName: (formId) =>
    `${EVALUATE_FORM_DEFAULT}/recruitmentName` +
    (formId ? `/${formId}` : '/:formId'),
  applicantList: (formId) =>
    `${EVALUATE_FORM_DEFAULT}/applicationList` +
    (formId ? `/${formId}` : '/:formId'),
};

export const evaluateformApi = {
  getRecruitmentName: async (formId) => {
    return await baseInstance.get(
      EVALUATE_FORM_REQUEST.recruitmentName(formId)
    );
  },
  getApplicationList: async (formId) => {
    return await baseInstance.get(EVALUATE_FORM_REQUEST.applicantList(formId));
  },
};
