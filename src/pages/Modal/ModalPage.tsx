import React, { FC, FormEvent, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import useForm from "../../lib/hooks/useForm";
import { propertyNameToKr } from "../../lib/static";
import { checkIsNotBlank } from "../../lib/utils";
import { AuthReq, AuthRes } from "../../lib/payloads/auth";
import { Store } from "../../modules/reducer";
import * as S from "./styles";
import { reqLogin } from "../../lib/api/auth";
import { setModalOpen } from "../../modules/action/loginModal";
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
