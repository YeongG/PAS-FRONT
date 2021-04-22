import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Store } from "../../modules/reducer";
import * as S from "./styles";
import { modalConstant } from "../../lib/payloads/modal";
import LoginModal from "./Login/LoginModal";
import RegisterModal from "./Register/RegisterModal";
import * as authApi from "../../lib/api/auth";
import { setModalType } from "../../modules/action/loginModal";
import { useHistory } from "react-router";

const Modal: FC = () => {
  const dispatch = useDispatch();
  const { isOpen, type } = useSelector((store: Store) => store.loginModal);

  useEffect(() => {
    authApi
      .reqCheckAuth()
      .then(() => {
        dispatch(setModalType(modalConstant.SUCCESS));
      })
      .catch((err) => {});
  }, []);

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
