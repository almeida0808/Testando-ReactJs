import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 2rem 11rem;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  > img {
    width: 7rem;
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
