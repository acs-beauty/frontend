import { FC, ChangeEvent, useState } from "react"
import { useRouter } from "next/router"
import { ParsedUrlQuery, stringify } from "querystring"
import RangeSliderWrapper from "./RangeSliderWrapper"
import { IPriceFilterProps } from "@/types/components"
import { Text, Input, InputWrapper, PriceFilterWrapper } from "./PriceFilter.styled"

const PriceFilter: FC<IPriceFilterProps> = ({ step, min, max }) => {
  const router = useRouter()
  const [minPrice, setMinPrice] = useState<number>(min)
  const [maxPrice, setMaxPrice] = useState<number>(max)


  const handleMinChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(event.target.value)
    const newMinVal = Math.min(value, maxPrice - step)
    setMinPrice(newMinVal)
    updateSearchParams(newMinVal, maxPrice)
  }

  const handleMaxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(event.target.value)
    const newMaxVal = Math.max(value, minPrice + step)
    setMaxPrice(newMaxVal)
    updateSearchParams(minPrice, newMaxVal)
  }

  const updateSearchParams = (newMin: number, newMax: number) => {
    const currentQuery: ParsedUrlQuery = router.query

    const updatedQuery = {
      ...currentQuery,
      min: newMin.toString(),
      max: newMax.toString(),
    }

    const searchParams = new URLSearchParams(stringify(updatedQuery))

    router.push(`${router.pathname}?${searchParams.toString()}`, undefined, {
      shallow: true,
    })
  }

  

  return (
    <PriceFilterWrapper>
      <Text>Ціна</Text>
      <InputWrapper>
        <Input
          type="number"
          name="minPrice"
          min={min}
          max={max}
          value={minPrice}
          onChange={handleMinChange}
        />

        <Input
          type="number"
          name="maxPrice"
          min={min}
          max={max}
          value={maxPrice}
          onChange={handleMaxChange}
        />
      </InputWrapper>
      <RangeSliderWrapper
        min={min}
        max={max}
        step={step}
        minPrice={minPrice}
        maxPrice={maxPrice}
        setMinPrice={setMinPrice}
        setMaxPrice={setMaxPrice}
      />
    </PriceFilterWrapper>
  )
}

export default PriceFilter
