import styled from "@emotion/styled"

export const PolicyWrapper = styled.div`
  margin: auto;
  margin-top: 3.2rem;
  width: 28.9rem;
  font-size: 1.2rem;
  text-align: center;
  line-height: 1.219;

  @media screen and (min-width: ${({ theme }) => theme.tablet_768}) {
    width: 51.7rem;
    margin-top: 5.6rem;
    font-size: 1.4rem;
  }
  @media screen and (min-width: ${({ theme }) => theme.desktop_1440}) {
    margin-top: 6.4rem;
  }
`
export const PolicyLink = styled.span`
  text-decoration: underline;
`
