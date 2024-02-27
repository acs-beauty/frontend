import styled from "@emotion/styled";

export const Wrapper = styled.div`
  padding-bottom: 2.1rem;

  @media screen and (min-width: ${({ theme }) => theme.tablet_768}) {
    padding-bottom: 3.1rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.desktop_1440}) {
    padding-bottom: 6.8rem;
  }
`;
