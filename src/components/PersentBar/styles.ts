import styled from "styled-components";

export const Container = styled.div`
  padding: 5px;
  width: 100%;
  box-sizing: border-box;
  transition: 250ms all;
  &:hover {
    background-color: rgb(232, 245, 233);
  }
`;

export const InfoWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Name = styled.div``;
export const Persent = styled.div`
  font-weight: bold;
`;
export const ProgressBar = styled.div<{ persent: number }>`
  background-color: rgb(224, 224, 224);
  position: relative;
  height: 4px;
  margin-top: 5px;

  &::before {
    content: "";
    z-index: 1;
    width: 100%;
    height: 100%;
    left: 0;
    display: block;
    width: ${(props) => props.persent}%;
    background-color: rgb(15, 157, 88);
    position: absolute;
  }
`;
