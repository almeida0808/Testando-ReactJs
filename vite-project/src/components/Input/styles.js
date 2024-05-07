import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  border: none;
  display: flex;
  width: 100%;
  align-items: center;
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  border-radius: 8px;
  margin-bottom: 0.8rem;

  > input {
    width: 100%;
    height: 5.6rem;

    padding: 1.2rem;

    background: none;
    border: none;
    outline: none;

    font-size: 1.4rem;
    font-weight: 400;

    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }

  > svg {
    margin-left: 1.6rem;
  }
`;
