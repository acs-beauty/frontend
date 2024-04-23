import React, { FC } from "react"
import MinusIcon from "@/UI/icons/MinusIcon"
import PlusIcon from "@/UI/icons/PlusIcon/PlusIcon"
import CheckBoxIcon from "@/UI/icons/CheckBoxIcon"
import { IBrand, IMenu } from "@/types/components"
import {
  TitleContainer,
  Title,
  Button,
  Label,
  Input,
  SubcategoryItem,
  StyledBiChevronDownSquare,
} from "./CategoryFilter.styled"

interface FilterListProps {
  title: string
  items: IBrand[] | IMenu[]
  isOpen: boolean
  toggleOpen: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  // toggleOpen: () => void;
  checkedItems: { [key: string]: boolean }
  handleCheckboxClick: (itemId: number) => void // Принимает аргумент
}

const FilterList: FC<FilterListProps> = ({
  title,
  items,
  isOpen,
  toggleOpen,
  checkedItems,
  handleCheckboxClick,
}) => {
  return (
    <>
      <TitleContainer onClick={toggleOpen}>
        <Title>{title}</Title>
        <Button type="button">{isOpen ? <MinusIcon /> : <PlusIcon />}</Button>
      </TitleContainer>
      {isOpen && (
        <ul>
          {Array.isArray(items) &&
            items.map(item => (
              <SubcategoryItem key={item.id} onClick={e => e.stopPropagation()}>
                <Label>
                  {checkedItems[item.id] ? <StyledBiChevronDownSquare /> : <CheckBoxIcon />}

                  <Input
                    type="checkbox"
                    checked={checkedItems[item.id] || false}
                    onChange={() => handleCheckboxClick(item.id)}
                  />
                  {item.name}
                </Label>
              </SubcategoryItem>
            ))}
        </ul>
      )}
    </>
  )
}

export default FilterList
