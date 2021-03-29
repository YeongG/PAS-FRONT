import axios, { AxiosInstance } from "axios";

const BASE_URL = "http://localhost";

const apiDefault = (): AxiosInstance => {
  const axiosInstance = axios.create({
    baseURL: BASE_URL,
  });

  return axiosInstance;
};

export default apiDefault;
