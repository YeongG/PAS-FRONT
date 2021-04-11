import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;
  flex-direction: column;
`;
export const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
`;
export const RelativeDiv = styled.div`
  position: relative;
  display: flex;
`;
export const OriginalImg = styled.img`
  /* max-width: 1000px; */
  /* max-height: 700px; */
  height: auto;
  object-fit: cover;
`;

export const MenuWrap = styled.div`
  width: 350px;
  margin-left: 30px;
  min-height: 500px;
  max-height: 700px;
`;

export const MenuNav = styled.div`
  min-width: 700px;
  margin-bottom: 10px;
`;
