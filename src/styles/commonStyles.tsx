import styled from "@emotion/styled";

export const IconWrapper = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    width: 3.2rem;
    height: 3.2rem;
  }
`;