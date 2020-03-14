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
          Think <i>2</i>morrow
        </h1>
        <Description>
          <div>
            <p>
              Fundada em Setembro de 2005, a agap2IT é uma organização europeia
              na área dos Sistemas de Informação, Ciência e Tecnologia.
              Empenhada na inovação, a agap2IT está orientada para a criação de
              um verdadeiro valor para os seus Clientes e Consultores.
            </p>
            <p>
              A capacidade de intervir globalmente aliada à elevada experiência
              e know-how técnico, funcional e de negócio da equipa, garantem a
              excelência da resposta aos mais exigentes e complexos desafios.
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
