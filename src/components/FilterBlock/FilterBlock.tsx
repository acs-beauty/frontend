import { FC } from "react"
import PriceFilter from "../PriceFilter/PriceFilter"
import { FilterBlockWrapper, TitleContainer, Title, CloseIconWrapper } from "./FilterBlock.styled"
import CloseIcon from "@/UI/icons/CloseIcon"
import CategoryFilter from "@/components/CategoryFilter"
import { IMenu } from "@/types/components"

const FilterBlock: FC<{
  minPrice: string
  maxPrice: string
  subcategories: IMenu[]
  onCloseMenu: () => void
}> = ({ minPrice, maxPrice, subcategories, onCloseMenu }) => {
  const handleCloseMenu = () => {
    onCloseMenu()
  }

  return (
    <>
      <FilterBlockWrapper>
        <TitleContainer>
          <Title>Фільтри</Title>
          <CloseIconWrapper onClick={handleCloseMenu}>
            <CloseIcon width="24px" height="24px" />
          </CloseIconWrapper>
        </TitleContainer>
        <PriceFilter min={Number(minPrice)} max={Number(maxPrice)} step={1} />
        <CategoryFilter subcategories={subcategories} />
      </FilterBlockWrapper>
    </>
  )
}

export default FilterBlock
