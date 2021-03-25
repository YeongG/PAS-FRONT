import React, {
  FC,
  useCallback,
  useEffect,
  useRef,
  useState,
  MouseEvent,
} from "react";
import * as S from "./style";
import { useDispatch } from "react-redux";
import { setSliderStep } from "../../modules/action/slider";
import { galleryIcon, recodingIcon, recordIcon } from "../../assets";

const RealtimePage: FC = () => {
  const dispatch = useDispatch();
  const [imgSrcArr, setImgSrcArr] = useState<string[]>([]);
  const [historyIsOpen, setHistoryIsOpen] = useState<boolean>(false);
  const [isRecoding, setIsRecoding] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>();
  const canvasRef = useRef<HTMLCanvasElement>();

  useEffect(() => {
    dispatch(setSliderStep("realtime"));
    navigator.mediaDevices
      .getUserMedia({
        audio: true,
        video: true,
      })
      .then((stream) => {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      });
  }, []);

  useEffect(() => {
    if (isRecoding) {
      let intervalId: NodeJS.Timeout = setInterval(() => {
        canvasRef.current.width = videoRef.current.videoWidth;
        canvasRef.current.height = videoRef.current.videoHeight;

        canvasRef.current
          .getContext("2d")
          .drawImage(
            videoRef.current,
            0,
            0,
            canvasRef.current.width,
            canvasRef.current.height
          );
        const img: string = canvasRef.current.toDataURL("image/png");
        setImgSrcArr((prev) => [...prev, img]);
      }, 3000);

      return () => clearInterval(intervalId);
    }
  }, [isRecoding]);

  const toggleHistoryisOpen = useCallback(() => {
    setHistoryIsOpen((prev) => !prev);
  }, []);

  const toggleisRecoding = useCallback(() => {
    setIsRecoding((prev) => !prev);
  }, []);

  const backgroundRef = useCallback((e: MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget === e.target) setHistoryIsOpen(false);
  }, []);
  return (
    <S.Container>
      <S.RealTimeCameraWrap>
        <S.RecordStatusShowIconWrap onClick={toggleisRecoding}>
          <img src={isRecoding ? recodingIcon : recordIcon} />
        </S.RecordStatusShowIconWrap>

        <S.RealTimeVideo ref={videoRef} id="video" />
        <S.RealTimeCanvas ref={canvasRef} id="canvas" />
        <S.GalleryWrap>
          <S.GalleryImg onClick={toggleHistoryisOpen} src={galleryIcon} />
        </S.GalleryWrap>
      </S.RealTimeCameraWrap>
      <S.ImgBackground onClick={backgroundRef} isActive={historyIsOpen}>
        <S.ImgWrap>
          {imgSrcArr.map((imgSrc, i) => (
            <S.ImgItemDiv>
              <S.ImgItem key={imgSrc} src={imgSrc} />
            </S.ImgItemDiv>
          ))}
        </S.ImgWrap>
      </S.ImgBackground>
    </S.Container>
  );
};

export default RealtimePage;
