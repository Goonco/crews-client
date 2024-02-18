import { baseInstance } from './instance';
import useAuth from 'apis/context/useAuth';

const useRefreshToken = () => {
  const { setAuth } = useAuth();

  const refresh = async () => {
    const response = await baseInstance.get('refresh', {
      withCredentials: true,
    });

    const accessToken = response.data.accessToken;

    setAuth((prev) => {
      return { ...prev, accessToken };
    });

    return accessToken;
  };

  return refresh;
};

export default useRefreshToken;
