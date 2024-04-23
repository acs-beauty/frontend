import styled from "@emotion/styled"
import {
  RangeSliderTrack as ChakraRangeSliderTrack,
  RangeSliderThumb as ChakraRangeSliderThumb,
} from "@chakra-ui/react";

export const CustomRangeSliderTrack = styled(ChakraRangeSliderTrack)`
  background-color: #d9d9d9;
  transform: translateY(12px) !important;
  height: 2px; 
  width: 90%;
`

export const CustomRangeSliderThumb = styled(ChakraRangeSliderThumb)`
  background-color: #5a5757; 
  width: 24px; 
  height: 24px; 
  border-radius: 50%;
  cursor: pointer;
`

export const Text = styled.p`
  margin-bottom: 16px;
  font-size: 1.6rem;
  font-weight: 500;
  letter-spacing: 0.72px;
  color: #5a5757;

  @media screen and (min-width: ${({ theme }) => theme.tablet_768}) {
    font-size: 2.4rem;
    font-weight: 500;
    letter-spacing: 0.72px;
    color: #5a5757;
  }
`

export const Input = styled.input`
  padding: 1.5rem 2.7rem;
  text-align: center;
  border: 1px solid #c1baba;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: 0.6px;
  color: #5a5757;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  @media screen and (min-width: ${({ theme }) => theme.tablet_768}) {
    width: 11.2rem;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    text-align: center;
    border: 1px solid #c1baba;
    font-size: 2rem;
    font-weight: 500;
    line-height: 1.2;
    letter-spacing: 0.6px;
    color: #5a5757;
    -moz-appearance: textfield;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
  }
`

export const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 4.4rem;
  margin-bottom: 1.6rem;
`

export const SliderWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 2.4rem;
  height: 2.4rem;
`

export const PriceFilterWrapper = styled.div`
  position: relative;
  margin-bottom: 20px;
`
