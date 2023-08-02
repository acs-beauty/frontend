import { FC, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { IMenu } from "@/types/components";
import { Button, DropDownList } from "./DropDownMenu.styled";

const DropDownMenu: FC<{ menuItems: IMenu[]; menuId: number }> = ({
  menuItems,
  menuId,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <>
      {dropdownOpen ? (
        <Button
          type="button"
          aria-haspopup="menu"
          aria-expanded={dropdownOpen ? "true" : "false"}
          onClick={() => setDropdownOpen(false)}
        >
          <Image
            src={"/icons/navigate_before.svg"}
            alt={"arrow-down"}
            width={32}
            height={32}
          />
        </Button>
      ) : (
        <Button
          type="button"
          aria-haspopup="menu"
          aria-expanded={dropdownOpen ? "true" : "false"}
          onClick={() => setDropdownOpen(true)}
        >
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
          {menuItems.map((menu, index) => (
            <li key={index}>
              <Link href={menu.linkKey} passHref legacyBehavior>
                <a>{menu.name}</a>
              </Link>
            </li>
          ))}
        </DropDownList>
      )}
    </>
  );
};

export default DropDownMenu;
