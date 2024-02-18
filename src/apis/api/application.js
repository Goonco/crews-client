import { baseInstance } from 'apis/utils/instance';

export const applicationApi = {
  endpoint: {
    getSectionData: (applicationId) =>
      `sectionData/${applicationId || ':applicationId'}`,
    getQuestionData: (applicationId) =>
      `questionData/${applicationId || ':applicationId'}`,
  },

  headers: {
    'Content-Type': 'application/json',
    withCredentials: true,
    // Accept: 'application/json',
  },

  getSectionData: async (authInstance, applicationId) => {
    const response = await authInstance.get(
      applicationApi.endpoint.getSectionData(applicationId),
      {
        headers: { ...applicationApi.headers },
      }
    );
    return response;
  },

  getQuestionData: async (authInstance, applicationId) => {
    const response = await authInstance.get(
      applicationApi.endpoint.getQuestionData(applicationId),
      {
        headers: { ...applicationApi.headers },
      }
    );
    return response;
  },
};
