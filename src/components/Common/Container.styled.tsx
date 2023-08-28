import styled from "@emotion/styled";

export const Container = styled.div`
  margin: 0 auto;
  min-width: 28rem;
  max-width: 59.9rem;
  min-height: 100%;
  padding-left: 2rem;
  padding-right: 2rem;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
    min-width: 60rem;
    max-width: 99.9rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    min-width: 100rem;
    max-width: 144rem;
    padding-left: 8rem;
    padding-right: 8rem;
  }
`;
