import React from "react";
import PropTypes from "prop-types";

import { Wrapper, Container, Content, Demo } from "./style";

export default function Connected({ children }) {
  return (
    <Wrapper>
      <Container>
        <Content>{children}</Content>
        <Demo>
          <span>Cópia Cópia Cópia</span>
        </Demo>
      </Container>
    </Wrapper>
  );
}

Connected.propTypes = {
  children: PropTypes.element.isRequired,
};
