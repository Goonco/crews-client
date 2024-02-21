import { SignJWT, jwtDecrypt, jwtVerify } from 'jose';

const alg = 'HS256';
const secretKey = new TextEncoder().encode(
  'cc7e0d44fd473002f1c42167459001140ec6389b7353f8088f4d9a95f2f596f2'
);

const tokenUtils = {
  createAccess: async (payload) => {
    const token = await new SignJWT(payload)
      .setProtectedHeader({ alg }) // If no argument is used the current unix timestamp is used as the claim.
      .setIssuedAt()
      .setIssuer('BEGoonco')
      .setAudience('FEGoonco')
      .setExpirationTime('600sec')
      .sign(secretKey);

    return token;
  },

  createRefresh: async (payload) => {
    const token = await new SignJWT(payload)
      .setProtectedHeader({ alg }) // If no argument is used the current unix timestamp is used as the claim.
      .setIssuedAt()
      .setIssuer('BEGoonco')
      .setAudience('FEGoonco')
      .setExpirationTime('3600sec')
      .sign(secretKey);

    return token;
  },

  verifyToken: async (tok) => {
    try {
      // Verification Failed 용 secretKey
      // const secretKey = new TextEncoder().encode(
      //   'cc7e0d44fd473002f1c42167459001140ec6389b7353f8088f4d9a95f2f596f3'
      // );

      const { payload, protedtedHeader } = await jwtVerify(tok, secretKey, {
        issuer: 'BEGoonco',
        audience: 'FEGoonco',
      });

      return {
        status: 200,
        statusText: 'JWT Verification Success',
        payload,
      };
    } catch (e) {
      if (e.name === 'JWTExpired') {
        return {
          status: 403,
          statusText: 'JWT Expired',
        };
      } else if (e.name === 'JWSSignatureVerificationFailed') {
        return {
          status: 401,
          statusText: 'JWT Signature Verification Failed',
        };
      }
    }
  },
};

export default tokenUtils;
