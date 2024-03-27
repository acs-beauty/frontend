import styled from "@emotion/styled"

export const SpanStyle = styled.span`
  font-family: "Montserrat";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  @media screen and (min-width: ${({ theme }) => theme.tablet_768}) {
    font-size: 14px;
  }
`
export const ContainerLink = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  margin-bottom: 49px;
  color: #5a5757;
  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.36px;
`
