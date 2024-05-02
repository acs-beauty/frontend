import styled from "@emotion/styled"

import Image from "next/image"

export const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
`

export const ImageContainer = styled.div`
  border: 1px solid rgba(193, 186, 186, 1);
  margin-bottom: 32px;
  @media screen and (min-width: ${({ theme }) => theme.tablet_768}) {
    margin-bottom: 40px;
  }
`
export const NameStyle = styled.p`
  padding: 12px 0;
  color: #5a5757;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  @media screen and (min-width: ${({ theme }) => theme.tablet_768}) {
    font-size: 24px;
    margin-bottom: 24px;
  }
`
export const TextStyle = styled.p`
  margin-bottom: 12px;
  color: #5a5757;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  @media screen and (min-width: ${({ theme }) => theme.tablet_768}) {
    font-size: 20px;
    margin: 24px 0 24px 0;
  }
`
export const PriseContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (min-width: ${({ theme }) => theme.tablet_768}) {
    margin-bottom: 24px;
  }
`
export const PriseStyle = styled.p``

export const BuyButton = styled.button`
  width: 100%;
  padding: 25px 0;
  margin: 24px 0;
  color: #fff;
  text-align: center;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  background: #453e42;
  @media screen and (min-width: ${({ theme }) => theme.tablet_768}) {
    font-size: 20px;
    margin: 40px 0 56px 0;
  }
`
