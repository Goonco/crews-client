import { baseInstance } from 'apis/utils/instance';

const handleAuth = async (authInstance, url) => {
  const response = await authInstance.get(url, {
    headers: { ...applicationApi.headers },
  });
  return response;
};

export const applicationApi = {
  endpoint: {
    getApplicationName: (applicationId) =>
      `applicationName/${applicationId || ':applicationId'}`,
    getApplicants: (applicationId) =>
      `applicants/${applicationId || ':applicationId'}`,
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

  getApplicationName: async (applicationId) => {
    const response = await baseInstance.get(
      applicationApi.endpoint.getApplicationName(applicationId),
      {
        headers: { ...applicationApi.headers },
      }
    );
    return response;
  },

  getSectionData: async (authInstance, applicationId) => {
    return await handleAuth(
      authInstance,
      applicationApi.endpoint.getSectionData(applicationId)
    );
  },

  getQuestionData: async (authInstance, applicationId) => {
    return await handleAuth(
      authInstance,
      applicationApi.endpoint.getQuestionData(applicationId)
    );
  },

  getApplicants: async (authInstance, applicationId) => {
    return await handleAuth(
      authInstance,
      applicationApi.endpoint.getApplicants(applicationId)
    );
  },
};
