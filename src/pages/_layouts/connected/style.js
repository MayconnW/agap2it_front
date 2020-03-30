import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 100vh;
`;

export const Container = styled.div`
  position: relative;
`;

export const Content = styled.div``;

export const Demo = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  > span {
    font-size: 125px;
    transform: rotateZ(-45deg);
  }
`;
