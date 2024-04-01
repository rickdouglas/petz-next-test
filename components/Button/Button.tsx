import React from "react";
import { Buttons } from "./Button.styles";

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
      {logo && (
        <img
          src="/images/white-pokeball.svg"
          alt="Logo"
          style={{ paddingRight: "0.5rem" }}
        />
      )}
      <span>{text}</span>
    </Buttons>
  );
};

export default Button;
