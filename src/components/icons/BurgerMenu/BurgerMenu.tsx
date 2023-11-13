import { FC } from "react";

const BurgerMenu: FC<{ width: string; height: string }> = ({
  width,
  height,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 8V6H21V8H3ZM3 13H21V11H3V13ZM3 18H21V16H3V18Z"
        fill="#5A5757"
      />
    </svg>
  );
};

export default BurgerMenu;
