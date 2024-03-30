import React from "react";
import styled from "styled-components";
import { Inter } from "@next/font/google";

const Container = styled.div`
  position: relative;
`;

const BackgroundImage = styled.img`
  position: absolute;
  margin-top: -100px;
  width: 100%;
  height: 720px;
  top: 103px;
  gap: 0px;
  opacity: 0.8;
`;

const CenteredTextDiv = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const Text = styled.p`
  font-size: 24px;
  font-family: "Inter", sans-serif;
  color: #ffffff;
`;

const Home: React.FC = () => {
  return (
    <Container>
      <BackgroundImage
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
};

export default Home;
