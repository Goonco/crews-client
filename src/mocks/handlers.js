import {
  mockedSignInApis,
  mockedApplicationApis,
  mockedRefreshApis,
} from './mockedApis';

const handlers = [
  ...mockedSignInApis,
  ...mockedApplicationApis,
  ...mockedRefreshApis,
  // *. Refresh
  // http.get('/refresh', async ({ cookies }) => {
  //   const { refreshTok } = { ...cookies };
  //   const { status, msg, payload } = { ...(await verifyToken(refreshTok)) };
  //   if (status === 200) {
  //     const accessToken = await createAccess({ id: payload.id });
  //     return HttpResponse.json({ accessToken });
  //   } else return new HttpResponse(msg, { status });
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

export default handlers;
