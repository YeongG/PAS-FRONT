import React, { FC } from "react";
import { AnalysisType } from "../../lib/payloads/analysis";
import * as S from "./styles";

export interface AnalysisNavItem {
  name: string;
  value: AnalysisType;
}

interface Props {
  datas: AnalysisNavItem[];
  onChange: (value: AnalysisNavItem) => void;
}

const AnalysisNav: FC<Props> = ({ datas, onChange }) => {
  return (
    <S.Container>
      {datas.map((data) => (
        <S.NavItem onClick={() => onChange(data)}>{data.name}</S.NavItem>
      ))}
    </S.Container>
  );
};

export default AnalysisNav;
