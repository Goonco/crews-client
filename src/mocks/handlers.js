import { http, HttpResponse } from 'msw';

import { WRITE_FORM_REQUEST } from 'apis/api/writeform';
import { EVALUATE_FORM_REQUEST } from 'apis/api/evaluateform';

import { DUMMY_SECTION_DATA, DUMMY_QUESTION_DATA } from './formDummyData';
import {
  DUMMY_RECRUITMENT_NAME,
  DUMMY_APPLICANT_LIST,
} from './evaluateDummyData';

export const handlers = [
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
];
