import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Button from "../Button/Button";
import { ButtonContainer } from "../Button/Button.styles";
import { NavbarContainer } from "./Navbar.styles";

function Navbar() {
  const router = useRouter();
  const [showLogo, setShowLogo] = useState(true);
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(false);
      setShowLogo(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleMouseEnter = () => {
    setShowText(true);
    setShowLogo(true);
  };

  const handleMouseLeave = () => {
    setShowText(false);
  };

  return (
    <NavbarContainer>
      <Button
        logo
        onClick={() => router.push("/")}
        text={showLogo && showText ? "Centro Pokemon" : ""}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      <div>
        <ButtonContainer>
          <Button
            $primary
            onClick={() => router.push("/quem-somos")}
            text="Quem Somos"
          />
          <Button
            onClick={() => router.push("/agendar-consulta")}
            text="Agendar Consulta"
          />
        </ButtonContainer>
      </div>
    </NavbarContainer>
  );
}

export default Navbar;
