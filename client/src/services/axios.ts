import axios from "axios";
import { jwtVerification } from "~/utils/jwt-verification";
import History from "./navigate.service";
import TokenService from "./token.service";

const instance = axios.create({
  baseURL: import.meta.env.VITE_DUMMY_API,
  headers: {
    "Content-Type": "application/json",
    "Accept-Language": "KR",
  },
});

instance.interceptors.request.use(
  (config) => {
    const token = TokenService.getLocalAccessToken();
    if (token && jwtVerification(token)) {
      config.headers!["Authorization"] = "Bearer " + token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const originalConfig = err.config;
    if (originalConfig.url !== "/authentication/admin-login" && err.response) {
      if (err.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;

        try {
          const refreshToken = TokenService.getLocalRefreshToken();
          if (refreshToken && jwtVerification(refreshToken)) {
            const rs = await axios.post(
              import.meta.env.VITE_API_URL + "/auth/refresh",
              null,
              {
                headers: {
                  Authorization: "Bearer " + refreshToken,
                },
              }
            );
            const { data } = rs.data;
            console.log("data", data);

            if (data) {
              TokenService.updateLocalAccessToken(data.access_token);
            }
            return instance(originalConfig);
          } else {
            TokenService.removeAuth();
            History.push("/login");
            return Promise.reject();
          }
        } catch (_error) {
          console.log("_error", _error);
          TokenService.removeAuth();
          History.push("/login");
          return Promise.resolve(_error);
        }
      }
    }

    return Promise.reject({ error: err.response });
  }
);

export default instance;
