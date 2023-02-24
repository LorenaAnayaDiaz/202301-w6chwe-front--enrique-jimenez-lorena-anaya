import React from "react";
import { Home } from "./Home";
import { render, screen } from "@testing-library/react";

test("When rendering home, the title should be displayed", () => {
  render(<Home />);
  const title = screen.getByRole("heading");
  expect(title).toBeInTheDocument();
});
