import { FC } from "react";

import PriceFilter from "../PriceFilter/PriceFilter";
import { FilterBlockWrapper } from "./FilterBlock.styled";

const FilterBlock: FC<{ minPrice: string; maxPrice: string }> = ({
  minPrice,
  maxPrice,
}) => {
  return (
    <FilterBlockWrapper>
      <PriceFilter min={Number(minPrice)} max={Number(maxPrice)} step={1} />
    </FilterBlockWrapper>
  );
};

export default FilterBlock;
