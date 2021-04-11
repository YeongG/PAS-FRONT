import React, { FC, useMemo } from "react";
import { ProgressBlock, PersentBar, TextBlock, ColorAnalysis } from "..";
import {
  AnalysisSafeValue,
  AnalysisType,
  GoogleVisionRes,
} from "../../lib/payloads/analysis";
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
        return (
          <ColorAnalysis
            colors={imagePropertiesAnnotation.dominantColors.colors}
          />
        );
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
        return localizedObjectAnnotations.map(({ name, score }) => (
          <PersentBar
            key={name}
            persent={Math.round(score * 100)}
            name={name}
          />
        ));
      }
      case "logo": {
        return logoAnnotations.map(({ description, score }) => (
          <PersentBar
            key={description}
            persent={Math.round(score * 100)}
            name={description}
          />
        ));
      }
      case "safeSearch": {
        const { adult, medical, racy, spoof, violence } = safeSearchAnnotation;
        return (
          <>
            <ProgressBlock
              max={5}
              name={"성인"}
              value={adult}
              progress={AnalysisSafeValue[adult]}
            />
            <ProgressBlock
              max={5}
              name={"spoof"}
              value={spoof}
              progress={AnalysisSafeValue[spoof]}
            />
            <ProgressBlock
              max={5}
              name={"의료"}
              value={medical}
              progress={AnalysisSafeValue[medical]}
            />
            <ProgressBlock
              max={5}
              name={"violence"}
              value={violence}
              progress={AnalysisSafeValue[violence]}
            />
            <ProgressBlock
              max={5}
              name={"racy"}
              value={racy}
              progress={AnalysisSafeValue[racy]}
            />
          </>
        );
      }
      case "text": {
        return textAnnotations.map(({ description }) => (
          <TextBlock content={description} />
        ));
      }
    }
  }, [nowType]);

  return <S.Container>{renderValue}</S.Container>;
};

export default AnalysisMenu;
