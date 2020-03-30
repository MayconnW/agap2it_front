import React from "react";

import BgVideo from "assets/videos/video_bg_site.mp4";
import ArrowDown from "assets/images/more-content-below.svg";
import {
  Container,
  Content,
  VideoContainer,
  Description,
  MoreContentContainer,
} from "./styles";

export default function Presentation() {
  return (
    <Container>
      <Content>
        <h1>
          Lorem <i>2</i>Ipsum
        </h1>
        <Description>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
          </div>
        </Description>
        <MoreContentContainer href="#badges">
          <img src={ArrowDown} alt="Arrow Down" />
          <img src={ArrowDown} alt="Arrow Down" />
          <img src={ArrowDown} alt="Arrow Down" />
        </MoreContentContainer>
      </Content>
      <VideoContainer>
        <video autoPlay="autoplay" loop="loop" muted>
          <source src={BgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </VideoContainer>
    </Container>
  );
}
