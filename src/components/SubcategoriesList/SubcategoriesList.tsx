import { FC } from "react";
import Link from "next/link";

import { IMenu } from "@/types/components";
import { List, Item, LinkText, ListWrapper } from "./SubcategoriesList.styled";

const SubcategoriesList: FC<{ subcategories: IMenu[], categoryId: number }> = ({
  subcategories, categoryId
}) => {
  return (
    <ListWrapper>
      <List>
        {subcategories.map((subcategory) => (
          <Item key={subcategory.subcategoryId}>
            <Link
              href={`/${subcategory.categoryLinkKey}/${subcategory.linkKey}`}
              passHref
              legacyBehavior
            >
              <LinkText>{subcategory.name}</LinkText>
            </Link>
          </Item>
        ))}
      </List>
    </ListWrapper>
  );
};

export default SubcategoriesList;
