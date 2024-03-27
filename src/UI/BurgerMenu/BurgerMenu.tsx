import { FC } from "react";

import NavLink from "@/components/NavLink";
import DropDownMenu from "@/components/DropDownMenu";
import { ICategory } from "@/types/components";
import { Container } from "@/styles/commonStyles";
import { MenuWrapper, NavWrapper, NavItem, NavList } from "./BurgerMenu.styled";
import { useAppDispatch } from "@/hooks";
import { setCategories } from "@/redux/catalog/slice";

const BurgerMenu: FC<{ categories: ICategory[] }> = ({ categories }) => {

  // const dispatch = useAppDispatch()

  // const handleMenuItemClick = ( name: string, menuId: number) => {    
  //   dispatch(setCategories({name, menuId} )); // Отправляем действие в Redux
  //   console.log(`Clicked item name: ${name}, menuId: ${menuId}`);
  // };
  return (
    <MenuWrapper>
      <Container>
        <NavWrapper>
          <NavList>
            <NavItem>
              <NavLink href={"/discounts"} text={"Акції"} isDiscount />
            </NavItem>
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
          </NavList>
        </NavWrapper>
      </Container>
    </MenuWrapper>
  );
};

export default BurgerMenu;
