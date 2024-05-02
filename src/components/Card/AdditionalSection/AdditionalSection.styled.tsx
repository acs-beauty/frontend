import styled from "@emotion/styled"

export const Container = styled.div`
  display: none;
  @media screen and (min-width: ${({ theme }) => theme.tablet_768}) {
    display: block;
  }
`

export const ItemStyle = styled.h2`
  margin-bottom: 64px;
  text-align: center;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`
