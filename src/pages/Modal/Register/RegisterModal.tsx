import React, { FC, FormEvent, useCallback } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import useForm from "../../../lib/hooks/useForm";
import { RegisterReq } from "../../../lib/payloads/auth";
import { modalConstant } from "../../../lib/payloads/modal";
import { propertyNameToKr } from "../../../lib/static";
import { checkIsNotBlank } from "../../../lib/utils";
import { setModalOpen, setModalType } from "../../../modules/action/loginModal";
import * as authApi from "../../../lib/api/auth";
import * as S from "../styles";
import { AxiosError } from "axios";

const RegisterModal: FC = () => {
  const dispatch = useDispatch();

  const [registerData, setRegisterData, registerHandler] = useForm<RegisterReq>(
    { name: "", id: "", password: "" }
  );
  const registerSubmitHandler = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
        checkIsNotBlank(registerData);
      } catch (emptyProperty) {
        const korName: string = propertyNameToKr[emptyProperty];
        toast.error(`${korName}을 입력해주세요`);
      }

      try {
        await authApi.reqRegister(registerData);
        toast.success("회원가입에 성공했습니다");
      } catch (err) {
        const status: number = (err as AxiosError).response.status;
        switch (status) {
          case 409:
            toast.error("중복된 ID가 존재합니다.");
        }
      }
    },
    [registerData]
  );
  const closeModal = useCallback(() => {
    dispatch(setModalOpen(false));
  }, []);
  const gotoLogin = useCallback(() => {
    dispatch(setModalType(modalConstant.LOGIN));
  }, []);

  return (
    <S.Modal onSubmit={registerSubmitHandler}>
      <S.XButton onClick={closeModal}>&times;</S.XButton>
      <S.Header>
        <S.Title>회원가입</S.Title>
      </S.Header>
      <S.AuthForm>
        <S.AuthInput
          value={registerData.name}
          onChange={registerHandler}
          name="name"
          type="text"
          placeholder="이름"
        />
        <S.AuthInput
          value={registerData.id}
          onChange={registerHandler}
          name="id"
          type="text"
          placeholder="아이디"
        />
        <S.AuthInput
          value={registerData.password}
          onChange={registerHandler}
          name="password"
          type="password"
          placeholder="비밀번호"
        />
        <S.AuthHelpMsg onClick={gotoLogin}>아이디가 있으신가요?</S.AuthHelpMsg>
      </S.AuthForm>
      <S.AuthBottom>
        <S.AuthButton>회원가입</S.AuthButton>
      </S.AuthBottom>
    </S.Modal>
  );
};

export default RegisterModal;
