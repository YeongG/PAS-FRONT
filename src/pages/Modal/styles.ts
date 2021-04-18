import styled, { keyframes } from "styled-components";

const modalOnAnimate = keyframes`
  0% {
    opacity:0.5;
    transform:translateY(-100px);
  }
  100% {
    opacity:1;
    transform:translateY(0px);
  }
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 55%);
  z-index: 1;
`;

export const Modal = styled.form`
  margin: 0 auto;
  margin-top: 50px;
  width: 480px;
  background-color: white;
  position: relative;
  box-sizing: border-box;
  padding: 20px;
  border-radius: 4px;
  padding-bottom: 20px;
  animation: ${modalOnAnimate} 300ms;

  @media (max-width: 500px) {
    width: calc(100% - 20px);
  }
`;

export const Header = styled.div`
  margin: 50px 0;
`;

export const Title = styled.div`
  font-size: 26px;
  font-weight: 5 00;
  text-align: center;
`;

export const XButton = styled.div`
  position: absolute;
  top: 20px;
  cursor: pointer;
  font-size: 22px;
  right: 20px;
`;

export const AuthHelpMsg = styled.div`
  color: #606060;
  font-size: 15px;
  cursor: pointer;
  text-decoration: underline;
`;

export const AuthInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 10px 15px;
  color: #606060;
  font-size: 14px;
  border: 1px solid #e5e5e5;
  border-radius: 2px;

  & + & {
    margin-top: 15px;
  }
`;

export const AuthForm = styled.div``;
export const AuthBottom = styled.div`
  margin-top: 40px;
`;
export const AuthButton = styled.button`
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  background: black;
  border-radius: 2px;
  color: white;
  font-weight: bold;
  font-size: 14px;
`;
