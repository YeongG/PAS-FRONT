export const SET_MODAL_OPEN = "loginModal/SET_MODAL_OPEN" as const;

export const setModalOpen = (isOpen: boolean) => ({
  type: SET_MODAL_OPEN,
  payload: { isOpen },
});

type LoginModalAction = ReturnType<typeof setModalOpen>;

export default LoginModalAction;
