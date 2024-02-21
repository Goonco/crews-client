import { http, HttpResponse } from 'msw';
import { applicationApi } from 'apis/api';
import { base } from './mockedSignIn';
import tokenUtils from 'mocks/tokenUtils';
import {
  DUMMY_APPLICATION_NAME,
  DUMMY_SECTION_DATA,
  DUMMY_QUESTION_DATA,
  DUMMY_APPLICANT_LIST,
} from 'mocks/dummyDatas';

const checkAuthRequest = async (request) => {
  if (!request.headers?.get('Authorization'))
    return { status: 401, statusText: 'No Access Token' };

  const token = request.headers.get('Authorization').split(' ')[1];
  return await tokenUtils.verifyToken(token);
};

export const mockedApplicationApis = [
  // getApplicationName
  http.get(
    base(applicationApi.endpoint.getApplicationName()),
    async ({ params }) => {
      const { applicationId } = { ...params };

      const applicationName = DUMMY_APPLICATION_NAME(applicationId);
      if (applicationName) return HttpResponse.json({ applicationName });
      else
        return new HttpResponse(null, {
          status: 404,
          statusText: 'No corresponding application id',
        });
    }
  ),

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
      return HttpResponse.json(DUMMY_QUESTION_DATA(applicationId));
    }
  ),

  // getApplicants
  http.get(
    base(applicationApi.endpoint.getApplicants()),
    async ({ params, request }) => {
      const { status, statusText } = { ...(await checkAuthRequest(request)) };
      if (status !== 200) return new HttpResponse(null, { status, statusText });

      const { applicationId } = { ...params };
      const applicants = DUMMY_APPLICANT_LIST(applicationId);

      if (applicants) return HttpResponse.json(applicants);
      else
        return new HttpResponse(null, {
          status: 404,
          statusText: 'No corresponding application id',
        });
    }
  ),
];
