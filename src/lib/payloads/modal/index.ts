const LOGIN = "LOGIN" as const;
const REGISTER = "REGISTER" as const;
const SUCCESS = "SUCCESS" as const;

export type ModalType = typeof LOGIN | typeof REGISTER | typeof SUCCESS;

export const modalConstant = {
  LOGIN,
  REGISTER,
  SUCCESS,
};
    