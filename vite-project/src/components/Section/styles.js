import styled from "styled-components";

export const Container = styled.section`
  > h1 {
    font-family: "Schoolbell", cursive;
    padding-bottom: 1.6rem;
    margin-bottom: 2.4rem;

    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 3.2rem;
    font-weight: 500;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  }
`;
