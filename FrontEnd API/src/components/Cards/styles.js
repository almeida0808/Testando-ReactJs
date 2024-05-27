import styled from "styled-components";

export const Container = styled.a`
  width: max-content;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  padding: 1.6rem 2rem;
  border-radius: 8px;
  text-decoration: none;

  > img {
    aspect-ratio: 16/9;
    object-fit: cover;
    min-width: 20rem;
    max-width: 40rem;
  }

  > .description {
    text-align: center;

    h2 {
      font-size: 3.2rem;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }

    p {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      font-size: 2rem;
      font-weight: 300;
    }
  }
`;
