import React from "react";
import { Buttons, ButtonSpan } from "./Button.styles";

interface ButtonProps {
  $primary?: boolean;
  $secondary?: boolean;
  logo?: boolean;
  text: string;
  id?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  $primary,
  $secondary,
  logo,
  text,
  id,
  onClick,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <Buttons
      id={id}
      $primary={$primary}
      $secondary={$secondary}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      {logo && <img src="/images/white-pokeball.svg" alt="Logo" />}
      <ButtonSpan>{text}</ButtonSpan>
    </Buttons>
  );
};

export default Button;
