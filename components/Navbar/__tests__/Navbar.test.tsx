import { render, fireEvent } from "@testing-library/react";
import { useRouter } from "next/router";
import Navbar from "../Navbar";
jest.mock("next/router", () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn(),
  })),
}));

describe("Navbar", () => {
  test("should navigate to the correct pages when buttons are clicked", () => {
    const push = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({
      push,
    });

    const { getByText } = render(<Navbar />);
    const quemSomosButton = getByText("Quem Somos");
    const agendarConsultaButton = getByText("Agendar Consulta");

    fireEvent.click(quemSomosButton);
    expect(push).toHaveBeenCalledWith("/quem-somos");

    fireEvent.click(agendarConsultaButton);
    expect(push).toHaveBeenCalledWith("/agendar-consulta");
  });
});
