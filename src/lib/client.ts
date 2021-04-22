import axios, { AxiosInstance } from "axios";

const BASE_URL = "http://localhost" as const;
const ACCESS_TOKEN = "ACCESS_TOKEN" as const;

export const authConstant = {
  ACCESS_TOKEN,
};

const apiDefault = (): AxiosInstance => {
  const accessToken: string = localStorage.getItem(ACCESS_TOKEN);

  const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
      Authorization: accessToken,
    },
  });

  return axiosInstance;
};

export default apiDefault;
