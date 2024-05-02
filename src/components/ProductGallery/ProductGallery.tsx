import { FC, useState } from "react"

import ProductCard from "../Card/ProductCard"
import { IProducts } from "@/types/components"
import { ProductList, Button, BtnContainer, ProductListItem } from "./ProductGallery.styled"

const ProductGallery: FC<IProducts> = props => {
  const { products } = props

  const [displayedProducts, setDisplayedProducts] = useState(4)

  const handleShowMore = () => {
    setDisplayedProducts(prevCount => prevCount + 4)
  }
  return (
    <>
      <ProductList>
        {products.slice(0, displayedProducts).map((item, index) => (
          <ProductListItem key={index}>
            <ProductCard product={item} isHeartIcon={true} />
          </ProductListItem>
        ))}
      </ProductList>
      <BtnContainer>
        {products.length > 4 ? (
          <Button type="button" onClick={handleShowMore}>
            Показати більше
          </Button>
        ) : (
          ""
        )}
      </BtnContainer>
    </>
  )
}

export default ProductGallery
