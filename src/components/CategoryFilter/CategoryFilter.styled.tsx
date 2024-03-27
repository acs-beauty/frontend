import styled from "@emotion/styled";
import { Checkbox as ChakraCheckBox } from '@chakra-ui/react'
import { BiChevronDownSquare } from 'react-icons/bi';

export const StyledBiChevronDownSquare = styled(BiChevronDownSquare)`
  font-size: 24px;
  color: rgba(90, 87, 87, 1);
`;


export const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

export const Title = styled.div`
margin-bottom: 24px;
  font-size: 16px;
font-style: normal;
font-weight: 500;  
`
export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.2rem;
  height: 3.2rem;
  border: none;
  background-color: transparent;
`;

export const SubcategoryList = styled.ul`
  
`

export const SubcategoryItem = styled.li`
 margin-bottom: 16px;
`
export const Label = styled.label`
display: flex;
align-items: center;
  font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
`
export const Input = styled.input`
  position: absolute;
  opacity: 0;
  width: 24px;
  height: 24px;
`

 export const CheckboxWhipper = styled(ChakraCheckBox)`
 margin-bottom: 20px;
 font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
& span.chakra-checkbox__control {
    /* ваш стиль для иконки */
    border: 2px solid rgba(90, 87, 87, 1);
    border-radius: 4px;
    width: 2.4rem; 
    height: 2.4rem;
    fill: red; 
  }
 `