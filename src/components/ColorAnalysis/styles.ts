import styled from "styled-components";

export const Container = styled.div``;
export const Title = styled.div`
  font-size: 25px;
`;
export const ColorWrap = styled.div`
  display: flex;
  height: 170px;
  margin-top: 10px;
`;
export const ColorItem = styled.div<{ width: number }>`
  width: ${(props) => props.width}%;
  background-color: #${(props) => props.color};
`;
export const NowColorWrap = styled.div`
  margin-top: 10px;
`;
export const NowColorInfo = styled.div`
  font-size: 20px;
  display: flex;
  justify-content: space-between;
`;
export const ColorValue = styled.div``;
export const ColorPersent = styled.div``;
export const NowColor = styled.div`
  margin-top: 5px;
  background-color: #${(props) => props.color};
  height: 20px;
  transition: 500ms all;
`;
