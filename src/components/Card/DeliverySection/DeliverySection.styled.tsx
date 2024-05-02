import styled from "@emotion/styled";

export const DeliveryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  @media screen and (min-width: ${({ theme }) => theme.tablet_768}) {
    margin-bottom: 56px;  
    }
`

export const LinkDelivery = styled.a`
display: flex;
align-items: center;
color:  #5A5757;
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 400;
@media screen and (min-width: ${({ theme }) => theme.tablet_768}) {
    font-size: 20px;
  }
  
`
export const Span = styled.span`
  margin-left: 4px;
  align-items: center;
  @media screen and (min-width: ${({ theme }) => theme.tablet_768}) {
    margin-left: 12px;
  }
`