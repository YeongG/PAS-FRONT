import React, { FC, useMemo } from "react";
import { AnalysisType, GoogleVisionRes } from "../../lib/payloads/analysis";
import PersentBar from "../PersentBar/PersentBar";
import * as S from "./styles";

interface Props extends GoogleVisionRes {
  nowType: AnalysisType;
}

const AnalysisMenu: FC<Props> = ({
  cropHintsAnnotation,
  fullTextAnnotation,
  imagePropertiesAnnotation,
  labelAnnotations,
  localizedObjectAnnotations,
  logoAnnotations,
  safeSearchAnnotation,
  textAnnotations,
  nowType,
}) => {
  const renderValue = useMemo(() => {
    switch (nowType) {
      case "cropHint": {
        //   return cropHintsAnnotation
        return <div></div>;
      }
      case "fullText": {
        return <div></div>;
      }
      case "imagePropertie": {
        return localizedObjectAnnotations.map(({ name, score }) => (
          <PersentBar
            key={name}
            persent={Math.round(score * 100)}
            name={name}
          />
        ));
      }
      case "label": {
        return labelAnnotations.map(({ score, description }) => (
          <PersentBar
            key={description}
            name={description}
            persent={Math.round(score * 100)}
          />
        ));
      }
      case "localizedObject": {
        return <div></div>;
      }
      case "logo": {
        return <div></div>;
      }
      case "safeSearch": {
        return <div></div>;
      }
      case "text": {
        return <div></div>;
      }
    }
  }, [nowType]);

  return <S.Container>{renderValue}</S.Container>;
};

export default AnalysisMenu;
