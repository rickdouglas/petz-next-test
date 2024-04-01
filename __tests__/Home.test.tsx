import React from "react";
import { render } from "@testing-library/react";
import Home from "../pages/index";

describe("Home", () => {
  test("Should render correctly", () => {
    const { getByTestId } = render(<Home />);
    expect(getByTestId("home-page"));
  });

  test("should render background image", () => {
    const { getByTestId } = render(<Home />);
    expect(getByTestId("background-image"));
  });
});
