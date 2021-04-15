import LoginModalAction, { SET_MODAL_OPEN } from "../../action/loginModal";

interface LoginModalReducerState {
  isOpen: boolean;
}

const initialState: LoginModalReducerState = {
  isOpen: false,
};

const loginModalReducer = (
  state: LoginModalReducerState = initialState,
  action: LoginModalAction
): LoginModalReducerState => {
  switch (action.type) {
    case SET_MODAL_OPEN: {
      return {
        ...state,
        isOpen: action.payload.isOpen,
      };
    }
    default: {
      return state;
    }
  }
};

export default loginModalReducer;
