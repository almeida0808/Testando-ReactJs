import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  height: 5.6rem;

  border-radius: 8px;
  margin-bottom: 0.8rem;

  > input {
    color: ${({ theme }) => theme.COLORS.WHITE};

    width: 100%;

    padding: 1.2rem;

    background: none;
    border: none;
    outline: none;

    font-size: 1.4rem;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

  > svg {
    margin-left: 1.6rem;
  }
`;
