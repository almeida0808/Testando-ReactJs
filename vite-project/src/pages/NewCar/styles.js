import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-areas:
    "Header"
    "content";
  > main {
    grid-area: content;
    overflow-y: auto;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0 3rem;
  margin: 3.6rem auto 0;
  min-width: 20rem;
  max-width: 58rem;

  > .title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    width: 100%;
    margin-bottom: 3.6rem;

    h1 {
      font-size: 3.6rem;
    }
  }

  > label {
    // campo de imagem
    width: 100%;

    div {
      border-radius: 8px;
      background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
      color: ${({ theme }) => theme.COLORS.GRAY_100};

      height: 25rem;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1rem;

      &:hover {
        cursor: pointer;
        transition: 0.2s;
        filter: brightness(0.8);
      }
      h1 {
        font-size: 3.6rem;
        font-weight: 400;
      }

      svg {
        font-size: 15rem;
      }
    }
    input {
      display: none;
    }
  }

  > textarea {
    display: flex;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    margin: 1rem auto 4rem;
    padding: 1.2rem;
    width: 100%;
    height: 15rem;
    resize: none;

    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 1.4rem;

    border-radius: 8px;
    border: none;
    outline: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
      align-items: center;
    }
  }

  > button:last-child {
    margin-bottom: 3.6rem;
  }
`;
