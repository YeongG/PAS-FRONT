import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px;
  & + & {
    margin-top: 5px;
  }
`;
export const Name = styled.div`
  flex: 2;
`;
export const ProgressBlockList = styled.div`
  display: flex;
  flex: 3;
  align-items: center;
`;
export const ProgressBlockItem = styled.div`
  width: 15px;
  height: 15px;

  & + & {
    margin-left: 1px;
  }
`;

export const NormalProgressBlockItem = styled(ProgressBlockItem)`
  background-color: rgb(245, 245, 245);
`;

export const SuccessProgressBlockItem = styled(ProgressBlockItem)`
  background-color: rgb(165, 214, 167);
`;

export const ProgressValue = styled.div`
  flex: 3;
`;
