import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > h3 {
    align-self: flex-start;
    color: #e6e6e6;
    font-size: 3.5rem;
    margin-left: 25px;
    text-transform: uppercase;
    font-weight: bold;
  }
`;

export const List = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  > div {
    > img {
      height: fit-content;
      &:hover {
        animation: grow 200ms ease infinite alternate;
      }
    }
    height: 200px;
    width: calc(100% / 5);
    display: flex;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 1060px) {
      width: calc(100% / 4);
    }
    @media only screen and (max-width: 720px) {
      width: calc(100% / 3);
    }
  }

  @media only screen and (max-width: 594px) {
    flex-wrap: nowrap;
    flex-direction: column;
    justify-content: flex-start;
    > div {
      width: 100%;
      height: 110px;
    }
  }
  @keyframes grow {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.1);
    }
  }
`;
