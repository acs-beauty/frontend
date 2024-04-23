import styled from "@emotion/styled";

export const Section = styled.section`
  position: relative;
  padding-bottom: 8rem;

  @media screen and (min-width: ${({ theme }) => theme.tablet_768}) {
   padding-bottom: 10rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.desktop_1440}) {
    padding-bottom: 16rem;
  }
`;
