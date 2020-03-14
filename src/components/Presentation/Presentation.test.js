import React from "react";
import { render } from "@testing-library/react";
import Presentation from "./index";

test("render Presentation", () => {
  const { getByText } = render(<Presentation />);
  const linkElement = getByText(/Think 2Morrow/i);
  expect(linkElement).toBeInTheDocument();
});
