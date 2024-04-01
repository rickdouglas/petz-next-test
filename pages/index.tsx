import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  min-height: 100vh;
`;

const BackgroundImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.8;
`;

const CenteredTextDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const Text = styled.h2`
  font-size: 24px;
  color: #ffffff;
`;

export default function Home() {
  return (
    <Container data-testid="home-page">
      <BackgroundImage
        data-testid="background-image"
        src="/images/pokemon-hero.jpg"
        alt="Pokemon Hero Image"
      />
      <CenteredTextDiv>
        <Text>
          Cuidamos bem do seu pokémon,
          <br />
          para ele cuidar bem de você
        </Text>
      </CenteredTextDiv>
    </Container>
  );
}
