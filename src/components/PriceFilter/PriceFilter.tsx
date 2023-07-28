import { FC, ChangeEvent, useState } from "react";
import { useRouter } from "next/router";
import { ParsedUrlQuery, stringify } from "querystring";

import { IPriceFilterProps } from "@/types/components";
import {
  Text,
  Input,
  InputWrapper,
  SliderWrapper,
  SliderInnerWrapper,
  SliderInput,
  ControlWrapper,
  Control,
  Rail,
  InnerRail,
  PriceFilterWrapper
} from "./PriceFilter.styled";

const PriceFilter: FC<IPriceFilterProps> = ({ step, min, max }) => {
  const router = useRouter();
  const [minPrice, setMinPrice] = useState<number>(min);
  const [maxPrice, setMaxPrice] = useState<number>(max);

  const handleMinChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const value = parseFloat(event.target.value);

    const newMinVal = Math.min(value, maxPrice - step);
    setMinPrice(newMinVal);
    updateSearchParams(newMinVal, maxPrice);
  };

  const handleMaxChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const value = parseFloat(event.target.value);

    const newMaxVal = Math.max(value, minPrice + step);
    setMaxPrice(newMaxVal);
    updateSearchParams(minPrice, newMaxVal);
  };

  const updateSearchParams = (newMin: number, newMax: number) => {
    const currentQuery: ParsedUrlQuery = router.query;

    const updatedQuery = {
      ...currentQuery,
      min: newMin.toString(),
      max: newMax.toString(),
    };

    const searchParams = new URLSearchParams(stringify(updatedQuery));

    router.push(`${router.pathname}?${searchParams.toString()}`, undefined, {
      shallow: true,
    });
  };

  const minPos = ((minPrice - min) / (max - min)) * 100;
  const maxPos = ((maxPrice - min) / (max - min)) * 100;

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
      <SliderWrapper>
        <SliderInnerWrapper>
          <SliderInput
            type="range"
            value={minPrice}
            min={min}
            max={max}
            step={step}
            onChange={handleMinChange}
          />
          <SliderInput
            type="range"
            value={maxPrice}
            min={min}
            max={max}
            step={step}
            onChange={handleMaxChange}
          />
        </SliderInnerWrapper>
      </SliderWrapper>
      <ControlWrapper>
        <Control style={{ left: `${minPos}%` }} />
        <Rail>
          <InnerRail style={{ left: `${minPos}%`, right: `${100 - maxPos}%` }} />
        </Rail>
        <Control style={{ left: `${maxPos}%` }} />
      </ControlWrapper>
    </PriceFilterWrapper>
  );
};

export default PriceFilter;
