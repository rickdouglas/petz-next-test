import React from "react";
import { ModalContainer, ModalDiscrption, ModalTitle } from "./Modal.styles";
import Button from "../Button/Button";

interface ModalProps {
  date: string;
  time: string;
  quantity: number;
}

const Modal: React.FC<ModalProps> = ({ date, time, quantity }) => {
  return (
    <ModalContainer>
      <ModalTitle>Consulta Agendada</ModalTitle>

      <ModalDiscrption>
        {`Seu agendamento para dia ${date}, às ${time}, para ${quantity}x pokémons foi
        realizado com sucesso!`}
      </ModalDiscrption>
      <Button id="schedule" text="Fazer novo agendamento" />
    </ModalContainer>
  );
};

export default Modal;
