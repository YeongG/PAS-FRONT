import React, { FC, useEffect, useState } from "react";
import * as S from "./style";
import { useDispatch } from "react-redux";
import { setSliderStep } from "../../modules/action/slider";

const RealtimePage: FC = () => {
  const dispatch = useDispatch();
  const [imgSrcArr, setImgSrcArr] = useState<string[]>([]);

  useEffect(() => {
    dispatch(setSliderStep("realtime"));
    navigator.mediaDevices
      .getUserMedia({
        audio: true,
        video: true,
      })
      .then((stream) => {
        const videoElement: HTMLVideoElement = document.getElementById(
          "video"
        ) as HTMLVideoElement;
        videoElement.srcObject = stream;
        videoElement.play();

        const canvas: HTMLCanvasElement = document.getElementById(
          "canvas"
        ) as HTMLCanvasElement;

        setInterval(() => {
          canvas.width = videoElement.videoWidth;
          canvas.height = videoElement.videoHeight;

          canvas
            .getContext("2d")
            .drawImage(videoElement, 0, 0, canvas.width, canvas.height);
          const img: string = canvas.toDataURL("image/png");
          setImgSrcArr((prev) => [...prev, img]);
        }, 2000);
      });
  }, []);

  return (
    <div>
      <video id="video" style={{ width: "640px", height: "400px" }} />
      <canvas id="canvas" style={{ display: "none" }} />
      {imgSrcArr.length}
      <S.ImgWrap>
        {imgSrcArr.map((imgSrc) => (
          <S.ImgItem key={imgSrc} src={imgSrc} />
        ))}
      </S.ImgWrap>
    </div>
  );
};

export default RealtimePage;
