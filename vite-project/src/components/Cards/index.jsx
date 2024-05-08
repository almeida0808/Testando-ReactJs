import { Container } from "./styles";
export function Card({ name, modelo, imgLink, ...rest }) {
  return (
    <Container {...rest}>
      <img src={imgLink} alt="" />

      <div className="description">
        <h2>{name}</h2>
        <p>{modelo}</p>
      </div>
    </Container>
  );
}
