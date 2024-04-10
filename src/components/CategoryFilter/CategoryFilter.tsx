import MinusIcon from "@/UI/icons/MinusIcon"
import PlusIcon from "@/UI/icons/PlusIcon/PlusIcon"
import React, { FC, useState, useEffect } from "react"
import { IMenu } from "@/types/components"
import { selectCategoryName, selectNewCategories } from "@/redux/catalog/selector"
import { selectBrands } from "@/redux/brands/selector"
import { selectProducts } from "@/redux/products/selector"
import { checkedCategories } from "@/redux/catalog/slice"
import FilterList from "./FilterList"
import {
  FilterContainer,
  Title,
  Button,  
} from "./CategoryFilter.styled"
import { useSelector } from "react-redux"
import { useAppDispatch } from "@/hooks"

const CategoryFilter: FC<{ subcategories: IMenu[] }> = ({ subcategories }) => {
  const [brandOpen, setBrandOpen] = useState(false)
  const [typeOpen, setTypeOpen] = useState(false)
  const [appointmentsOpen, setAppointmentsOpen] = useState(false)
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({})
  const [checkedSubcategories, setCheckedSubcategories] = useState<{ [key: number]: boolean }>({})

  const category = useSelector(selectCategoryName)
  // console.log("category123", category)
  const categoryName = useSelector(selectNewCategories)
  // console.log("categoryName123", categoryName)
  const brands = useSelector(selectBrands)
  // console.log("brands", brands)
  const products = useSelector(selectProducts)
  // console.log("products", products)

  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!checkedSubcategories || Object.keys(checkedSubcategories).length === 0) {
      // Если нет чекнутых субкатегорий, устанавливаем пустой объект
      setCheckedItems({})
    }
  }, [checkedSubcategories])

  const handleBrandClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation()
    setBrandOpen(!brandOpen)
  }

  const handleTypeClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation()
    setTypeOpen(!typeOpen)
  }

  const handleAppointmentsClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    setAppointmentsOpen(!appointmentsOpen)
  }

  const handleCheckboxClick = (id: number) => {
    setCheckedItems(prevState => ({
      ...prevState,
      [id]: !prevState[id],
    }))
    setCheckedSubcategories(prevState => ({
      ...prevState,
      [id]: !prevState[id],
    }))

    dispatch(
      checkedCategories({
        checkedSubcategories: {
          ...checkedSubcategories,
          [id]: !checkedSubcategories[id],
        },
        categoryId: category[0].id,
      })
    )
  }
  return (
    <>
      <FilterContainer>
       
        <FilterList
          title="Бренд"
          items={brands}
          isOpen={brandOpen}
          toggleOpen={handleBrandClick}
          checkedItems={checkedItems}
          handleCheckboxClick={handleCheckboxClick}
        />

        <FilterList
          title="Тип"
          items={subcategories}
          isOpen={typeOpen}
          toggleOpen={handleTypeClick}
          checkedItems={checkedItems}
          handleCheckboxClick={handleCheckboxClick}
        />
       
        <Title>Призначення</Title>
        <Button type="button" onClick={handleAppointmentsClick}>
          {appointmentsOpen ? <MinusIcon /> : <PlusIcon />}
        </Button>
      </FilterContainer>
    </>
  )
}

export default CategoryFilter
