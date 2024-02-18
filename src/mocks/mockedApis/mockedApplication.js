import { http, HttpResponse } from 'msw';
import { applicationApi } from 'apis/api';
import { base } from './mockedSignIn';
import tokenUtils from 'mocks/tokenUtils';
import { DUMMY_SECTION_DATA, DUMMY_QUESTION_DATA } from 'mocks/dummyDatas';

const checkAuthRequest = async (request) => {
  if (!request.headers?.get('Authorization'))
    return { status: 401, statusText: 'No Access Token' };

  const token = request.headers.get('Authorization').split(' ')[1];
  return await tokenUtils.verifyToken(token);
};

export const mockedApplicationApis = [
  // getSectionData
  http.get(
    base(applicationApi.endpoint.getSectionData()),
    async ({ params, request }) => {
      const { status, statusText } = { ...(await checkAuthRequest(request)) };
      if (status !== 200) return new HttpResponse(null, { status, statusText });

      const { applicationId } = { ...params };
      return HttpResponse.json(DUMMY_SECTION_DATA(applicationId));
    }
  ),

  // getQuestionData
  http.get(
    base(applicationApi.endpoint.getQuestionData()),
    async ({ params, request }) => {
      const { status, statusText } = { ...(await checkAuthRequest(request)) };
      if (status !== 200) return new HttpResponse(null, { status, statusText });

      const { applicationId } = { ...params };
      console.log(DUMMY_QUESTION_DATA(applicationId).length);
      return HttpResponse.json(DUMMY_QUESTION_DATA(applicationId));
    }
  ),
];
