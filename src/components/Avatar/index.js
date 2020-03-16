import React from "react";
import PropTypes from "prop-types";

import { Container } from "./style";

export default function Avatar({ className, src }) {
  return (
    <Container className={className}>
      <img src={src} alt="Avatar" />
    </Container>
  );
}

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Avatar.defaultProps = {
  className: "",
};
