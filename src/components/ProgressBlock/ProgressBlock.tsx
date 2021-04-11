import React, { FC, useMemo } from "react";
import * as S from "./styles";

interface Props {
  max: number;
  progress: number;
  name: string;
  value: string;
}

const ProgressBlock: FC<Props> = ({ max, progress, name, value }) => {
  const progressUi = useMemo(() => {
    const ui = new Array(max).fill(0).map((_, i: number) => {
      if (i < progress) return <S.SuccessProgressBlockItem />;
      return <S.NormalProgressBlockItem />;
    });
    return ui;
  }, [max, progress]);

  return (
    <S.Container>
      <S.Name>{name}</S.Name>
      <S.ProgressBlockList>{progressUi}</S.ProgressBlockList>
      <S.ProgressValue>{value}</S.ProgressValue>
    </S.Container>
  );
};

export default ProgressBlock;
