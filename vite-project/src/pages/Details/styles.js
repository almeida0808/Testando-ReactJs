import styled from "styled-components";

export const Container = styled.div`
  font-family: "Roboto Slab";
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 10.5rem auto;
  grid-template-areas:
    "Header"
    "content";

  > main {
    overflow-y: auto;

    footer {
      padding: 3rem;
      display: flex;
      margin: 0 auto;
    }
  }
`;
export const Content = styled.div`
  margin: 0 auto;
  grid-area: content;
  max-width: 55rem;
  padding-top: 6.5rem;
  display: flex;
  flex-direction: column;

  > button:first-child {
    align-self: end;
    right: 0;
  }

  > .title {
    font-family: "Schoolbell", cursive;
    font-weight: 200;
    padding: 4rem 0 2rem 0;
    font-size: 2.5rem;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: space-between;

    h1 {
      font-size: 3rem;
    }
  }

  > img {
    border: 1rem solid ${({ theme }) => theme.COLORS.BACKGROUND_900};
    width: 55rem;
    object-fit: cover;
    aspect-ratio: 16/9;
    border-radius: 8px;
    margin-bottom: 3rem;
  }

  > section {
    .infos {
      text-align: justify;
      font-weight: 200;
    }

    > button {
      margin-top: 4.6rem;
      margin-bottom: 4.6rem;
    }
  }
`;
