// src/api/apiInit.ts
import axios, {type AxiosRequestHeaders} from 'axios';
import {ApiError, OpenAPI, UsersService} from './index';
import {useAuthStore} from '../authStore';
import {ApiRequestOptions} from './core/ApiRequestOptions';

export const apiInit = () => {
  // Base URL pro generované služby
  OpenAPI.BASE = 'http://localhost:3001';

  const NON_PROTECTED_PATHS = ['/login', '/register', '/refresh-token'];

  // --- Request interceptor ---
  axios.interceptors.request.use((config) => {
    const {tokens} = useAuthStore.getState();
    const isPublic = NON_PROTECTED_PATHS.some((p) => config.url?.includes(p));

    if (tokens?.accessToken && !isPublic) {
      config.headers = config.headers || {};
      (config.headers as AxiosRequestHeaders).Authorization = `Bearer ${tokens.accessToken}`;
    }

    return config;
  });

  // --- Response interceptor ---
  axios.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error?.config;
      const status = error?.response?.status;
      const refreshToken = useAuthStore.getState().tokens?.refreshToken;

      // --- Refresh token logic ---
      if (status === 401 && !originalRequest?._retry && refreshToken) {
        originalRequest._retry = true;
        try {
          const tokens = await UsersService.refreshToken({refreshToken});
          const accessToken = tokens?.accessToken;
          const usernameToUse = useAuthStore.getState().username ?? '';

          if (accessToken && usernameToUse) {
            useAuthStore.getState().login({accessToken, refreshToken}, usernameToUse);

            originalRequest.headers = originalRequest.headers || {};
            (originalRequest.headers as AxiosRequestHeaders).Authorization =
              `Bearer ${accessToken}`;

            return axios(originalRequest);
          } else {
            useAuthStore.getState().logout();
            return Promise.reject(error);
          }
        } catch (refreshError) {
          useAuthStore.getState().logout();
          return Promise.reject(refreshError);
        }
      }

      // --- Mapování všech chyb na ApiError ---
      const response = error?.response;
      const data = response?.data;

      const stubOptions: ApiRequestOptions = {
        url: originalRequest?.url ?? '',
        method: originalRequest?.method ? originalRequest.method.toUpperCase() : 'GET',
      };

      return Promise.reject(
        new ApiError(
          stubOptions,
          {
            url: stubOptions.url,
            ok: false,
            status,
            statusText: response?.statusText ?? 'unknown',
            body: data,
          },
          data?.error ?? error.message ?? 'Unknown error'
        )
      );
    }
  );
};
