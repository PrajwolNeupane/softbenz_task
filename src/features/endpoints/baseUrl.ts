import { API_URL } from "@constants/index";
import axios, { AxiosInstance } from "axios";

interface Config {
  baseURL: string;
  headers?: Record<string, string>;
}

let instance: AxiosInstance;
let fileUploadInstance: AxiosInstance;

const config: Config = {
  baseURL: `${API_URL}`,
};

const fileInstanceConfig: Config = {
  baseURL: `${API_URL}`,
};

instance = axios.create(config);
fileUploadInstance = axios.create(fileInstanceConfig);

export default instance;
export { fileUploadInstance };
