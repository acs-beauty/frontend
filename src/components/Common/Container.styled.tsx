import styled from "@emotion/styled";

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  min-height: 100%;
  padding-left: 20px;
  padding-right: 20px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
    width: ${({ theme }) => theme.breakpoints[0]};
  }
  
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    width: ${({ theme }) => theme.breakpoints[1]};
    padding-left: 80px;
    padding-right: 80px;
  }
`;
