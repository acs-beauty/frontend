import { FC, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { Button, DropDownList } from "./SmallDropDownMenu.styled";

const SmallDropDownMenu: FC<{ menuItems: string[] }> = ({ menuItems }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <>
      {dropdownOpen ? (
        <Button type="button" onClick={() => setDropdownOpen(false)}>
          <Image
            src={"/icons/navigate_after.svg"}
            alt={"arrow-down"}
            width={32}
            height={32}
          />
        </Button>
      ) : (
        <Button type="button" onClick={() => setDropdownOpen(true)}>
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
              <p>{menu}</p>
            </li>
          ))}
        </DropDownList>
      )}
    </>
  );
};

export default SmallDropDownMenu;
