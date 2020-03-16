import styled from "styled-components";

export const Container = styled.div``;

export const SpecialLine = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  padding-left: 25px;
  padding-right: 25px;
  z-index: 5;
  width: 300px;
  height: 10px;
  border-top: 10px solid #ffcd00;

  > div {
    top: -110px;
  }

  &:hover {
    > div {
      animation: show 300ms ease-in forwards;
    }
  }

  will-change: top;

  @keyframes show {
    0% {
      top: -110px;
    }
    100% {
      top: 0;
    }
  }
`;
