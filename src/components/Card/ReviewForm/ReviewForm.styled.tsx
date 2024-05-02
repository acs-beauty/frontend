import styled from "@emotion/styled"
import { Field } from "formik"

export const ReviewItem = styled.h2`
margin-bottom: 8px;
  text-align: center;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.25;
  @media screen and (min-width: ${({ theme }) => theme.tablet_768}) {
    font-size: 24px;
  }
`
export const Button = styled.button`
  width: 100%;
  padding: 19px 0;
  border-radius: 4px;
  background: #453e42;
  color: #fff;
  text-align: center;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
`
export const Input = styled(Field)`
  width: 100%;
  margin-bottom: 12px;
  padding: 16px 16px 16px 16px;
  border-radius: 4px;
  border: 1px solid #c1baba;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 1.7;
  &::placeholder {
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: 1.7;
  }
`
export const Label = styled.label`
  display: block;
  margin-bottom: 12px;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.14;
`
export const Textarea = styled(Field)`
  width: 100%;
  text-align: start;
  margin-bottom: 12px;
  padding: 16px 0 0 16px;
  border-radius: 4px;
  border: 1px solid #c1baba;
  resize: vertical;
  min-height: 124px;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 1.7;
  &::placeholder {
    text-align: start; 
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: 1.7;
  }
`
export const ErrorStyle = styled.div`
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 1.7;
  color: red;
`
export const IconWrapper = styled.div`
  text-align: center;
  margin-bottom: 12px;
`