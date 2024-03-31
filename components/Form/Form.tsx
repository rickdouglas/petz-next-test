import React, { useEffect, useState } from "react";
import {
  FormContainer,
  FormDivider,
  FormEndData,
  FormEndDiscription,
  FormEndDiv,
  FormGroup,
  FormInput,
  FormLabel,
  FormPokemonSelect,
  FormRegisterDiscription,
  FormRegisterTitle,
  FormRowDiv,
  FormSelect,
  FormTitle,
  FormTotal,
} from "../Form/Form.styles";
import Button from "../Button/Button";

interface FormProps {
  title: string;
  $taxa?: boolean;
}
type City = {
  name: string;
};

type Region = {
  name: string;
};

type Pokemon = {
  name: string;
};

const Form: React.FC<FormProps> = ({ title, $taxa }) => {
  const [regions, setRegions] = useState<Region[]>([]);
  const [cities, setCities] = useState<City[]>([]);
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const [dates, setDates] = useState([]);
  const [times, setTimes] = useState([]);

  useEffect(() => {
    const fetchRegions = async () => {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/region/");
        const data = await response.json();
        setRegions(data.results);
      } catch (error) {
        console.error("Error fetching regions:", error);
      }
    };

    fetchRegions();
  }, []);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/location/?limit=100"
        );
        const data = await response.json();
        setCities(data.results);
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    };

    fetchCities();
  }, []);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon/?limit=300"
        );
        const data = await response.json();
        setPokemon(data.results);
      } catch (error) {
        console.error("Error fetching pokemon:", error);
      }
    };

    fetchPokemon();
  }, []);

  useEffect(() => {
    const fetchDates = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/scheduling/date"
        );
        const data = await response.json();
        setDates(data);
      } catch (error) {
        console.error("Error fetching dates:", error);
      }
    };

    fetchDates();
  }, []);

  useEffect(() => {
    const fetchTimes = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/scheduling/time",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({}),
          }
        );
        const data = await response.json();
        setTimes(data);
      } catch (error) {
        console.error("Error fetching times:", error);
      }
    };

    fetchTimes();
  }, []);

  return (
    <FormContainer>
      <FormTitle>{title}</FormTitle>
      <FormRowDiv>
        <FormGroup>
          <FormLabel htmlFor="name">Nome</FormLabel>
          <FormInput placeholder="Digite seu nome" type="text" id="name" />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="sobrenome">Sobrenome</FormLabel>
          <FormInput
            placeholder="Digite seu sobrenome"
            type="text"
            id="surname"
          />
        </FormGroup>
      </FormRowDiv>
      <FormRowDiv>
        <FormGroup>
          <FormLabel htmlFor="regiao">Regiao</FormLabel>
          <FormSelect id="regiao">
            <option value="">Selecione sua regiao</option>
            {regions.map((region, index) => (
              <option key={index} value={region.name}>
                {region.name}
              </option>
            ))}
          </FormSelect>
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="cidade">Cidade</FormLabel>
          <FormSelect id="cidade">
            <option value="">Selecione sua cidade</option>
            {cities.map((city, index) => (
              <option key={index} value={city.name}>
                {city.name}
              </option>
            ))}
          </FormSelect>
        </FormGroup>
      </FormRowDiv>
      <FormRegisterTitle>Cadastre seu time</FormRegisterTitle>
      <FormRegisterDiscription>
        Atendemos até 6 pokemons por vez
      </FormRegisterDiscription>
      <FormRowDiv>
        <FormLabel htmlFor="pokemon">Pokemon 1</FormLabel>
        <FormPokemonSelect>
          <option value="">Selecione seu pokemon</option>
          {pokemon.map((poke, index) => (
            <option key={index} value={poke.name}>
              {poke.name}
            </option>
          ))}
        </FormPokemonSelect>
      </FormRowDiv>
      <FormRowDiv>
        <FormLabel htmlFor="pokemon">Pokemon 2</FormLabel>
        <FormPokemonSelect>
          <option value="">Selecione seu pokemon</option>
          {pokemon.map((poke, index) => (
            <option key={index} value={poke.name}>
              {poke.name}
            </option>
          ))}
        </FormPokemonSelect>
      </FormRowDiv>
      <Button $secondary text="Adicionar um novo pokemon ao time... +" />
      <FormRowDiv>
        <FormGroup>
          <FormLabel htmlFor="data">Data para atendimento</FormLabel>
          <FormSelect id="data">
            <option value="">Selecione uma data</option>
            {dates.map((date, index) => (
              <option key={index} value={date}>
                {date}
              </option>
            ))}
          </FormSelect>
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="time">Horario de atendimento</FormLabel>
          <FormSelect id="time">
            <option value="">Selecione um horário</option>
            {times.map((time, index) => (
              <option key={index} value={time}>
                {time}
              </option>
            ))}
          </FormSelect>
        </FormGroup>
      </FormRowDiv>
      <FormDivider />
      <FormEndDiv>
        <FormEndDiscription>
          Numero de pokemons a serem atendidos
        </FormEndDiscription>
        <FormEndData>01</FormEndData>
      </FormEndDiv>
      <FormEndDiv>
        <FormEndDiscription>
          Atendimento unitário por pokémon:
        </FormEndDiscription>
        <FormEndData>R$ 70.00</FormEndData>
      </FormEndDiv>
      <FormEndDiv>
        <FormEndDiscription>Subtotal</FormEndDiscription>
        <FormEndData>R$ 70.00</FormEndData>
      </FormEndDiv>
      <FormEndDiv>
        <FormEndDiscription>Taxa geracional</FormEndDiscription>
        <FormEndData>R$ 2.10</FormEndData>
      </FormEndDiv>
      <FormEndDiv>
        <FormEndDiscription $taxa>
          *adicionamos uma taxa de 3%, multiplicado pelo número da geração mais
          alta do time, com limite de até 30%
        </FormEndDiscription>
      </FormEndDiv>
      <FormEndDiv>
        <FormTotal>Valor Total: R$ 72.10</FormTotal>
        <Button text="Concluir Agendamento" />
      </FormEndDiv>
    </FormContainer>
  );
};

export default Form;
