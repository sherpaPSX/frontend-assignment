import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import { OpenAPI } from './OpenAPI';
import { request as originalRequest } from './request';

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: OpenAPI.BASE,
});

const AUTH_EXCLUDED_URLS = ['/login', '/register', '/refresh-token'];

axiosInstance.interceptors.request.use((config) => {
  if (!AUTH_EXCLUDED_URLS.some(url => config.url?.includes(url))) {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers?.set?.('Authorization', `Bearer ${token}`);
    }
  }
  return config;
});


export const request = <T>(config: typeof OpenAPI, options: Parameters<typeof originalRequest>[1]) => {
  return originalRequest<T>(config, options, axiosInstance);
};