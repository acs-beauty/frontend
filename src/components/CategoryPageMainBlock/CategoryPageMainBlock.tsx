import { FC } from "react";

import FilterBlock from "../FilterBlock";
import SubcategoriesList from "../SubcategoriesList";
import SmallDropDownMenu from "../SmallDropDownMenu";
import ProductGallery from "../ProductGallery";
import { ICategoryData } from "@/types/components";
import { sortMenuItems } from "@/data/sortMenu";
import { sortPage } from "@/data/sortPage";
import { allProducts } from "@/data/products";
import { Container } from "../Common/Container.styled";
import {
  BlockWrapper,
  MenuWrapper,
  MenuText,
  MenuContainer,
} from "./CategoryPageMainBlock.styled";

const CategoryPageMainBlock: FC<{ category: ICategoryData }> = ({
  category,
}) => {
  return (
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
              <SmallDropDownMenu menuItems={sortMenuItems} />
            </MenuWrapper>
            <MenuWrapper>
              <MenuText>Товарів на сторінці: </MenuText>
              <SmallDropDownMenu menuItems={sortPage} />
            </MenuWrapper>
          </MenuContainer>
          <ProductGallery {...allProducts} />
        </div>
        
      </BlockWrapper>
    </Container>
  );
};

export default CategoryPageMainBlock;
