import React from "react"
import StarIcon from "@/Images/StarIcon"
import { IProduct } from "@/types/components"
import { useSelector } from "react-redux"
import { selectProducts } from "@/redux/products/selector"
import {
  ImageContainer,
  StyledImage,
  NameStyle,
  TextStyle,
  PriseContainer,
  BuyButton,
} from "./MainSection.styled"

const MainSection = () => {
  const product: IProduct = useSelector(selectProducts)

  return (
    <>
      <ImageContainer>
        <StyledImage src={product.mainImageName} alt={product.name} width={324} height={224} />
      </ImageContainer>

      <NameStyle>{product.name}</NameStyle>
      {Array(5)
        .fill(0)
        .map((_, index) => (
          <StarIcon key={index} fill={index < product.rating ? "black" : "white"} />
        ))}
      <TextStyle>Виробник: {product.brand}</TextStyle>
      <PriseContainer>
        <NameStyle>{product.price} грн</NameStyle>
      </PriseContainer>
      <BuyButton>КУПИТИ</BuyButton>
    </>
  )
}

export default MainSection
