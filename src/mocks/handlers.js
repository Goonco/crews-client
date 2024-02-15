import { http, HttpResponse } from 'msw';
import tokenUtils from './tokenUtils';

import {
  SIGNIN_REQUEST,
  WRITE_FORM_REQUEST,
  EVALUATE_FORM_REQUEST,
  signInApi,
} from 'apis/api';

import { DUMMY_SECTION_DATA, DUMMY_QUESTION_DATA } from './formDummyData';
import {
  DUMMY_RECRUITMENT_NAME,
  DUMMY_APPLICANT_LIST,
} from './evaluateDummyData';

const { createAccess, createRefresh, verifyToken } = {
  ...tokenUtils,
};

const base = (url) => process.env.REACT_APP_BASE_URL + url;

export const handlers = [
  // SignInMember
  http.get(
    base(signInApi.endpoint.getRecruitmentName()),
    async ({ params }) => {
      switch (params?.recruitmentId) {
        case 'ABCD123':
          return HttpResponse.json({
            recruitmentName: 'Crews 1기 기획진 모집',
          });
        case 'QWER':
          return HttpResponse.json({
            recruitmentName: '멋쟁이사자처럼 15기 FE 모집',
          });
        default:
          return new HttpResponse('No such recruitment id', { status: 404 });
      }
    }
  ),

  // *. Refresh
  // http.get('/refresh', async ({ cookies }) => {
  //   const { refreshTok } = { ...cookies };
  //   const { status, msg, payload } = { ...(await verifyToken(refreshTok)) };

  //   if (status === 200) {
  //     const accessToken = await createAccess({ id: payload.id });
  //     return HttpResponse.json({ accessToken });
  //   } else return new HttpResponse(msg, { status });
  // }),

  // // 1. Sign In Page
  // http.post(SIGNIN_REQUEST.signin, async ({ request }) => {
  //   const { id, pw } = { ...(await request.json()) };
  //   const accessTok = await createAccess({ id });
  //   const refreshTok = await createRefresh({ id });

  //   if (id === 'admin' && pw === '1234') {
  //     return new HttpResponse(
  //       JSON.stringify({ accessToken: accessTok, roles: ['leader'] }),
  //       {
  //         status: 200,
  //         headers: {
  //           'Set-Cookie': `refreshTok=${refreshTok}; Max-Age=3600;`,
  //         },
  //       }
  //     );
  //     // } else if (id === 'user' && pw === '1234') {
  //     //   return new HttpResponse(
  //     //     JSON.stringify({ accessToken: accessTok, roles: ['member'] }),
  //     //     {
  //     //       status: 200,
  //     //       headers: { 'Set-Cookie': refreshTok },
  //     //     }
  //     //   );
  //   } else return new HttpResponse(null, { status: 404 });
  // }),

  // // 8. 지원서 작성 페이지
  // http.get(WRITE_FORM_REQUEST.sectionData, () => {
  //   return Response.json(DUMMY_SECTION_DATA);
  // }),

  // http.get(WRITE_FORM_REQUEST.questionData, () => {
  //   return Response.json(DUMMY_QUESTION_DATA);
  // }),

  // // 9. 지원서 평가 페이지
  // http.get(EVALUATE_FORM_REQUEST.recruitmentName(), async ({ params }) => {
  //   const dummyData = DUMMY_RECRUITMENT_NAME(params.formId);

  //   if (dummyData) return HttpResponse.json(dummyData);
  //   else throw new Error();
  // }),

  // http.get(
  //   EVALUATE_FORM_REQUEST.applicantList(),
  //   async ({ params, request }) => {
  //     try {
  //       const dummyData = DUMMY_APPLICANT_LIST(params.formId);

  //       if (!dummyData) return HttpResponse('Not Found', { status: 404 });
  //       if (!request.headers?.get('Authorization'))
  //         return new HttpResponse('No Access Token', { status: 401 });

  //       const token = request.headers?.get('Authorization').split(' ')[1];
  //       const { status, msg } = { ...(await verifyToken(token)) };

  //       if (status === 200) return HttpResponse.json(dummyData);
  //       else return new HttpResponse(msg, { status });
  //     } catch (e) {
  //       console.log(e, '****************************');
  //     }
  //   }
  // ),

  // 9*. 지원서 평가 디테일 페이지

  // Registeration Test
  // http.post('/testregister', async ({ request }) => {
  //   const { id, pwd } = { ...(await request.json()) };

  //   if (id === 's07019' && pwd === '!Dd12345') {
  //     const jwtTok = await createJwt();
  //     return HttpResponse.json({ access: jwtTok });
  //   } else return new HttpResponse(null, { status: 409 });
  // }),

  // Catch All
  // http.get('/*', () => new HttpResponse(null, { status: 200 })),
  // http.post('/*', () => new HttpResponse(null, { status: 200 })),
];
