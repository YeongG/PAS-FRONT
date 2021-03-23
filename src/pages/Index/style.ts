import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 1200px;
  margin: 0 auto;

  @media (max-width: 1200px) {
    width: 100%;
  }
`;

export const BackgroundImg = styled.div<{ imgSrc: string }>`
  background: url(${(props) => props.imgSrc}) no-repeat center;
  background-size: cover;
  width: 200px;
  height: 200px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: 300ms all;
`;

export const LinkWrap = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &:hover {
    ${BackgroundImg} {
      opacity: 0.7;
      cursor: pointer;
    }
  }
`;

export const TextWrap = styled.div`
  font-weight: lighter;
  font-size: 60px;

  @media (max-width: 1200px) {
    font-size: 35px;
  }
`;
