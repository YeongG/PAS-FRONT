export interface AuthReq {
  id: string;
  password: string;
}

export interface AuthRes {
  accessToken: string;
}
