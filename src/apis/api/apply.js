// import { baseInstance } from 'apis/utils/instance';

// const handleAuth = async (authInstance, url) => {
//   const response = await authInstance.get(url, {
//     headers: { ...applyApi.headers },
//   });
//   return response;
// };

// export const applyApi = {
//   endpoint: {
//     getApplyingSection: (applyId) => `applySection/${applyId || ':applyId'}`,
//     getApplyingQuestion: (applyId) => `applyQuestion/${applyId || ':applyId'}`,
//     // getApplicationName: (applyId) =>
//     //   `applicationName/${applyId || ':applyId'}`,
//     // getApplicants: (applyId) =>
//     //   `applicants/${applyId || ':applyId'}`,
//   },

//   headers: {
//     'Content-Type': 'application/json',
//     withCredentials: true,
//     // Accept: 'application/json',
//   },

//   getSectionData: async (authInstance, applyId) => {
//     return await handleAuth(
//       authInstance,
//       applyApi.endpoint.getSectionData(applyId)
//     );
//   },

//   getQuestionData: async (authInstance, applyId) => {
//     return await handleAuth(
//       authInstance,
//       applyApi.endpoint.getQuestionData(applyId)
//     );
//   },
// };
