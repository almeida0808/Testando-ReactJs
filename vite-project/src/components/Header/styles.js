import styled from "styled-components";

export const Container = styled.header`
  grid-area: Header;
  display: flex;
  justify-content: space-between;
  max-width: 100%;
  padding: 2rem 4rem;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
  > button {
    background: none;
    border: none;

    svg {
      font-size: 3.6rem;
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  > img {
    width: 6.4rem;
    border-radius: 50%;
    margin-right: 1rem;
  }

  > div {
    line-height: 1.8rem;
    p {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    h3 {
      font-size: 1.8rem;
    }
  }
`;
