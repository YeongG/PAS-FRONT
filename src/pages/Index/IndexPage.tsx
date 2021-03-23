import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { pictureIcon, realTimeIcon } from "../../assets";
import { setSliderStep } from "../../modules/action/slider";
import * as S from "./style";

const IndexPage: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSliderStep("select"));
  }, []);
  return (
    <S.Container>
      <S.LinkWrap>
        <Link to="/realtime">
          <S.BackgroundImg imgSrc={realTimeIcon} />
        </Link>
        <S.TextWrap>실시간 분석</S.TextWrap>
      </S.LinkWrap>
      <S.LinkWrap>
        <Link to="/upload">
          <S.BackgroundImg imgSrc={pictureIcon} />
        </Link>
        <S.TextWrap>이미지 분석</S.TextWrap>
      </S.LinkWrap>
    </S.Container>
  );
};

export default IndexPage;
