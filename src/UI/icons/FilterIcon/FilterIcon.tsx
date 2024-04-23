import { FC } from "react";

const FilterIcon: FC<{ width: string; height: string }> = ({ width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
     <path id="Vector" d="M6 13H18V11H6M3 6V8H21V6M10 18H14V16H10V18Z" fill="#5A5757"/>

    </svg>
  );
};

export default FilterIcon;
