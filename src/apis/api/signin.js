import { baseInstance } from 'apis/utils/instance';

const SIGNIN_DEFAULT = 'signin';

export const SIGNIN_REQUEST = {
  signin: SIGNIN_DEFAULT + '',
};

export const signInApi = {
  endpoint: {
    getRecruitmentName: (recruitmentId) =>
      'recruitmentName/' +
      (recruitmentId ? `${recruitmentId}` : `:recruitmentId`),
  },

  headers: {
    'Content-Type': 'application/json',
    // Accept: 'application/json',
  },

  getRecruitmentName: async (recruitmentId) => {
    const response = await baseInstance.get(
      signInApi.endpoint.getRecruitmentName(recruitmentId),
      {
        headers: { ...signInApi.headers },
      }
    );
    return response;
  },
};
