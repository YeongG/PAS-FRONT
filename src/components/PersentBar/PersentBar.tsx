import React, { FC, memo } from "react";
import * as S from "./styles";

interface Props {
  persent: number;
  name: string;
}

const PersentBar: FC<Props> = ({ persent, name }) => {
  return (
    <S.Container>
      <S.InfoWrap>
        <S.Name>{name}</S.Name>
        <S.Persent>{persent}%</S.Persent>
      </S.InfoWrap>
      <S.ProgressBar persent={persent} />
    </S.Container>
  );
};

export default memo(PersentBar);
