import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-areas: "Image Form";
  width: 100%;
  height: 100vh;
`;
export const Form = styled.div`
  width: 65rem;
  height: max-content;
  padding: 13rem;
  display: flex;
  flex-direction: column;

  place-self: center;
  grid-area: Form;

  > .title {
    line-height: 3.2rem;

    margin-bottom: 4.8rem;
    .logo span {
      font-size: 4.8rem;
    }

    P {
      font-family: "Sedgwick Ave Display";

      text-align: center;
      font-size: 1.6rem;
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

  > h1 {
    font-size: 2.4rem;
    text-align: center;
    font-weight: 400;
    margin-bottom: 4.8rem;
  }

  > button {
    margin-top: 2.4rem;
  }

  button:last-child {
    margin: 12.4rem auto 0;

    color: ${({ theme }) => theme.COLORS.GREEN};
  }
`;
export const Image = styled.div`
  grid-area: Image;
  overflow: hidden;

  > img {
    height: 100vh;
    width: 100%;
    object-fit: cover;
  }
`;
