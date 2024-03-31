import Form from "../../components/Form/Form";
import Header from "../../components/Header/Header";
import Container from "./AgendarConsulta.styles";

export default function AgendarConsulta() {
  return (
    <>
      <Header
        navs="Home > Agendar Consulta"
        title="Agendar Consulta"
        discription="Recupere seu pokemon em 5 minutos"
      />
      <Container>
        <Form title="Preencha o formulário abaixo para agendar sua consulta" />
      </Container>
    </>
  );
}
