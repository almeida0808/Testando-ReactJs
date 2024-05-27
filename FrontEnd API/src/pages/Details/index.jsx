import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { TextButton } from "../../components/TextButton";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";
import { Logo } from "../../components/Logo";

export function Details({ 
  infos = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
`,marca, modelo,}) {
  return (
    <Container>
      <Header />
      <main>
        
      <Content>
        
      <TextButton title="Deletar Veículo" />

        <div className="title">
          <h1>{marca}</h1>-<h1>{modelo}</h1>
        </div>
        <img
          src="https://source.unsplash.com/800x600/?car"
          alt=""
        />

        <Section title="Informações">
        <p className="infos">{infos}</p>


        <Button name="Voltar"></Button>
        </Section>



      </Content>
 
      </main>


    </Container>
  );
}
