import { FC, useState } from "react";
import Image from "next/image";

import { Button, DropDownList } from "./SmallDropDownMenu.styled";

const SmallDropDownMenu: FC<{ menuItems: string[] }> = ({ menuItems }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };
  return (
    <>
      <Button type="button" onClick={toggleDropdown}>
        <Image
          src={
            dropdownOpen
              ? "/icons/navigate_after.svg"
              : "/icons/navigate_before.svg"
          }
          alt={"arrow"}
          width={32}
          height={32}
        />
      </Button>

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
