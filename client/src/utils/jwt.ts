import jwtDecode, { JwtPayload } from 'jwt-decode';

const JWTManager = () => {
  const LOGOUT_EVENT_NAME = 'jwt-logout';
  let inMemoryToken: string | null = null;
  let refreshTokenTimeoutId: number | null = null;
  let userId: number | null = null;

  const getToken = () => inMemoryToken;

  const getUserId = () => userId;

  const setToken = (accessToken: string) => {
    inMemoryToken = accessToken;
    // decode & set countdown to refresh
    const decoded = jwtDecode<JwtPayload & { userId: number }>(accessToken);
    userId = decoded.userId;
    const expirationTime = decoded.exp as number;
    const issuedAtTime = decoded.iat as number;
    setRefreshToken(expirationTime - issuedAtTime);
    return true;
  };

  const abortRefreshToken = () => {
    if (refreshTokenTimeoutId) {
      window.clearTimeout(refreshTokenTimeoutId);
    }
  };

  const removeToken = () => {
    inMemoryToken = null;
    abortRefreshToken();
    window.localStorage.setItem(LOGOUT_EVENT_NAME, Date.now().toString());
    return true;
  };

  // To logout all tabs (nullify inMemory accessToken)
  window.addEventListener('storage', (event) => {
    if (event.key === LOGOUT_EVENT_NAME) {
      inMemoryToken = null;
    }
  });

  const getRefreshToken = async () => {
    try {
      const response = await fetch(import.meta.env.VITE_SERVER_URL, {
        credentials: 'include',
      });

      const data = (await response.json()) as {
        success: boolean;
        accessToken: string;
      };
      // console.log('ACCESS TOKEN', data);
      setToken(data.accessToken);
      return true;
    } catch (error) {
      console.log('ERROR: ', error);
      removeToken();
      return false;
    }
  };

  const setRefreshToken = (delay: number) => {
    refreshTokenTimeoutId = window.setTimeout(
      getRefreshToken,
      delay * 1000 - 5000 // millisecond
    );
  };

  return { getUserId, getToken, setToken, getRefreshToken, removeToken };
};

export default JWTManager();
