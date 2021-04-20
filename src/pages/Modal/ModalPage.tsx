import React, { FC } from "react";
import { useSelector } from "react-redux";
import { Store } from "../../modules/reducer";
import * as S from "./styles";
import { modalConstant } from "../../lib/payloads/modal";
import LoginModal from "./Login/LoginModal";
import RegisterModal from "./Register/RegisterModal";

const Modal: FC = () => {
  const { isOpen, type } = useSelector((store: Store) => store.loginModal);

  return (
    isOpen && (
      <S.Container>
        {type === modalConstant.LOGIN ? (
          <LoginModal />
        ) : type === modalConstant.REGISTER ? (
          <RegisterModal />
        ) : (
          <div></div>
        )}
      </S.Container>
    )
  );
};

export default Modal;
