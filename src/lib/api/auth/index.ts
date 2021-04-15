import { AxiosResponse } from "axios";
import apiDefault from "../../client";
import { AuthReq, AuthRes } from "../../payloads/auth";

export const reqLogin = (payload: AuthReq): Promise<AxiosResponse<AuthRes>> => {
  return apiDefault().post<AuthRes>("/auth/register", payload);
};
