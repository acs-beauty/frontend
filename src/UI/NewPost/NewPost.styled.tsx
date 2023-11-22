import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 100%;
  min-height: 28.6rem;
  padding: 1.6rem 3.1rem 2rem 2.1rem;
  border: 1px solid #c1baba;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    gap: 2.9rem;
    width: 70.4rem;
    min-height: 47.8rem;
    padding: 4.5rem 11.1rem 5.1rem 11.1rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    gap: 2.4rem;
    width: 63rem;
    min-height: 47.8rem;
    padding: 4.5rem 7.4rem 5.1rem 7.4rem;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 21.2rem;
  height: 7.6rem;
  align-self: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    width: 32.4rem;
    height: 11.6rem;
  }
`;
