import { authInstance } from './instance';
import { useEffect } from 'react';
import useRefreshToken from './useRefreshToken';
import useAuth from 'apis/context/useAuth';

const useAuthInstance = () => {
  const { auth } = useAuth();
  const refresh = useRefreshToken();

  useEffect(() => {
    const requestIntercept = authInstance.interceptors.request.use(
      (config) => {
        if (!config.headers?.Authorization) {
          config.headers.Authorization = `Bearer ${auth?.accessToken}`;
          config.headers.credentials = 'include';
        }

        return config;
      },
      (error) => {
        console.log(`[Error from requestIntercept]\n\n${error}`);
        return Promise.reject(error);
      }
    );

    const responseIntercept = authInstance.interceptors.response.use(
      (response) => {
        return response;
      },
      async (error) => {
        const prevRequest = error?.config;

        // Access Token Expired
        if (error?.response?.status === 403 && !prevRequest?.sent) {
          prevRequest.sent = true; // Prevent Infinite Loop

          const newAccessToken = await refresh();
          prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
          return authInstance(prevRequest); // Send it again
        }

        return Promise.reject(error);
      }
    );

    return () => {
      authInstance.interceptors.request.eject(requestIntercept);
      authInstance.interceptors.response.eject(responseIntercept);
    };
  }, [auth, refresh]);

  return authInstance;
};

export default useAuthInstance;
