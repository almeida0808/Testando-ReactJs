import styled from "styled-components";

export const Container = styled.button`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  background: none;
  border: none;
  font-family: "Schoolbell", cursive;

  cursor: pointer;
  font-size: 1.6rem;
  &:hover {
    filter: brightness(0.8);
  }
`;
