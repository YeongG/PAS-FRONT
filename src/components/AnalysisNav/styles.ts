import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
`;

export const NavItem = styled.div<{ active: boolean }>`
  flex: 1;
  font-size: 15px;
  font-weight: bold;
  transition: 250ms all;
  text-align: center;
  padding-bottom: 10px;
  border-bottom: 4px solid transparent;
  cursor: pointer;

  ${(props) =>
    props.active &&
    css`
      border-bottom: 4px solid rgb(66, 132, 243);
    `}

  }
  &:hover {
    border-bottom: 4px solid rgb(66, 132, 243);
`;
