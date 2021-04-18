import { ModalType } from "../../../lib/payloads/modal";

export const SET_MODAL_OPEN = "loginModal/SET_MODAL_OPEN" as const;
export const SET_MODAL_TYPE = "loginModal/SET_MODAL_TYPE" as const;

export const setModalOpen = (isOpen: boolean) => ({
  type: SET_MODAL_OPEN,
  payload: { isOpen },
});

export const setModalType = (modalType: ModalType) => ({
  type: SET_MODAL_TYPE,
  payload: { modalType },
});

type LoginModalAction = ReturnType<typeof setModalOpen | typeof setModalType>;

export default LoginModalAction;
