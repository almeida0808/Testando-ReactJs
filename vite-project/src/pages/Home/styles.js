import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: 25rem auto;
  grid-template-rows: 10.5rem 12.8rem auto 8rem;
  grid-template-areas:
    "Brand Header"
    "Side Search"
    "Side Content"
    "Button Content";
`;

export const Brand = styled.div`
  align-content: center;
  grid-area: Brand;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
`;

export const Side = styled.div`
  grid-area: Side;
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  padding-top: 3.8rem;
  text-align: center;
  font-weight: 300;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  > button {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-family: "Roboto Slab";

    &:first-child {
      color: ${({ theme }) => theme.COLORS.GREEN};
    }
  }
`;

export const AddButton = styled.button`
  grid-area: Button;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;

  border: none;
  background-color: ${({ theme }) => theme.COLORS.GREEN};

  > svg {
    font-size: 2.4rem;
  }
  > p {
    font-size: 2rem;
    font-weight: 600;
  }
`;

export const Search = styled.div`
  padding: 64px 64px 0;
  grid-area: Search;
`;

export const Content = styled.div`
  grid-area: Content;
  padding: 64px 64px 0;
  overflow: auto;
  > section {
    width: 100%;
    justify-content: center;

    .cards {
      display: grid;
      place-items: center;
      grid-template-columns: repeat(1, 1fr);
      gap: 2rem;

      @media (min-width: 1400px) {
        grid-template-columns: repeat(2, 1fr);
      }
      @media (min-width: 1700px) {
        grid-template-columns: repeat(3, 1fr);
      }
    }
  }
`;
