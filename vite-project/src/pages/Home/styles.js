import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 25rem auto;
  grid-template-rows: auto 12.8rem auto;
  grid-template-areas: "Logo Header" "Side Search" "Side Content";

  > div:first-child {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    align-items: center;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
  }
`;

export const Search = styled.div`
  grid-area: Search;
`;

export const Side = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  height: 88vh;
  grid-area: Side;

  ul {
    margin-top: 6.4rem;
    display: flex;
    flex-direction: column;
    list-style: none;
    text-align: center;
    font-weight: 300;
    gap: 1.8rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};

    :first-child {
      color: ${({ theme }) => theme.COLORS.GREEN};
    }

    li:hover {
      cursor: pointer;
      color: ${({ theme }) => theme.COLORS.GREEN};
    }
  }

  button:last-child {
    border-radius: 0;
    width: 25rem;
    bottom: 0;
  }
`;

export const Content = styled.div`
  height: 100%;
  max-width: 106rem;
  margin: 0 auto;
  grid-area: Content;

  > div:first-child {
    margin: 0 auto;
    margin-top: 6.4rem;
  }
`;
