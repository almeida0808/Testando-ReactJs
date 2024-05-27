import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Logo } from "../../components/Logo";
import { TextButton } from "../../components/TextButton";

import { Container, Form, Image } from "./styles";
import { FiLock, FiMail } from "react-icons/fi";

export function SignUp() {
  return (
    <Container>
      <Form>
        <div className="title">
          <Logo />
          <p>Fotos e Informações de Carros Antigos do Brasil</p>
        </div>

        <h1>Faça seu login</h1>

        <Input placeholder="E-mail" icon={FiMail} />
        <Input placeholder="Usuário" icon={FiLock} />

        <Button name="Entrar" />

        <TextButton title="Criar Conta" />
      </Form>

      <Image>
<img src="https://source.unsplash.com/800x600/?car" alt="" />


      </Image>
    </Container>
  );
}
