import { Container, Side, Content, Search, AddButton, Brand } from "./styles";
import { Logo } from "../../components/Logo";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Card } from "../../components/Cards";
import { FiPlus, FiSearch } from "react-icons/fi";
import { Section } from "../../components/Section";
import { TextButton } from "../../components/TextButton";
export function Home() {
  return (
    <Container>
      <Brand>
        <Logo />
      </Brand>

      <Side>
      
<TextButton title="JavaScript" isactived/>
<TextButton title="Node"/>
<TextButton title="React"/>
<TextButton title="SQL"/>


   

      </Side>
      <AddButton typeof="button">
        <FiPlus />
        <p>Adicionar Veículo</p>
      </AddButton>
   
      <Header />

      <Search>
        <Input placeholder="Pesquisar pelo título" icon={FiSearch} />
      </Search>

      <Content className="content">
        <Section title="Carros">
            <div className="cards">
          <Card href="/"
            imgLink="https://source.unsplash.com/800x600/?car"
            name="Monza"
            modelo="Gts 1.6v"
          />
          <Card href="/"
            imgLink="https://source.unsplash.com/800x600/?car"
            name="Monza"
            modelo="Gts 1.6v"
          />
          <Card href="/"
            imgLink="https://source.unsplash.com/800x600/?car"
            name="Monza"
            modelo="Gts 1.6v"
          />
          <Card href="/"
            imgLink="https://source.unsplash.com/800x600/?car"
            name="Monza"
            modelo="Gts 1.6v"
          />
          </div>
        </Section>
      </Content>
    </Container>
  );
}
