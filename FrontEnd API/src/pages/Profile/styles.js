import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  header {
    height: 14rem;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    display: flex;
    align-items: center;
    > button {
      background: none;
      border: none;
      margin-left: 10rem;
      svg {
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        font-size: 3rem;
      }
    }
  }
`;

export const Form = styled.form`
  margin: 0 auto;
  max-width: 34rem;

  .password {
    margin-top: 2.4rem;
  }

  button:last-child {
    margin-top: 2.4rem;
  }
`;

export const Avatar = styled.div`
  position: relative;
  bottom: 7.6rem;

  > label {
    display: flex;
    justify-content: center;

    img {
      width: 18.6rem;
      border-radius: 50%;
    }

    input {
      display: none;
    }

    button {
      right: 7rem;
      bottom: 0.7rem;
      position: absolute;
      padding: 1.4rem;
      width: 5.5rem;
      height: 5.5rem;
      background: ${({ theme }) => theme.COLORS.GREEN};
      border-radius: 50%;
      svg {
        font-size: 2rem;
      }
    }
  }
`;
