import { http, HttpResponse } from 'msw';
import { signInApi } from 'apis/api';
import { ROLES } from 'Router';
import tokenUtils from 'mocks/tokenUtils';

const { createAccess, createRefresh, verifyToken } = {
  ...tokenUtils,
};

export const base = (url) => process.env.REACT_APP_BASE_URL + url;

export const mockedSignInApis = [
  // leaderSignIn
  http.post(base(signInApi.endpoint.leaderSignIn), async ({ request }) => {
    const { leaderPW } = { ...(await request.json()) };

    let mockedId = '';
    switch (leaderPW) {
      case 'admin':
        mockedId = 'L126ZC35K2';
        break;
      case 'admin2':
        mockedId = 'L251DKE3F3';
        break;
      // 존재하지 않는 아이디일 경우 새로 생성
      default:
        mockedId = 'LR3AND5OMS';
        break;
    }

    const accessTok = await createAccess({ leaderPW });
    const refreshTok = await createRefresh({ leaderPW });
    return new HttpResponse(
      JSON.stringify({
        id: mockedId,
        accessToken: accessTok,
        roles: [ROLES.leader],
      }),
      {
        status: 200,
        headers: {
          'Set-Cookie': `refreshTok=${refreshTok}; Max-Age=3600;`,
        },
      }
    );
  }),

  // memberSignIn
  http.post(base(signInApi.endpoint.memberSignIn), async ({ request }) => {
    const { memberPW } = { ...(await request.json()) };
    const accessTok = await createAccess({ memberPW });
    const refreshTok = await createRefresh({ memberPW });

    if (memberPW === 'member') {
      return new HttpResponse(
        JSON.stringify({
          id: 'M126ZC35K2',
          accessToken: accessTok,
          roles: [ROLES.member],
        }),
        {
          status: 200,
          headers: {
            'Set-Cookie': `refreshTok=${refreshTok}; Max-Age=3600;`,
          },
        }
      );
    } else return new HttpResponse(null, { status: 404 });
  }),

  // getRecruitmentName
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
];
