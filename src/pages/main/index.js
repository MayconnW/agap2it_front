import React from "react";

import Presentation from "components/Presentation";
import Badges from "components/Badges";
import Location from "components/Location";
import CardProfile from "components/Profile";
import { Container, SpecialLine } from "./style";

export default function main() {
  return (
    <Container>
      <SpecialLine>
        <CardProfile />
      </SpecialLine>
      <Presentation />
      <Badges id="badges" />
      <Location />
    </Container>
  );
}
