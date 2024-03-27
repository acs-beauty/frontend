import styled from "@emotion/styled"
import Link from "next/link"

export const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 10.6rem;
  margin-top: 0.4rem;

  @media screen and (min-width: ${({ theme }) => theme.tablet_768}) {
    width: 100%;
    height: 23.9rem;
  }
`

export const CardWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: calc(100%);
  align-items: stretch;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.grey[200]};
  &:not(:last-child) {
    margin-right: 1.6rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.desktop_1440}) {
    width: calc(100%);
    /* margin-right: 2rem;
    &:not(:last-child) {
      margin-right: 2rem;
    } */
  }
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  padding: 0 0.8rem 0.8rem;
  gap: 2rem;

  @media screen and (min-width: ${({ theme }) => theme.tablet_768}) {
    padding: 0 3.4rem 2.3rem 3.4rem;
  }
`

export const HeartContainer = styled.div`
  position: absolute;
  top: 0.8rem;
  right: 0.8rem;

  @media screen and (min-width: ${({ theme }) => theme.tablet_768}) {
    top: 1.6rem;
    right: 1.6rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.desktop_1440}) {
    top: 1.2rem;
    right: 1.6rem;
  }
`

export const LabelWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-self: flex-start;
  border-radius: 4px;
`

export const Title = styled.h3`
  height: 8.5rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
  text-overflow: ellipsis;
  font-size: 1.2rem;
  font-weight: 400;
  text-align: center;

  @media screen and (min-width: ${({ theme }) => theme.tablet_768}) {
    width: 23.6rem;

    font-size: 1.4rem;
  }
`

export const Price = styled.p`
  font-size: 1.4rem;
  font-weight: 600;
  text-align: center;

  @media screen and (min-width: ${({ theme }) => theme.tablet_768}) {
    font-size: 1.6rem;
  }
`

export const CartButton = styled.button`
  display: flex;
  gap: 0.4rem;
  align-items: center;
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.grey[300]};
  font-size: 1.2rem;
  font-weight: 500;
  line-height: normal;
  text-align: center;
  text-transform: uppercase;

  @media screen and (min-width: ${({ theme }) => theme.tablet_768}) {
    font-size: 1.4rem;
  }
`

export const StyledLink = styled(Link)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
`
