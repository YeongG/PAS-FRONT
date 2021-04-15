import React, { FC, FormEvent, useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import useForm from "../../lib/hooks/useForm";
import { propertyNameToKr } from "../../lib/static";
import { checkIsNotBlank } from "../../lib/utils";
import { AuthReq, AuthRes } from "../../lib/payloads/auth";
import { Store } from "../../modules/reducer";
import * as S from "./styles";
import { reqLogin } from "../../lib/api/auth";

const Modal: FC = () => {
  const isOpen = useSelector((store: Store) => store.loginModal.isOpen);
  const [loginData, setLoginData, loginHandler] = useForm<AuthReq>({
    id: "",
    password: "",
  });

  const loginSubmitHandler = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
        checkIsNotBlank(loginData);
      } catch (emptyProperty) {
        const korName: string = propertyNameToKr[emptyProperty];
        toast.error(`${korName}을 입력해주세요`);
        return;
      }

      try {
        const authRes: AuthRes = (await reqLogin(loginData)).data;
      } catch (err) {}
    },
    [loginData]
  );

  return (
    <S.Container>
      <S.Modal onSubmit={loginSubmitHandler}>
        <S.XButton>&times;</S.XButton>
        <S.Header>
          <S.Title>로그인</S.Title>
        </S.Header>
        <S.AuthForm>
          <S.AuthInput
            value={loginData.id}
            onChange={loginHandler}
            name="id"
            type="text"
            placeholder="아이디"
          />
          <S.AuthInput
            value={loginData.password}
            onChange={loginHandler}
            name="password"
            type="password"
            placeholder="비밀번호"
          />
        </S.AuthForm>
        <S.AuthBottom>
          <S.AuthButton>로그인</S.AuthButton>
        </S.AuthBottom>
      </S.Modal>
    </S.Container>
  );
};

export default Modal;
