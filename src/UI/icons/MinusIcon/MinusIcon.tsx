import React, { FC } from "react";
import { IProps } from "@/types/components/"

const MinusIcon: FC<IProps> = ({
  width = 24,
  height = 24,
  fill = "#5A5757",
  
}) => {
  return (
    <svg
      width={width}
      height={height}
      fill="none"      
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={fill}
        id="Vector" d="M19 13H5V11H19V13Z" 
        
      />
    </svg>
  );
};

export default MinusIcon;