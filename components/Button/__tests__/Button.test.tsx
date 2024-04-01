import { render, fireEvent } from "@testing-library/react";
import Button from "../Button";

describe("Button", () => {
  test("should call onClick when clicked", () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <Button text="Click me" onClick={handleClick} />
    );
    const button = getByText("Click me");

    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalled();
  });

  test("should call onMouseEnter and onMouseLeave when hovered over and out", () => {
    const handleMouseEnter = jest.fn();
    const handleMouseLeave = jest.fn();
    const { getByText } = render(
      <Button
        text="Hover me"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    );
    const button = getByText("Hover me");

    fireEvent.mouseEnter(button);
    expect(handleMouseEnter).toHaveBeenCalled();

    fireEvent.mouseLeave(button);
    expect(handleMouseLeave).toHaveBeenCalled();
  });
});
