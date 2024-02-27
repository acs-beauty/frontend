import styled from "@emotion/styled";

export const Section = styled.section`
  position: relative;
  padding-bottom: 2.4rem;

  @media screen and (min-width: ${({ theme }) => theme.tablet_768}) {
   padding-bottom: 6rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.desktop_1440}) {
    padding-bottom: 8rem;
  }
`;
