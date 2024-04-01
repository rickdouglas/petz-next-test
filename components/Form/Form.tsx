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
import Modal from "../Modal/Modal";
import useFetchData from "../../hooks/useFetchData";
import { useForm } from "react-hook-form";

interface FormProps {
  title: string;
  $taxa?: boolean;
}

const Form: React.FC<FormProps> = ({ title, $taxa }) => {
  const { regions, cities, pokemon, dates, times } = useFetchData();
  const [pokemonCount, setPokemonCount] = useState<number>(1);
  const [total, setTotal] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const { register, handleSubmit, setValue } = useForm();

  const handleDateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDate(event.target.value);
    setValue("selectedDate", event.target.value);
  };

  const handleTimeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTime(event.target.value);
    setValue("selectedTime", event.target.value);
  };

  useEffect(() => {
    setTotal(72.1 * pokemonCount);
  }, [pokemonCount]);

  const onSubmit = (event: React.FormEvent, data: any) => {
    event.preventDefault();
    console.log(data);
    setShowModal(true);
  };
  const handleAddPokemon = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (pokemonCount < 6) {
      setPokemonCount(pokemonCount + 1);
    }
  };

  return (
    <FormContainer>
      <FormTitle>{title}</FormTitle>
      <FormRowDiv>
        <FormGroup>
          <FormLabel htmlFor="name">Nome</FormLabel>
          <FormInput
            placeholder="Digite seu nome"
            type="text"
            id="name"
            {...register("name")}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="sobrenome">Sobrenome</FormLabel>
          <FormInput
            placeholder="Digite seu sobrenome"
            type="text"
            id="surname"
            {...register("sobrenome")}
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
      {Array.from({ length: pokemonCount }, (_, index) => (
        <FormRowDiv key={index}>
          <FormLabel htmlFor={`pokemon${index + 1}`}>
            Pokemon {index + 1}
          </FormLabel>
          <FormPokemonSelect>
            <option value="">Selecione seu pokemon</option>
            {pokemon.map((poke, index) => (
              <option key={index} value={poke.name}>
                {poke.name}
              </option>
            ))}
          </FormPokemonSelect>
        </FormRowDiv>
      ))}
      <Button
        onClick={handleAddPokemon}
        id="add-pokemon"
        $secondary
        text="Adicionar um novo pokemon ao time... +"
      />
      <FormRowDiv>
        <FormGroup>
          <FormLabel htmlFor="data">Data para atendimento</FormLabel>
          <FormSelect
            id="data"
            value={selectedDate}
            {...register("selectedDate", {
              onChange: handleDateChange,
            })}
          >
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
          <FormSelect
            id="time"
            value={selectedDate}
            {...register("selectedTime", {
              onChange: handleTimeChange,
            })}
          >
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
        <FormEndData>{pokemonCount}</FormEndData>
      </FormEndDiv>
      <FormEndDiv>
        <FormEndDiscription>
          Atendimento unitário por pokémon:
        </FormEndDiscription>
        <FormEndData>R$ 70.00</FormEndData>
      </FormEndDiv>
      <FormEndDiv>
        <FormEndDiscription>Subtotal</FormEndDiscription>
        <FormEndData>{`R$ ${70 * pokemonCount.toFixed(2)}`}</FormEndData>
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
        <FormTotal>{`Valor Total: R$ ${total.toFixed(2)}`}</FormTotal>
        <Button onClick={onSubmit} id="schedule" text="Concluir Agendamento" />
        {showModal && (
          <Modal
            date={selectedDate}
            time={selectedTime}
            quantity={pokemonCount}
          />
        )}
      </FormEndDiv>
    </FormContainer>
  );
};

export default Form;
