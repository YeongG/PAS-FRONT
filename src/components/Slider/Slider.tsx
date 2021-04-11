import React, { FC } from "react";
import { useSelector } from "react-redux";
import {
  checkIcon,
  loginIcon,
  realTimeIcon,
  selectIcon,
  uploadIcon,
} from "../../assets";
import { Store } from "../../modules/reducer";
import * as S from "./style";

const Slider: FC = () => {
  const step: string = useSelector((store: Store) => store.slider.step);
  return (
    <S.Container>
      <S.IconImg isActive={step === "select"} src={selectIcon} />
      <S.IconImg isActive={step === "upload"} src={uploadIcon} />
      <S.IconImg isActive={step === "realtime"} src={realTimeIcon} />
      <S.IconImg isActive={step === "analysis"} src={checkIcon} />
      <S.IconImg isActive={step === "d"} src={uploadIcon} />
      <S.IconImg isActive={step === "e"} src={uploadIcon} />
      <S.IconImg isActive={step === "f"} src={uploadIcon} />
      <S.LoginWrap>
        <S.LoginImg src={loginIcon} />
      </S.LoginWrap>
    </S.Container>
  );
};

export default Slider;
