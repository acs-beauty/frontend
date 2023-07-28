import { FC } from "react";

import PriceFilter from "../PriceFilter/PriceFilter";
import { FilterBlockWrapper } from "./FilterBlock.styled";

const FilterBlock: FC = () => {
  return (
    <FilterBlockWrapper>
      <PriceFilter min={50} max={1200} step={1} />
    </FilterBlockWrapper>
  );
};

export default FilterBlock;
