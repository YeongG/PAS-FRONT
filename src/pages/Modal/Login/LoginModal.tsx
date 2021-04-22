import React, { FC, FormEvent, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import * as authApi from "../../../lib/api/auth";
import { authConstant } from "../../../lib/client";
import useForm from "../../../lib/hooks/useForm";
import { AuthReq, AuthRes } from "../../../lib/payloads/auth";
import { modalConstant } from "../../../lib/payloads/modal";
import { propertyNameToKr } from "../../../lib/static";
import { checkIsNotBlank } from "../../../lib/utils";
import { setModalOpen, setModalType } from "../../../modules/action/loginModal";
import * as S from "../styles";

const LoginModal: FC = () => {
  const dispatch = useDispatch();
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
        const authRes: AuthRes = (await authApi.reqLogin(loginData)).data;
        localStorage.setItem(authConstant.ACCESS_TOKEN, authRes.accessToken);
        toast.success("로그인에 성공하였습니다");
        dispatch(setModalType(modalConstant.SUCCESS));
      } catch (err) {
        setLoginData((prev) => ({ ...prev, password: "" }));
        toast.error("아이디 또는 비밀번호가 일치하지 않습니다");
      }
    },
    [loginData]
  );

  const gotoRegister = useCallback(() => {
    dispatch(setModalType(modalConstant.REGISTER));
  }, []);

  const closeModal = useCallback(() => {
    dispatch(setModalOpen(false));
  }, []);
  return (
    <S.Modal onSubmit={loginSubmitHandler}>
      <S.XButton onClick={closeModal}>&times;</S.XButton>
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
        <S.AuthHelpMsg onClick={gotoRegister}>
          아이디가 없으신가요?
        </S.AuthHelpMsg>
      </S.AuthForm>
      <S.AuthBottom>
        <S.AuthButton>로그인</S.AuthButton>
      </S.AuthBottom>
    </S.Modal>
  );
};

export default LoginModal;
