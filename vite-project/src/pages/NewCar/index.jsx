import { Container, Form } from "./styles";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { TextButton } from "../../components/TextButton";
import { IoIosImages } from "react-icons/io";
export function NewCar() {
  return (

    <Container>
      <Header/>

<Form>
<div className="title">
<h1>Adicionar Carro</h1>
<TextButton title="Voltar"/>
</div>

<label htmlFor="imgCar">

  <div>
  <h1>Foto do Veículo</h1>
  <IoIosImages />

<input type="file" id="imgCar" />


  </div>

</label>

</Form>
    </Container>
  
);
}
