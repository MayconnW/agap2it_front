import styled, { css } from "styled-components";
import arrow from "assets/images/location/title-arrow.svg";
import Color from "color";
import DefaultMap from "./Map";

export const Container = styled.div`
  background-color: #383838;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 1060px) {
    flex-direction: column;
  }
`;

export const Map = styled(DefaultMap)``;

export const MapContainer = styled.div`
  display: flex;
  @media only screen and (max-width: 860px) {
    flex-direction: column;
    width: 100%;
    overflow: hidden;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  h3 {
    align-self: flex-start;
    color: ${`${Color("#e6e6e6")
      .darken(0.5)
      .hex()}`};
    font-size: 3.5rem;
    margin-left: 25px;
    text-transform: uppercase;
    font-weight: bold;
  }
  @media only screen and (max-width: 860px) {
    > h3 {
      font-size: 2.4rem;
    }
  }
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #4f4f51;
  max-width: 340px;
  padding: 10px 15px;
  height: fit-content;
  h3 {
    color: #fff;
    font-size: 3rem;
    margin-bottom: 2rem;
    max-width: 100%;
    position: relative;
    text-align: right;
    text-transform: uppercase;
    font-weight: 500;
    &::before {
      content: url(${arrow});
      position: absolute;
      left: 0;
      top: 0;
      transform: translateY(-5px) translateX(-18px);
    }
  }

  p {
    color: #fff;
    line-height: 1.67;
    margin-bottom: 3rem;
    max-width: 100%;
    text-align: right;
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 1.4;
  }

  @media only screen and (max-width: 1060px) {
    max-width: 100%;
    h3 {
      text-align: center;
    }
    p {
      text-align: center;
    }
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  margin-right: 140px;
  width: 265px;
  > h4 {
    color: #ffcd00;
    font-size: 2rem;
    margin-bottom: 20px;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 860px) {
    width: 100%;
    transform: translateY(-70px);
    align-items: center;
  }
`;

export const CityDetails = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  &::after {
    content: "";
    background-color: #ffcd00;
    position: absolute;
    bottom: 0;
    right: 0;
    top: 16px;
    transform: translateX(40px);
    width: 0.2rem;
  }
  > ul {
    margin-top: 60px;
    list-style-type: none;
    position: relative;

    &::after {
      content: "";
      background-color: #383838;
      position: absolute;
      bottom: 0;
      right: 0;
      top: 16px;
      transform: translateX(40px) translateY(-1px);
      width: 0.2rem;
      z-index: 1;
      height: calc(100% + 1px);
    }

    li {
      color: #fff;
      &:first-child {
        position: relative;
        color: #ffcd00;
        &::after {
          background-color: #ffcd00;
          content: "";
          height: 0.2rem;
          position: absolute;
          top: 50%;
          right: 0;
          width: 35px;
          transform: translateX(40px);
        }
      }
    }
  }
`;

export const City = styled.h4`
  color: ${({ selected }) => (selected ? "#ffcd00" : "#fff")};
  font-size: 1.2rem;
  position: relative;
  cursor: pointer;

  &::before {
    opacity: ${({ eraseLine }) => (eraseLine ? 1 : 0)};
    content: "";
    background-color: #383838;
    position: absolute;
    bottom: 0;
    right: 0;
    top: 16px;
    transform: translateX(40px) translateY(-2px);
    width: 0.2rem;
    z-index: 1;
    height: 28px;
  }

  &::after {
    opacity: ${({ selected }) => (selected ? 1 : 0)};
    background-color: #ffcd00;
    content: "";
    height: 0.2rem;
    position: absolute;
    top: 50%;
    right: 0;
    width: 35px;
    transform: translateX(40px);
  }
`;

export const List = styled.ul`
  li {
    color: "#dada55";
  }
`;
