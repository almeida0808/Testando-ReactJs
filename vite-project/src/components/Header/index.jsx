import { Profile, Container } from "./styles";
import { FaPowerOff } from "react-icons/fa6";

export function Header() {
  return (
    <Container>
      <Profile>
        <img
          src="https://avatars.githubusercontent.com/u/144072612?v=4"
          alt=""
        />
        <div>
          <p>Bem vindo,</p>
          <h3>Lucas Almeida</h3>
        </div>
      </Profile>

      <button>
      <FaPowerOff />

      </button>
    </Container>
  );
}
