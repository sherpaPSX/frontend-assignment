import {OpenAPI, UsersService} from './api';
import axios, {type AxiosRequestHeaders} from 'axios';
import {useAuthStore} from './authStore';

const apiInit = () => {
  OpenAPI.BASE = 'http://localhost:3001';

  const NON_PROTECTED_PATHS = ['/login', '/register', '/refresh-token'];

  axios.interceptors.request.use((config) => {
    const tokens = useAuthStore.getState().tokens;
    const isNonProtectedPath = NON_PROTECTED_PATHS.some((path) => config.url?.includes(path));

    if (tokens?.accessToken && !isNonProtectedPath) {
      if (config.headers) {
        (config.headers as AxiosRequestHeaders)['Authorization'] = `Bearer ${tokens.accessToken}`;
      } else {
        config.headers = {Authorization: `Bearer ${tokens.accessToken}`} as AxiosRequestHeaders;
      }
    }

    return config;
  });

  axios.interceptors.response.use(
    (response) => response,
    async (error) => {
      const status = error?.response?.status;
      const originalRequest = error?.config as any;
      const refreshToken = useAuthStore.getState().tokens?.refreshToken;

      if (status === 401 && !originalRequest?._retry && refreshToken) {
        originalRequest._retry = true;
        try {
          const tokens = await UsersService.refreshToken({refreshToken});
          const {accessToken} = tokens;

          if (!accessToken) {
            return Promise.reject(error);
          }
          const currentUsername = useAuthStore.getState().username ?? '';
          useAuthStore.getState().login({refreshToken, accessToken}, currentUsername);

          originalRequest.headers = originalRequest.headers || {};
          (originalRequest.headers as AxiosRequestHeaders)['Authorization'] =
            `Bearer ${accessToken}`;
          axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

          return axios(originalRequest);
        } catch (refreshError) {
          useAuthStore.getState().logout();
          return Promise.reject(refreshError);
        }
      }

      return Promise.reject(error);
    }
  );
};

export default apiInit;
