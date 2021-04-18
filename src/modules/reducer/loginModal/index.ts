import { modalConstant, ModalType } from "../../../lib/payloads/modal";
import LoginModalAction, {
  SET_MODAL_OPEN,
  SET_MODAL_TYPE,
} from "../../action/loginModal";

interface LoginModalReducerState {
  isOpen: boolean;
  type: ModalType;
}

const initialState: LoginModalReducerState = {
  isOpen: false,
  type: modalConstant.LOGIN,
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
    case SET_MODAL_TYPE: {
      return {
        ...state,
        type: action.payload.modalType,
      };
    }
    default: {
      return state;
    }
  }
};

export default loginModalReducer;
