import { baseInstance } from 'apis/utils/instance';

export const signInApi = {
  endpoint: {
    leaderSignIn: 'leadersignin',
    memberSignIn: 'membersignin',
  },

  headers: {
    'Content-Type': 'application/json',
    withCredentials: true,
    // Accept: 'application/json',
  },

  leaderSignIn: async (leaderPW) => {
    const response = await baseInstance.post(
      signInApi.endpoint.leaderSignIn,
      JSON.stringify({ leaderPW }),
      {
        headers: { ...signInApi.headers },
      }
    );
    return response;
  },

  memberSignIn: async (memberPW) => {
    const response = await baseInstance.post(
      signInApi.endpoint.memberSignIn,
      JSON.stringify({ memberPW }),
      {
        headers: { ...signInApi.headers },
      }
    );
    return response;
  },
};
