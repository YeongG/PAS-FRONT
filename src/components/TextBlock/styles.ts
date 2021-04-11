import styled from "styled-components";

export const Container = styled.div`
  padding: 5px;

  & + & {
    margin-top: 5px;
  }
`;

export const Text = styled.div`
  font-weight: bold;
`;
