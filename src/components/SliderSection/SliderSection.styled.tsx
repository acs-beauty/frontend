import styled from "@emotion/styled";

export const Section = styled.section`
  position: relative;
  margin-bottom: 2.4rem;

  @media screen and (min-width: ${({ theme }) => theme.tablet_768}) {
    margin-bottom: 6rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.desktop_1440}) {
    margin-bottom: 8rem;
  }
`;
