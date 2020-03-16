import React from "react";

import { Container, Box, Avatar } from "./style";

export default function Profile() {
  function handleClick() {
    window.open(
      "https://drive.google.com/open?id=1p52RGySo6YLlfPXpi0Rn0Vy9WVHfxl3H",
      "_blank"
    );
  }

  return (
    <Container onClick={handleClick}>
      <Avatar src="https://avatars2.githubusercontent.com/u/12786786?s=460&u=37e48d6384e514848f1273e4d79395937b758812&v=4" />
      <Box>
        <span>Developed By</span>
        <h3>Mayconn Oliveira</h3>
      </Box>
    </Container>
  );
}
