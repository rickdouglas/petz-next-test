import React, { useState } from "react";
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
} from "../Form/Form.styles"; // Import the missing component
import Button from "../Button/Button";

interface FormProps {
  title: string; // Define the title prop
  $taxa?: boolean;
}

const Form: React.FC<FormProps> = ({ title, $taxa }) => {
  // Pass the title prop to the component
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
            <option value="regiao1">Região 1</option>
            <option value="regiao2">Região 2</option>
          </FormSelect>
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="cidade">Cidade</FormLabel>
          <FormSelect id="cidade">
            <option value="">Selecione sua cidade</option>
            <option value="cidade1">Cidade 1</option>
            <option value="cidade2">Cidade 2</option>
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
          <option value="pokemon">Selecione seu pokemon</option>
          <option value="cidade1">Cidade 1</option>
          <option value="cidade2">Cidade 2</option>
        </FormPokemonSelect>
      </FormRowDiv>
      <FormRowDiv>
        <FormLabel htmlFor="pokemon">Pokemon 2</FormLabel>
        <FormPokemonSelect>
          <option value="pokemon">Selecione seu pokemon</option>
          <option value="cidade1">Cidade 1</option>
          <option value="cidade2">Cidade 2</option>
        </FormPokemonSelect>
      </FormRowDiv>
      <Button $secondary text="Adicionar um novo pokemon ao time... +" />
      <FormRowDiv>
        <FormGroup>
          <FormLabel htmlFor="data">Data para atendimento</FormLabel>
          <FormSelect id="data">
            <option value="">Selecione uma data</option>
            <option value="regiao1">Região 1</option>
            <option value="regiao2">Região 2</option>
          </FormSelect>
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="time">Horario de atendimento</FormLabel>
          <FormSelect id="time">
            <option value="">Selecione um horario</option>
            <option value="cidade1">Cidade 1</option>
            <option value="cidade2">Cidade 2</option>
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
