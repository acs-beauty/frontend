import { FC } from "react";
import Image from "next/image";

import NavLink from "../NavLink";
import DropDownMenu from "../DropDownMenu";
import { ICategory } from "@/types/components";
import { Container } from "../Common/Container.styled";
import { NavWrapper, NavList, NavItem, Button } from "./Navigation.styled";

const Navigation: FC<{ categories: ICategory[] }> = ({ categories }) => {
  return (
    <NavWrapper>
      <Container>
        <NavList>
          <NavItem>
            <NavLink href={"/novelties"} text={"Новинки"} />
          </NavItem>
          {categories.map((category) => {
            return (
              <NavItem key={category.categoryId}>
                <NavLink href={category.linkKey} text={category.name} />
                <DropDownMenu
                  menuItems={category.subcategory}
                  menuId={category.categoryId}
                />
              </NavItem>
            );
          })}
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
