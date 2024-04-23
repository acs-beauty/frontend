import { FC, useState } from "react"
import { IRangeSliderProps } from "@/types/components"
import {
 
  CustomRangeSliderThumb,
  CustomRangeSliderTrack,
} from "./PriceFilter.styled"
import {
    RangeSlider,
    RangeSliderFilledTrack,
  } from '@chakra-ui/react'

const RangeSliderWrapper: FC<
  IRangeSliderProps & {
    minPrice: number
    maxPrice: number
    setMinPrice: (value: number) => void
    setMaxPrice: (value: number) => void
  }
> = ({ min, max, step, minPrice, maxPrice, setMinPrice, setMaxPrice }) => {

  const handleSliderChange = (values: [number, number]) => {
    setMinPrice(values[0])
    setMaxPrice(values[1])

    
  }

  return (
    <>
      <RangeSlider
        min={min}
        max={max}
        step={step}
        onChange={handleSliderChange}
        defaultValue={[minPrice, maxPrice]}
        onClick={(e) => e.stopPropagation()}

      >
        <CustomRangeSliderTrack>
          <RangeSliderFilledTrack style={{ background: "#5a5757",  height: "4px"}} />
        </CustomRangeSliderTrack>
        <CustomRangeSliderThumb index={0} />
        <CustomRangeSliderThumb index={1} />
      </RangeSlider>
    </>
  )
}

export default RangeSliderWrapper
