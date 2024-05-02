import styled from "@emotion/styled";

import Image from "next/image";

export const StyledImage = styled(Image)`
  width: 100%;
  height: 100%; 
 
`;

export const ImageContainer = styled.div`

border: 1px solid rgba(193, 186, 186, 1);
margin-bottom: 32px;

`
export const NameStyle = styled.p`
padding: 12px 0;
color: #5A5757;
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 400;
`

export const TextStyle = styled.p`
margin-bottom: 12px;
color:  #5A5757;
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 400;
`
export const PriseContainer = styled.div`
    display: flex;
    justify-content: space-between;

`
export const PriseStyle = styled.p`
    
`

export const BuyButton = styled.button`
width: 100%;
padding: 25px 0;
margin: 24px 0;
  color: #FFF;
text-align: center;
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 600;
background:  #453E42;
`