import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import { Container, Form, Avatar } from "./styles";
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
export function Profile() {
  return (
    <Container>
      <header>
        <button>
          <FiArrowLeft />
        </button>
      </header>

      <Form>
        <Avatar>
          <label htmlFor="avatar">
            <img
              src="https://avatars.githubusercontent.com/u/144072612?v=4"
              alt=""
            />
            <input id="avatar" type="file" />

            <button>
              <FiCamera />
            </button>
          </label>
        </Avatar>

        <Input placeholder="Nome" icon={FiUser} />
        <Input placeholder="E-Mail" icon={FiMail} />

        <div className="password">
          <Input placeholder="Senha Atual" icon={FiLock} />
          <Input placeholder="Nova Senha" icon={FiLock} />
        </div>

        <Button name="Salvar" disabled={false} />
      </Form>
    </Container>
  );
}
