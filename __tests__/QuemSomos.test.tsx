import { render } from "@testing-library/react";
import QuemSomos from "../pages/quem-somos/index";

describe("QuemSomos", () => {
  test("Should render correctly", () => {
    const { getByTestId } = render(<QuemSomos />);
    expect(getByTestId("quem-somos"));
  });
});
