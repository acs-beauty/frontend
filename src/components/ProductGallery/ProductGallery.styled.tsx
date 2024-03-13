import styled from "@emotion/styled";

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat( 2, 1fr);
  row-gap: 1.6rem;
  column-gap: 1.6rem;
  margin-bottom: 24px;
`;

export const Button = styled.button`
padding: 14px 8px;
border: 1px solid  #453E42;
  font-size: 14px;
font-style: normal;
font-weight: 400;
`
export const BtnContainer = styled.div`
display: flex;
justify-content: center;
`