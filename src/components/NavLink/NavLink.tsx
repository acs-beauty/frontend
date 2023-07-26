import { FC } from "react";
import Link from "next/link";

const NavLink: FC<{ href: string; text: string }> = ({ href, text }) => {
  return (
    <Link href={href} passHref legacyBehavior>
      <a>{text}</a>
    </Link>
  );
};

export default NavLink;
