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

const DropDownMenu: FC<{
  menuItems: IMenu[];
  menuId: number;
  href: string;
  text: string;
}> = ({ menuItems, href, text }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <NavItem>
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
              <Link href={`/${href}/${item.linkKey}`} passHref legacyBehavior>
                <SubMenuLink>{item.name}</SubMenuLink>
              </Link>
            </SubMenuItem>
          ))}
        </DropDownList>
      )}
    </NavItem>
  );
};

export default DropDownMenu;
