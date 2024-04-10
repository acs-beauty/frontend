import { FC } from "react";
import Link from "next/link";

import { IMenu } from "@/types/components";
import { List, Item, LinkText, ListWrapper } from "./SubcategoriesList.styled";
import { useSelector } from "react-redux";
import { selectCheckedCategories } from "@/redux/catalog/selector";

const SubcategoriesList: FC<{ subcategories: IMenu[], id: number }> = ({
  subcategories
}) => {
  const subcategoryNames = useSelector(selectCheckedCategories)
  console.log("checkedSubcategories", subcategoryNames)
  return (
    <ListWrapper>
    <List>
      {subcategories.map((subcategory) => {
        const isChecked = subcategoryNames?.some(item => item.id === subcategory.id);
        return (
          <Item 
            key={subcategory.id} 
            style={{ background: isChecked ? 'black' : '' , color: isChecked ? "white" : ""}}
          >
            <Link
              href={`/${subcategory.categoryLinkKey}/${subcategory.linkKey}`}
              passHref
              legacyBehavior
            >
              <LinkText>{subcategory.name}</LinkText>
            </Link>
          </Item>
        );
      })}
    </List>
  </ListWrapper>
  );
};

export default SubcategoriesList;
