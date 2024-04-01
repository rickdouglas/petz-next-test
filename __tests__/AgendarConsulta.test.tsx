import { render } from "@testing-library/react";
import AgendarConsulta from "../pages/agendar-consulta/index";

describe("AgendarConsulta", () => {
  test("Should render correctly", () => {
    const { getByTestId } = render(<AgendarConsulta />);
    expect(getByTestId("agendar-consulta"));
  });
});
