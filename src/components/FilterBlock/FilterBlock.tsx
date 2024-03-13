import { FC } from "react";

import PriceFilter from "../PriceFilter/PriceFilter";
import { FilterBlockWrapper, TitleContainer, Title, Text } from "./FilterBlock.styled";
import CloseIcon from "@/UI/icons/CloseIcon";
import CategoryFilter from "@/components/CategoryFilter"
const FilterBlock: FC<{ minPrice: string; maxPrice: string }> = ({
  minPrice,
  maxPrice,
}) => {
  return (
    <FilterBlockWrapper>
      <TitleContainer>
        <Title>Фільтри</Title>
        <CloseIcon width="24px" height="24px"/>
      </TitleContainer>
      <PriceFilter min={Number(minPrice)} max={Number(maxPrice)} step={1} />
      <CategoryFilter/>
    </FilterBlockWrapper>
  );
};

export default FilterBlock;
