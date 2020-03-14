import styled from "styled-components";
import BgTwo from "assets/images/two-gray.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  &::after {
    content: "";
    position: absolute;
    background-image: url(${BgTwo});
    background-position: top right;
    background-size: contain;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    opacity: 0.5;
  }
`;

export const Content = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100vh;
  h1 {
    font-weight: 700;
    font-size: 4rem;
    color: #fff;
    margin: 0;
    margin-bottom: 2rem;
    padding: 8rem 0 1.5rem 4.5rem;
    line-height: 1;
    text-transform: uppercase;
    width: fit-content;
    border-bottom: 0.5rem solid #ffcd00;
    > i {
      line-height: 1;
      color: #ffcd00;
      font-style: normal;
      font-size: 5.5rem;
    }
  }
  @media only screen and (max-width: 860px) {
    h1 {
      font-size: 2.5rem;
    }
  }

  @media only screen and (max-width: 540px) {
    h1 {
      font-size: 1.8rem;
    }
  }

  @media only screen and (max-width: 440px) {
    h1 {
      font-size: 1.4rem;
    }
  }
`;

export const MoreContentContainer = styled(AnchorLink)`
  position: absolute;
  left: 50%;
  bottom: 10px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  > img {
    animation: moreContentArrow 2s linear 0s infinite;
    height: 1.3rem;
    width: 2.5rem;
    & + img {
      animation: moreContentArrow 2s linear 0.1s infinite;
      & + img {
        animation: moreContentArrow 2s linear 0.2s infinite;
      }
    }
  }

  @keyframes moreContentArrow {
    0% {
      opacity: 0;
    }
    50%,
    100% {
      opacity: 0.8;
    }
  }
`;

export const Description = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  position: absolute;
  top: 50%;
  > div {
    max-width: 1440px;
    p {
      font-size: 1.6rem;
      font-weight: 400;
      line-height: 1.8;
      margin: 0 1rem 1rem 1rem;
      color: #fff;
    }
  }
  @media only screen and (max-width: 860px) {
    > div {
      p {
        font-size: 1.2rem;
        line-height: 1.3;
      }
    }
  }

  @media only screen and (max-width: 440px) {
    > div {
      p {
        font-size: 1rem;
        line-height: 1.1;
      }
    }
  }
`;

export const VideoContainer = styled.div`
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  opacity: 1;
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
