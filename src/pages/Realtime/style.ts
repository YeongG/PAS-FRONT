import styled, { css } from "styled-components";

export const Container = styled.div``;
export const RecordStatusShowIconWrap = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: 3px solid black;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 50px;
    height: 50px;
  }
`;
export const RealTimeCameraWrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ImgItem = styled.img`
  width: 100%;
  box-sizing: border-box;
  object-fit: cover;

  height: 400px;
`;

export const ImgItemDiv = styled.div`
  flex: 1 1 30%;
  max-width: 500px;
  height: 420px;
  margin: 0 10px;
  box-sizing: border-box;
`;

export const RealTimeVideo = styled.video`
  width: 1000px;
  height: 600px;
  margin-top: 20px;
`;

export const RealTimeCanvas = styled.canvas`
  display: none;
`;

export const ImgBackground = styled.div<{ isActive: boolean }>`
  top: 0;
  left: 0;
  position: fixed;
  background-color: #eee;
  z-index: 2;
  width: 100%;
  height: 100vh;
  overflow-y: auto;

  ${(props) =>
    !props.isActive &&
    css`
      display: none;
    `}
`;
export const ImgWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 1600px;
  margin: 0 auto;
  margin-top: 200px;
`;
export const GalleryWrap = styled.div`
  position: fixed;
  right: 20px;
  top: 20px;
`;

export const GalleryImg = styled.img`
  width: 60px;
  height: 60px;
`;
