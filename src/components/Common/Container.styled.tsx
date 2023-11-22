import styled from "@emotion/styled";

export const Container = styled.div`
  margin: 0 auto;
  min-width: 32rem;
  max-width: 76.7rem;
  min-height: 100%;
  padding-left: 1.6rem;
  padding-right: 1.6rem;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    width: 76.8rem;
    padding-left: 3rem;
    padding-right: 3rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    width: 144rem;
    padding-left: 8rem;
    padding-right: 8rem;
  }
`;
