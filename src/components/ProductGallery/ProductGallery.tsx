import { FC } from "react";

import ProductCard from "../ProductCard";
import { IProducts } from "@/types/components";
import { ProductList } from "./ProductGallery.styled";

const ProductGallery: FC<IProducts> = (props) => {
  const { products } = props;
  return (
    <div>
      <ProductList>
        {products.map((item) => (
          <li key={item.productId}>
            <ProductCard product={item} isHeartIcon={true} />
          </li>
        ))}
      </ProductList>
    </div>
  );
};

export default ProductGallery;
