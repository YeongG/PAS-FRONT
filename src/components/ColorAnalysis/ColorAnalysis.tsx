import React, { FC, useCallback, useState } from "react";
import { ColorAnalysis } from "../../lib/payloads/analysis";
import * as S from "./styles";

interface Props {
  colors: ColorAnalysis[];
}

const ColorAnalysis: FC<Props> = ({ colors }) => {
  const [nowColor, setNowColor] = useState<ColorAnalysis>(colors[0] || null);
  const changeNowColor = useCallback((data: ColorAnalysis) => {
    setNowColor(data);
  }, []);
  return (
    <S.Container>
      <S.Title>Color Sets</S.Title>
      <S.ColorWrap>
        {colors.map((data) => (
          <S.ColorItem
            onMouseOver={() => changeNowColor(data)}
            color={data.hex}
            width={data.percentRounded}
          />
        ))}
      </S.ColorWrap>
      {nowColor && (
        <S.NowColorWrap>
          <S.NowColorInfo>
            <S.ColorValue>
              #{nowColor.hex.toUpperCase()}, RGB({nowColor.rgb})
            </S.ColorValue>
            <S.ColorPersent>{nowColor.percentRounded}%</S.ColorPersent>
          </S.NowColorInfo>
          <S.NowColor color={nowColor.hex} />
        </S.NowColorWrap>
      )}
    </S.Container>
  );
};

export default ColorAnalysis;
