import styled from "@emotion/styled";

export const Title = styled.h1`
  color: #5a5757;
  font-size: 1.8rem;
  font-weight: 500;
  letter-spacing: 1.8px;
  text-transform: uppercase;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    font-size: 3.2rem;
    letter-spacing: 3.2px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    font-size: 3.6rem;
    letter-spacing: 3.6px;
  }
`;

export const TitleWrapper = styled.div`
  margin-bottom: 1.6rem;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    margin-bottom: 2rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    margin-bottom: 4.8rem;
  }
`;

export const TitleContainer = styled.div`
  text-align: center;
`;

export const PostsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.4rem;
  margin-bottom: 1.7rem;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    gap: 2rem;
    margin-bottom: 3.3rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    flex-direction: row;
    gap: 2rem;
    margin-bottom: 4rem;
  }
`;

export const Section = styled.section`
  padding-bottom: 4.3rem;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    padding-bottom: 7.9rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    padding-bottom: 29.4rem;
  }
`;
