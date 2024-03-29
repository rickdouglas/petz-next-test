// Home.tsx
import React, { useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
import Header from "../components/Header";

// Estilo para o container da tela Home
const Container = styled.div`
  position: relative; /* Para posicionar a imagem de fundo */
`;

// Estilo para a imagem de fundo
const BackgroundImage = styled.img`
  position: absolute;
  width: 100%;
  height: 720px;
  top: 103px;
  gap: 0px;
  opacity: 0.7; /* Opacidade reduzida para efeito de fundo */
`;

const Home: React.FC = () => {
  const [expandedLogo, setExpandedLogo] = React.useState(true);

  useEffect(() => {
    // Reduz o logotipo após 5 segundos
    const timer = setTimeout(() => {
      setExpandedLogo(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Container>
      <Header />
      {/* Imagem de fundo */}
      <BackgroundImage
        src="/images/pokemon-hero.jpg"
        alt="Pokemon Hero Image"
      />
      {/* Outros elementos da tela Home */}
    </Container>
  );
};

export default Home;
