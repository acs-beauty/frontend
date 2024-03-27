import styled from "@emotion/styled";

export const BlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

export const MenuContainer = styled.div`
 display: grid;
  grid-template-columns: repeat(3, fr);
  grid-template-rows: repeat(2, fr);
  row-gap: 18px;
 
  @media screen and (min-width: ${({ theme }) => theme.desktop_1440}){
    grid-template-columns: repeat(4, fr);
  grid-template-rows: repeat(3, fr);
  }
`;

export const FilterContainer = styled.div`
  grid-column: 1/2;
  grid-row: 1/2;
  @media screen and (min-width: ${({ theme }) => theme.desktop_1440}){
    grid-column: 1/2;
  grid-row: 1/4;
  }
`;
export const SelectContainer = styled.div`
   @media screen and (min-width: ${({ theme }) => theme.desktop_1440}){
    grid-column: 2/3;
  grid-row: 1/2;
  }
`
export const SortContainer = styled.div`
 position: relative;
  grid-column: 3/4;
  grid-row: 1/2;
  @media screen and (min-width: ${({ theme }) => theme.desktop_1440}){
   
    grid-column: 2/3;
  grid-row: 2/3;
  justify-self: start;
  }
`;

export const ProductContainer = styled.div`
  grid-column: 2/4;
  grid-row: 3/4;
`;
export const Wrapper = styled.div`
  margin-bottom: 80px;
`;
export const CountProductWrapper = styled.div`
 display: none;
@media screen and (min-width: ${({ theme }) => theme.desktop_1440}){
  position: relative;
  display: block;
  grid-column: 3/4;
  grid-row: 2/3;
  
}  
`

export const FilterWrapper = styled.div`
@media screen and (min-width: ${({ theme }) => theme.desktop_1440}){
  display: grid;
  grid-template-columns: repeat(3, fr);
  grid-template-rows: repeat(3, fr)
}
  

`
export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.2rem;
  height: 3.2rem;
  border: none;
  background-color: transparent;
  font-size: 12px;
font-style: normal;
font-weight: 400;
@media screen and (min-width: ${({ theme }) => theme.desktop_1440}){
  display: none;
}
`;
export const FilterBlockWrapper = styled.div`
  display: none;
  @media screen and (min-width: ${({ theme }) => theme.desktop_1440}){
   display: block;
  }
`
export const ContainerText = styled.div`
  display: flex;
align-items: center;
justify-content: flex-end;
gap: 2px;
cursor: pointer;
`
export const Text = styled.p`
  font-size: 12px;
font-style: normal;
font-weight: 400;
`

export const ContainerMenuSort = styled.div`
position: absolute;
top: 32px;
left: 0;
min-width: 240px;
  border: 1px solid #C1BABA;
background: #FFF;
padding: 22px 30px;
z-index: 10;
`;

export const ContainerMenuCount = styled.ul`
position: absolute;
top: 32px;
right: 0;
display: flex;
flex-direction: column;
max-width: 72px;
  border: 1px solid #C1BABA;
background: #FFF;
padding: 22px 25px;
align-items: end;
z-index: 10;
`;

export const MenuText = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  letter-spacing: 0.48px;
`;
export const Li = styled.li`
  margin-bottom: 16px;
  justify-self: end;
  
`
