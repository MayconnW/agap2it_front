import React from "react";
import PropTypes from "prop-types";

import { logos } from "./logos";

import { Container, List } from "./style";

export default function Badges({ id }) {
  return (
    <Container id={id}>
      <h3>Colaboramos com</h3>
      <List>
        {logos.map(logo => (
          <div>
            <img src={logo.src} alt={logo.alt} title={logo.title} />
          </div>
        ))}
      </List>
    </Container>
  );
}

Badges.propTypes = {
  id: PropTypes.string,
};

Badges.defaultProps = {
  id: "",
};
