import { FC } from "react";
import Link from "next/link";

import { StyledLink } from "./NavLink.styled";

const NavLink: FC<{ href: string; text: string; isDiscount?: boolean }> = ({
  href,
  text,
  isDiscount,
}) => {
  return (
    <Link href={href} passHref legacyBehavior>
      <StyledLink isDiscount={isDiscount}>{text}</StyledLink>
    </Link>
  );
};

export default NavLink;
