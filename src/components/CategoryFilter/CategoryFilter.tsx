import MinusIcon from "@/UI/icons/MinusIcon"
import PlusIcon from "@/UI/icons/PlusIcon/PlusIcon"
import React, { FC, useState } from "react"
import { IMenu } from "@/types/components"
import CheckBoxIcon from "@/UI/icons/CheckBoxIcon"
import { selectCategoryName } from "@/redux/catalog/selector";
import { checkedCategories } from "@/redux/catalog/slice";
import {
  TitleContainer,
  Title,
  Button,
  Label,
  Input,
  SubcategoryItem,
  StyledBiChevronDownSquare,
} from "./CategoryFilter.styled"
import { useSelector } from "react-redux"
import { useAppDispatch } from "@/hooks";


const CategoryFilter: FC<{ subcategories: IMenu[] }> = ({ subcategories }) => {
  const [brandOpen, setBrandOpen] = useState(false)
  const [typeOpen, setTypeOpen] = useState(false)
  const [appointmentsOpen, setAppointmentsOpen] = useState(false)
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({})
  const [checkedSubcategories, setCheckedSubcategories] = useState<{ [key: number]: boolean }>({});

  const category = useSelector(selectCategoryName)

  const dispatch = useAppDispatch()

  const handleBrandClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    setBrandOpen(!brandOpen)
  }

  const handleTypeClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    setTypeOpen(!typeOpen)
  }

  const handleAppointmentsClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    setAppointmentsOpen(!appointmentsOpen)
  }

  const handleCheckboxClick = (subcategoryId: number) => {
    setCheckedItems(prevState => ({
      ...prevState,
      [subcategoryId]: !prevState[subcategoryId],
    }));
    setCheckedSubcategories(prevState => ({
      ...prevState,
      [subcategoryId]: !prevState[subcategoryId],
    }));

    dispatch(checkedCategories({ checkedSubcategories: {...checkedSubcategories, [subcategoryId]: !checkedSubcategories[subcategoryId]}, categoryId: category[0].categoryId }));
}
console.log("checkedSubcategories", checkedSubcategories)
  return (
    <>
      <TitleContainer>
        <Title>Бренд</Title>
        <Button type="button" onClick={handleBrandClick}>
          {brandOpen ? <MinusIcon /> : <PlusIcon />}
        </Button>
      </TitleContainer>
      <TitleContainer onClick={e => e.stopPropagation()}>
        <Title>Тип</Title>
        <Button type="button" onClick={handleTypeClick}>
          {typeOpen ? <MinusIcon /> : <PlusIcon />}
        </Button>
      </TitleContainer>
      <ul>
        {typeOpen &&
          Array.isArray(subcategories) &&
          subcategories.map(subcategory => (
            <SubcategoryItem key={subcategory.subcategoryId} onClick={e => e.stopPropagation()}>
              <Label>
                {checkedItems[subcategory.subcategoryId] ? (
                  <StyledBiChevronDownSquare />
                ) : (
                  <CheckBoxIcon />
                )}

                <Input
                  type="checkbox"
                  checked={checkedItems[subcategory.subcategoryId] || false}
                  onChange={() => handleCheckboxClick(subcategory.subcategoryId)}
                />
                {subcategory.name}
              </Label>
            </SubcategoryItem>
          ))}
      </ul>
      <TitleContainer>
        <Title>Призначення</Title>
        <Button type="button" onClick={handleAppointmentsClick}>
          {appointmentsOpen ? <MinusIcon /> : <PlusIcon />}
        </Button>
      </TitleContainer>
    </>
  )
}

export default CategoryFilter
