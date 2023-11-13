import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3.2rem;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    height: 5rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    height: 6rem;
  }
`;

export const Title = styled.h3`
  color: #fff;
  font-size: 1.2rem;
  font-weight: 500;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    font-size: 1.6rem;
    letter-spacing: 0.48px;
    line-height: normal;
    text-transform: uppercase;
  }
`;

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3.2rem;
  background: #453e42;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    height: 5rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    height: 6rem;
  }
`;
