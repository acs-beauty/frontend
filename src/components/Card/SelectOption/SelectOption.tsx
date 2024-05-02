import React, { FC } from "react"
import { useSelector } from "react-redux"
import { selectProducts } from "@/redux/products/selector"
import { IProduct } from "@/types/components"
import  DescriptionSection from "../DescriptionSection";
import CharacteristicsSection from "../CharacteristicsSection"
import ReviewsSection from "../ReviewsSection"

const SelectOption: FC<{ selectOptions: string }> = ({ selectOptions }) => {
  const product: IProduct = useSelector(selectProducts)

  switch (selectOptions) {
    case "Опис":
      return <DescriptionSection product={product}/>
    case "Характеристики":
      return <CharacteristicsSection product={product}/>
    case "Відгуки":
      return <ReviewsSection product={product}/>
  }
}

export default SelectOption
