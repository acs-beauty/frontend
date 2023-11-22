import { FC, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import NavLink from "../NavLink";
import { IMenu } from "@/types/components";

import { Container } from "@/styles/commonStyles";
import {
  Button,
  DropDownList,
  NavItem,
  SubMenuItem,
} from "./DropDownMenu.styled";

const DropDownMenu: FC<{
  menuItems: IMenu[];
  menuId: number;
  href: string;
  text: string;
}> = ({ menuItems, href, text }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  const handleFocus = () => {
    setDropdownOpen(true);
  };

  const handleBlur = () => {
    setDropdownOpen(false);
  };

  return (
    <NavItem
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
      isActive={dropdownOpen}
    >
      <NavLink href={`/${href}`} text={text} />
      {dropdownOpen ? (
        <Button type="button">
          <Image
            src={"/icons/navigate_after.svg"}
            alt={"arrow-down"}
            width={32}
            height={32}
          />
        </Button>
      ) : (
        <Button type="button">
          <Image
            src={"/icons/navigate_before.svg"}
            alt={"arrow-down"}
            width={32}
            height={32}
          />
        </Button>
      )}

      {dropdownOpen && (
        <DropDownList>
          {menuItems.map((item, index) => (
            <SubMenuItem key={index}>
              <Link href={`/${href}/${item.linkKey}`} passHref legacyBehavior>
                <a>{item.name}</a>
              </Link>
            </SubMenuItem>
          ))}
        </DropDownList>
      )}
    </NavItem>
  );
};

export default DropDownMenu;
