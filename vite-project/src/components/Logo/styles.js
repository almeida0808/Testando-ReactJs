import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  font-family: "Sedgwick Ave Display";
  justify-content: center;

  span {
    font-size: 3.2rem;
    font-weight: 300;
  }
  .green {
    color: ${({ theme }) => theme.COLORS.GREEN};
  }

  .yellow {
    color: ${({ theme }) => theme.COLORS.YELLOW};
  }

  .blue {
    color: ${({ theme }) => theme.COLORS.BLUE};
  }
`;
