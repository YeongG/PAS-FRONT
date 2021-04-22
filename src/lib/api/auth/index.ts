import { AxiosResponse } from "axios";
import apiDefault from "../../client";
import { AuthReq, AuthRes, RegisterReq } from "../../payloads/auth";

export const reqLogin = (body: AuthReq): Promise<AxiosResponse<AuthRes>> => {
  return apiDefault().post<AuthRes>("/auth/login", body);
};

export const reqRegister = (body: RegisterReq): Promise<AxiosResponse<any>> => {
  return apiDefault().post("/auth/register", body);
};

export const reqCheckAuth = (): Promise<AxiosResponse<any>> => {
  return apiDefault().get("/auth/check");
};
