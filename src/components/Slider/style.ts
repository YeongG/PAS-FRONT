import styled, { css, keyframes } from "styled-components";

const slideUp = keyframes`
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
`;

const slideDown = keyframes`
  0% {
    opacity:1;
  }
  100% {
    opacity:0;
    visibility:hidden;
  }
`;
export const Container = styled.div`
  position: fixed;
  transform: translateY(-50%);
  top: 50%;
  left: 150px;
  width: 100px;
  height: 300px;
  z-index: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${slideUp} 0.5s;

  @media (max-width: 1200px) {
    animation: ${slideDown} 0.5s forwards;
  }
`;

export const IconImg = styled.img<{ isActive?: boolean }>`
  width: 60px;
  height: 60px;
  opacity: 0.4;
  margin: 10px 0;
  transition: 250ms all;

  ${(props) =>
    props.isActive &&
    css`
      opacity: 1;
      transform: scale(1.2);
    `};
`;
