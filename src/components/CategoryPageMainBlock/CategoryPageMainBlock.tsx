import { FC } from "react";

import FilterBlock from "../FilterBlock";
import SubcategoriesList from "../SubcategoriesList/SubcategoriesList";
import { ICategoryData } from "@/types/components";
import { Container } from "../Common/Container.styled";
import { BlockWrapper } from "./CategoryPageMainBlock.styled";

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
        </div>
      </BlockWrapper>
    </Container>
  );
};

export default CategoryPageMainBlock;
