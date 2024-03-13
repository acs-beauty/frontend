import { FC, useState } from "react";

import ProductCard from "../ProductCard";
import { IProducts } from "@/types/components";
import { ProductList, Button, BtnContainer } from "./ProductGallery.styled";

const ProductGallery: FC<IProducts> = (props) => {
  const { products } = props;

  const [displayedProducts, setDisplayedProducts] = useState(4); // Хранение количества отображаемых продуктов

  const handleShowMore = () => {
    setDisplayedProducts((prevCount) => prevCount + 4); // Увеличиваем количество отображаемых продуктов на 4
  };
  return (
    <div>
      <ProductList>
        {products.slice(0, displayedProducts).map((item) => (
          <li key={item.productId}>
            <ProductCard product={item} isHeartIcon={true} />
          </li>
        ))}
      </ProductList>
      <BtnContainer>
      {products.length > 4 ? <Button type="button" onClick={handleShowMore}>Показати більше</Button> : ""}

      </BtnContainer>
    </div>
  );
};

export default ProductGallery;
