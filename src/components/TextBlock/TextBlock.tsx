import React, { FC } from "react";
import * as S from "./styles";

interface Props {
  content: string;
}

const TextBlock: FC<Props> = ({ content }) => {
  return (
    <S.Container>
      <S.Text>{content}</S.Text>
    </S.Container>
  );
};

export default TextBlock;
