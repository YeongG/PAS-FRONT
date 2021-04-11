import React, {
  FC,
  ReactEventHandler,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import { AnalysisMenu, AnalysisNav } from "../../components";
import { AnalysisNavItem } from "../../components/AnalysisNav/AnalysisNav";
import { AnalysisType } from "../../lib/payloads/analysis";
import { analysisItems } from "../../lib/static";
import { getCanvasBorderSize } from "../../lib/utils";
import { setSliderStep } from "../../modules/action/slider";
import { Store } from "../../modules/reducer";
import * as S from "./style";

const AnalysisPage: FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [nowType, setNowType] = useState<AnalysisType>("localizedObject");
  const { originalImgSrc, analysis } = useSelector(
    (store: Store) => store.analysis
  );

  const canvasRef = useRef<HTMLCanvasElement>();
  const imgRef = useRef<HTMLImageElement>();

  useEffect(() => {
    dispatch(setSliderStep("analysis"));
  }, []);

  useEffect(() => {
    if (!originalImgSrc) {
      toast.error("잘못된 접근 입니다.");
      history.push("/");
    }
  }, [originalImgSrc, analysis]);

  useEffect(() => {
    const { width, height } = imgRef.current;

    canvasRef.current.width = width;
    canvasRef.current.height = height;

    const ctx = canvasRef.current.getContext("2d");
    ctx.strokeStyle = "rgb(118, 255, 3)";
    ctx.lineWidth = 4;

    let vertices: any[];
    let getSrc;
    switch (nowType) {
      case "fullText":
      case "label":
      case "imagePropertie":
      case "safeSearch":
        vertices = [];
        break;

      case "text": {
        vertices = analysis.textAnnotations;
        getSrc = (data) => data.boundingPoly.vertices;
        break;
      }
      case "cropHint": {
        vertices = analysis.cropHintsAnnotation.cropHints;
        getSrc = (data) => data.boundingPoly.vertices;
        break;
      }
      case "localizedObject": {
        vertices = analysis.localizedObjectAnnotations;
        getSrc = (data) => data.boundingPoly.normalizedVertices;
        break;
      }
      case "logo": {
        vertices = analysis.logoAnnotations;
        getSrc = (data) => data.boundingPoly.vertices;
        break;
      }
    }

    vertices.forEach((data) => {
      const {
        height: drawHeight,
        width: drawWidth,
        x1,
        y1,
      } = getCanvasBorderSize(getSrc(data), { width, height });
      ctx.strokeRect(x1, y1, drawWidth, drawHeight);
    });
  }, [nowType]);

  const navChangeHandler = useCallback((data: AnalysisNavItem) => {
    setNowType(data.value);
  }, []);

  const imgLoadHandler = useCallback(
    (e) => {
      const { width, height } = e.currentTarget;

      canvasRef.current.width = width;
      canvasRef.current.height = height;

      const ctx = canvasRef.current.getContext("2d");
      ctx.strokeStyle = "rgb(118, 255, 3)";
      ctx.lineWidth = 4;

      const {
        height: drawHeight,
        width: drawWidth,
        x1,
        y1,
      } = getCanvasBorderSize(
        analysis.localizedObjectAnnotations[0].boundingPoly.normalizedVertices,
        { width, height }
      );

      ctx.strokeRect(x1, y1, drawWidth, drawHeight);
    },
    [analysis]
  );

  return (
    <S.Container>
      <div>
        <S.MenuNav>
          <AnalysisNav
            activeType={nowType}
            datas={analysisItems}
            onChange={navChangeHandler}
          />
        </S.MenuNav>
        <S.RelativeDiv>
          <S.OriginalImg
            ref={imgRef}
            onLoad={imgLoadHandler}
            src={originalImgSrc}
          ></S.OriginalImg>
          <S.Canvas ref={canvasRef} />
          <S.MenuWrap>
            <AnalysisMenu {...analysis} nowType={nowType} />
          </S.MenuWrap>
        </S.RelativeDiv>
      </div>
    </S.Container>
  );
};

export default AnalysisPage;
