import { generateSecret, SignJWT } from 'jose';

const secretKey = await generateSecret('HS256');

export async function createJwt() {
  const token = await new SignJWT({
    id: 1,
    name: 'goonco',
    role: 'IcanDoAnyTHing',
  })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setIssuer('FancyGoonco')
    .setAudience('HandsomeGoonco')
    .setExpirationTime('1h')
    .sign(await secretKey);
  return token;
}
