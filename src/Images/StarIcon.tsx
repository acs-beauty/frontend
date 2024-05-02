import React, { FC } from "react";

interface IProps {
  width?: number;
  height?: number
  fill?: string;
  stroke?: string;
}

const StarIcon: FC<IProps> = ({
  width = 24,
  height = 24,
  fill = "black",
  stroke= "rgba(0, 0, 0, 1)",
}) => {
  return (
    <svg
      width={width}
      height={height}
      fill="black"
      stroke={stroke}
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={fill}
        d="M10 15.27L16.18 19L14.54 11.97L20 7.24L12.81 6.62L10 0L7.19 6.62L0 7.24L5.45 11.97L3.82 19L10 15.27Z"
      />
    </svg>
  );
};

export default StarIcon;