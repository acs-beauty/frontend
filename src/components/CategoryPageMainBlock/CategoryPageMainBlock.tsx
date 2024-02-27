import { FC } from "react";

import FilterBlock from "../FilterBlock";
import SubcategoriesList from "../SubcategoriesList";
import SortingSelect from "../SortingSelect";
import PageSelect from "../PageSelect";
import ProductGallery from "../ProductGallery";
import { ICategoryData } from "@/types/components";
import { allProducts } from "@/data/products";
import { Container } from "@/styles/commonStyles";
import {
  BlockWrapper,
  MenuWrapper,
  MenuText,
  MenuContainer,
  Wrapper
} from "./CategoryPageMainBlock.styled";

const CategoryPageMainBlock: FC<{ category: ICategoryData }> = ({
  category,
}) => {
  return (
    <Wrapper>
      <Container>
        <BlockWrapper>
          <FilterBlock
            minPrice={category.minPrice}
            maxPrice={category.maxPrice}
          />
          <div>
            <SubcategoriesList subcategories={category.subcategory} />
            <MenuContainer>
              <MenuWrapper>
                <MenuText>Cортувати: </MenuText>
                <SortingSelect categoryName={category.linkKey} />
              </MenuWrapper>
              <MenuWrapper>
                <MenuText>Товарів на сторінці: </MenuText>
                <PageSelect />
              </MenuWrapper>
            </MenuContainer>
            <ProductGallery {...allProducts} />
          </div>
        </BlockWrapper>
      </Container>
    </Wrapper>
  );
};

export default CategoryPageMainBlock;
