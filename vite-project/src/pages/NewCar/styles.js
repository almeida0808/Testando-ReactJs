import styled from "styled-components";

export const Container = styled.div``;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > label {
    > div {
      border-radius: 8px;
      background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
      color: ${({ theme }) => theme.COLORS.GRAY_100};

      width: 55rem;
      height: 25rem;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1rem;
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
`;
