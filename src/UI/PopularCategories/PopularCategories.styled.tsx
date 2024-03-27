import styled from "@emotion/styled"
import Link from "next/link"

export const Section = styled.section`
  padding-bottom: 8rem;

  @media screen and (min-width: ${({ theme }) => theme.tablet_768}) {
    padding-bottom: 10rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.desktop_1440}) {
    padding-bottom: 16rem;
  }
`

export const FlexContainer = styled.div`
 

  @media screen and (min-width: ${({ theme }) => theme.desktop_1440}) {
    flex-direction: row;
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 2.4rem;
  @media screen and (min-width: ${({ theme }) => theme.desktop_1440}) {
    display: flex;
    justify-content: space-between;
  }
`

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.4rem;
  @media screen and (min-width: ${({ theme }) => theme.tablet_768}) {
    gap: 1.2rem;
  }
`

export const Text = styled.p`
  width: 6.8rem;
  font-size: 1.2rem;
  font-weight: 500;
  text-align: center;

  @media screen and (min-width: ${({ theme }) => theme.tablet_768}) {
    width: 16rem;
    font-size: 2rem;
  }
`
