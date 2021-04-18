export interface AuthReq {
  id: string;
  password: string;
}

export interface RegisterReq {
  id: string;
  password: string;
  name: string;
}

export interface AuthRes {
  accessToken: string;
}
