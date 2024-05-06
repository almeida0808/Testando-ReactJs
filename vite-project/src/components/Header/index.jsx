import { Profile, Container } from "./styles";

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
        <p>X</p>
      </button>
    </Container>
  );
}
