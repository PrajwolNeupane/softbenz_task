import { API_URL } from "@constants/index";
import axios, { AxiosInstance } from "axios";

interface Config {
  baseURL: string;
  headers?: Record<string, string>;
  withCredentials?: boolean;
}

let instance: AxiosInstance;
let fileUploadInstance: AxiosInstance;

const config: Config = {
  baseURL: `${API_URL}`,
  withCredentials: true,
};

const fileInstanceConfig: Config = {
  baseURL: `${API_URL}`,
  withCredentials: true,
};

instance = axios.create(config);
fileUploadInstance = axios.create(fileInstanceConfig);

export default instance;
export { fileUploadInstance };
