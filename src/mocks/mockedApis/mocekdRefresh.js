import { http, HttpResponse } from 'msw';
import { base } from './mockedSignIn';
import tokenUtils from 'mocks/tokenUtils';

export const mockedRefreshApis = [
  http.get(base('refresh'), async ({ cookies }) => {
    const { refreshTok } = { ...cookies };
    const { status, statusText, payload } = {
      ...(await tokenUtils.verifyToken(refreshTok)),
    };
    if (status === 200) {
      const accessToken = await tokenUtils.createAccess({ id: payload.id });
      return HttpResponse.json({ accessToken });
    } else return new HttpResponse(null, { status, statusText });
  }),
];
