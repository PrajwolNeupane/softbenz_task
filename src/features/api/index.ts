import instance, { fileUploadInstance } from "../endpoints/baseUrl";
import Cookies from "js-cookie";

export const api = {
  get: async <T>(endpoint: string, params?: object) => {
    return instance.get<T>(endpoint, {
      params,
      withCredentials: true,
    });
  },
  post: async <T, S>(
    endpoint: string,
    body: S,
    headers?: object,
    isFileUpload?: boolean
  ) => {
    if (!isFileUpload) {
      return instance.post<T>(endpoint, body, {
        headers: { ...headers },
        withCredentials: true,
      });
    } else {
      return fileUploadInstance.post<T>(endpoint, body, {
        headers: { ...headers },
        withCredentials: true,
      });
    }
  },
  put: async <T, S>(
    endpoint: string,
    body: S,
    headers?: object,
    isFileUpload?: boolean
  ) => {
    if (!isFileUpload) {
      return instance.put<T>(endpoint, body, {
        headers: { ...headers },
        withCredentials: true,
      });
    } else {
      return fileUploadInstance.post<T>(endpoint, body, {
        headers: { ...headers },
        withCredentials: true,
      });
    }
  },
  patch: async <T, S>(
    endpoint: string,
    body: S,
    headers?: object,
    isFileUpload?: boolean
  ) => {
    if (!isFileUpload) {
      return instance.patch<T>(endpoint, body, {
        headers: { ...headers },
        withCredentials: true,
      });
    } else {
      return fileUploadInstance.patch<T>(endpoint, body, {
        headers: { ...headers },
        withCredentials: true,
      });
    }
  },
  delete: async <T>(endpoint: string, headers?: object) => {
    return instance.delete<T>(endpoint, {
      headers: { ...headers },
      withCredentials: true,
    });
  },
};
