import styled from "@emotion/styled";

export const ImageContainer = styled.div`
  position: relative;
  min-width: 28rem;
  max-width: 60rem;
  height: 14.7rem;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1.6rem;
  overflow: hidden;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    min-width: 84rem;
    max-width: 128rem;
    height: 36rem;
    margin-bottom: 4rem;
  }
`;
