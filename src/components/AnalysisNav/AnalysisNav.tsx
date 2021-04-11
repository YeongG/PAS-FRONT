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
  activeType: AnalysisType;
}

const AnalysisNav: FC<Props> = ({ datas, onChange, activeType }) => {
  return (
    <S.Container>
      {datas.map((data) => (
        <S.NavItem
          active={data.value === activeType}
          onClick={() => onChange(data)}
        >
          {data.name}
        </S.NavItem>
      ))}
    </S.Container>
  );
};

export default AnalysisNav;
