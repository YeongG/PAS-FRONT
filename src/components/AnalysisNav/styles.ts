import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
`;

export const NavItem = styled.div`
  flex: 1;
  font-size: 15px;
  font-weight: bold;
  transition: 250ms all;
  text-align: center;
  padding-bottom: 10px;
  border-bottom: 2px solid transparent;
  cursor: pointer;

  &:hover {
    border-bottom: 2px solid rgb(66, 132, 243);
  }
`;
