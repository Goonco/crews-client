import { http, HttpResponse } from 'msw';
import { generateSecret, SignJWT } from 'jose';

import {
  SIGNIN_REQUEST,
  WRITE_FORM_REQUEST,
  EVALUATE_FORM_REQUEST,
} from 'apis/api';

import { DUMMY_SECTION_DATA, DUMMY_QUESTION_DATA } from './formDummyData';
import {
  DUMMY_RECRUITMENT_NAME,
  DUMMY_APPLICANT_LIST,
} from './evaluateDummyData';

export const handlers = [
  // 1. Sign In Page
  http.post(SIGNIN_REQUEST.signin, async ({ request }) => {
    const { id, pw } = { ...(await request.json()) };

    if (id === 'admin' && pw === '1234') {
      const jwtTok = await createJwt();
      return HttpResponse.json({ accessToken: jwtTok, roles: ['leader'] });
    } else if (id === 'user' && pw === '1234') {
      // may need to change token content?
      const jwtTok = await createJwt();
      return HttpResponse.json({ accessToken: jwtTok, roles: ['member'] });
    } else return new HttpResponse(null, { status: 404 });
  }),

  // 8. 지원서 작성 페이지
  http.get(WRITE_FORM_REQUEST.sectionData, () => {
    return Response.json(DUMMY_SECTION_DATA);
  }),

  http.get(WRITE_FORM_REQUEST.questionData, () => {
    return Response.json(DUMMY_QUESTION_DATA);
  }),

  // 9. 지원서 평가 페이지
  http.get(EVALUATE_FORM_REQUEST.recruitmentName(), ({ params }) => {
    const dummyData = DUMMY_RECRUITMENT_NAME(params.formId);

    if (dummyData) return HttpResponse.json(dummyData);
    else throw new Error();
  }),

  http.get(EVALUATE_FORM_REQUEST.applicantList(), ({ params }) => {
    const dummyData = DUMMY_APPLICANT_LIST(params.formId);

    if (dummyData) return HttpResponse.json(dummyData);
    else throw new Error();
  }),

  // 9*. 지원서 평가 디테일 페이지

  // Registeration Test
  http.post('/testregister', async ({ request }) => {
    const { id, pwd } = { ...(await request.json()) };

    if (id === 's07019' && pwd === '!Dd12345') {
      const jwtTok = await createJwt();
      return HttpResponse.json({ access: jwtTok });
    } else return new HttpResponse(null, { status: 409 });
  }),
];

// Create JWT Token
const secretKey = await generateSecret('HS256');
async function createJwt() {
  const token = await new SignJWT({
    id: 1,
    name: 'admin',
    role: 'omniscience',
  })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setIssuer('BEGoonco')
    .setAudience('FEGoonco')
    .setExpirationTime('1h')
    .sign(await secretKey);
  return token;
}
