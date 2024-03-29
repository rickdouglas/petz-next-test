// Header.tsx
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { HeaderContainer, Button, Logo } from "./Header.styles";

const Header: React.FC = () => {
  const [expandedLogo, setExpandedLogo] = useState(true);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setExpandedLogo(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleMouseEnter = () => {
    setShowText(true);
  };

  const handleMouseLeave = () => {
    setShowText(false);
  };

  return (
    <HeaderContainer>
      <Link href="/">
        <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <Logo
            src="/images/white-pokeball.svg"
            alt="White Pokeball Logo"
            expanded={expandedLogo}
          />
          {(showText || expandedLogo) && <span>Centro Pokemon</span>}
        </a>
      </Link>
      <div>
        <Link legacyBehavior href="/quem-somos">
          <Button isQuemSomos>Quem Somos</Button>
        </Link>
        <Link legacyBehavior href="/agendar-consulta">
          <Button>Agendar Consulta</Button>
        </Link>
      </div>
    </HeaderContainer>
  );
};

export default Header;
