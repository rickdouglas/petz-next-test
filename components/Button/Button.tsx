import React from "react";
import { Buttons, ButtonContainer, ButtonSpan } from "./Button.styles";

interface ButtonProps {
  $primary?: boolean;
  logo?: boolean;
  text: string;
  onClick: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  $primary,
  logo,
  text,
  onClick,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <Buttons
      $primary={$primary}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      {logo && <img src="/images/white-pokeball.svg" alt="Logo" />}{" "}
      <ButtonSpan>{text}</ButtonSpan>
    </Buttons>
  );
};

export default Button;
