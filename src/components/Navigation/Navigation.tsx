import { FC } from "react";

import NavLink from "../NavLink";
import DropDownMenu from "../DropDownMenu";
import { ICategory } from "@/types/components";
import { Container } from "@/styles/commonStyles";
import { NavWrapper, NavList, NavItem, Button } from "./Navigation.styled";

const Navigation: FC<{ categories: ICategory[] }> = ({ categories }) => {
  console.log("category", categories)
  return (
    <NavWrapper>
      <Container>
        <NavList>
          <NavItem>
            <NavLink href={"/novelties"} text={"Новинки"} />
          </NavItem>
          {categories.map((category) => (
            <DropDownMenu
              key={category.categoryId}
              href={category.linkKey}
              text={category.name}
              menuItems={category.subcategory}
              menuId={category.categoryId}
            />
          ))}
          <NavItem>
            <NavLink href={"/brands"} text={"Бренди"} />
          </NavItem>
          <NavItem>
            <NavLink href={"/discounts"} text={"Акції"} isDiscount />
          </NavItem>
        </NavList>
      </Container>
    </NavWrapper>
  );
};

export default Navigation;
