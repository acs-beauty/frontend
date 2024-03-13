import { FC, useState } from "react";
import Link from "next/link";

import NavLink from "../NavLink";
import { IMenu } from "@/types/components";
import OpenSubMenuIcon from "@/UI/icons/OpenSubMenuIcon";
import CloseSubMenuIcon from "@/UI/icons/CloseSubMenuIcon";
import {
  Button,
  DropDownList,
  NavItem,
  SubMenuItem,
  NavLinkContainer,
  SubMenuLink
} from "./DropDownMenu.styled";
import { useAppDispatch } from "@/hooks";
import { setCategories } from "@/redux/catalog/slice";

const DropDownMenu: FC<{
  menuItems: IMenu[];
  href: string;
  text: string;
  menuId: number
}> = ({ menuItems, href, text, menuId }) => {  

  const dispatch = useAppDispatch()
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setDropdownOpen(!dropdownOpen);
  };

  const handleMenuItemClick = ( menuId: number) => {    
    dispatch(setCategories( menuId )); // Отправляем действие в Redux
  };

  return (
    <NavItem onClick={() => handleMenuItemClick( menuId)}>
      <NavLinkContainer>
        <NavLink href={`/${href}`} text={text} />
        <Button type="button" onClick={handleButtonClick}>
          {dropdownOpen ? <CloseSubMenuIcon /> : <OpenSubMenuIcon />}
        </Button>
      </NavLinkContainer>
      {dropdownOpen && (
        <DropDownList>
          {menuItems.map((item, index) => (
            <SubMenuItem key={index}>
              <Link href={`/${href}/${item.linkKey}`} passHref legacyBehavior >
               <SubMenuLink >{item.name}</SubMenuLink>
              </Link>
            </SubMenuItem>
          )) }
        </DropDownList>
      )}
    </NavItem>
  );
};

export default DropDownMenu;
