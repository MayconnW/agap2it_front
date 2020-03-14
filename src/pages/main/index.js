import React from "react";

// import { Container } from './styles';
import Presentation from "components/Presentation";
import Badges from "components/Badges";
import Location from "components/Location";

export default function main() {
  return (
    <>
      <Presentation />
      <Badges id="badges" />
      <Location />
    </>
  );
}
