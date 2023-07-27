import styled from "@emotion/styled";

export const ImageContainer = styled.div`
  position: relative;
  width: 320px;
  height: 147px;
  margin-bottom: 16px;
  overflow: hidden;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    width: 1280px;
    height: 360px;
    margin-bottom: 40px;
  }
`;
