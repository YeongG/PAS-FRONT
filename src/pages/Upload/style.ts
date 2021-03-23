import styled, { css, keyframes } from "styled-components";

export const rotate = keyframes`
  0% {
    transform:rotate(0deg);
  }
  100% {
    transform:rotate(360deg);
  }
`;

export const BackgroundImg = styled.div<{
  imgSrc: string;
  isLoading?: boolean;
}>`
  background-size: contain;
  position: absolute;
  width: 200px;
  height: 200px;
  background: url(${(props) => props.imgSrc}) no-repeat center;
  opacity: 0;
  transition: 0.3s all;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }

  ${(props) =>
    props.isLoading &&
    css`
      opacity: 1;
      animation: ${rotate} 2.1s infinite;
    `}
`;
export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  align-items: center;
  position: relative;
`;

export const ImgIcon = styled.img`
  width: 100px;
`;
export const HiddenInput = styled.input`
  display: none;
`;

export const Title = styled.div`
  font-weight: lighter;
  font-size: 55px;
  transition: 250ms all;

  @media (max-width: 1200px) {
    font-size: 40px;
  }
`;
