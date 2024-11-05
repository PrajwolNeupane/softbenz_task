import instance, { fileUploadInstance } from "../endpoints/baseUrl";


export const api = {
  get: async <T>(endpoint: string, params?: object) => {
    return instance.get<T>(endpoint, {
      params,
      withCredentials: false,
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
        withCredentials: false,
      });
    } else {
      return fileUploadInstance.post<T>(endpoint, body, {
        headers: { ...headers },
        withCredentials: false,
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
        withCredentials: false,
      });
    } else {
      return fileUploadInstance.post<T>(endpoint, body, {
        headers: { ...headers },
        withCredentials: false,
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
        withCredentials: false,
      });
    } else {
      return fileUploadInstance.patch<T>(endpoint, body, {
        headers: { ...headers },
        withCredentials: false,
      });
    }
  },
  delete: async <T>(endpoint: string, headers?: object) => {
    return instance.delete<T>(endpoint, {
      headers: { ...headers },
      withCredentials: false,
    });
  },
};
