import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Logo } from "../../components/Logo";
import { TextButton } from "../../components/TextButton";

import { Container, Form, Image } from "./styles";
import { FiLock, FiMail ,FiUser} from "react-icons/fi";

export function SignIn() {
  return (
    <Container>
      <Form>
        <div className="title">
          <Logo />
          <p>Fotos e Informações de Carros Antigos do Brasil</p>
        </div>

        <h1>Crie sua Conta</h1>

        <Input placeholder="Nome" icon={FiUser} />
        <Input placeholder="E-mail" icon={FiMail} />
        <Input placeholder="Senha" icon={FiLock} />

        <Button name="Cadastrar" />

        <TextButton title="Voltar para login" />
      </Form>

      <Image>
<img src="https://source.unsplash.com/800x600/?car" alt="" />


      </Image>
    </Container>
  );
}
