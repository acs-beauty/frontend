import { FC } from "react";

const HygieneCategoryIcon: FC<{ width: string; height: string }> = ({width, height}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="80" cy="80" r="79.5" stroke="#453E42" />
      <path
        d="M105.2 72.3999C105.2 86.5999 93.8 97.9999 79.6 97.9999C65.4 97.9999 54 86.5999 54 72.3999H105.2Z"
        stroke="#453E42"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M75 72.4V54.4C75 53 76.2 52 77.4 52H82.4C83.8 52 84.8 53.2 84.8 54.4V62.6C84.8 64 83.6 65 82.4 65C81 65 80 63.8 80 62.6V56.8"
        stroke="#453E42"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M68.1998 95.3999L62.7998 107.4"
        stroke="#453E42"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M90.7998 95.3999L96.1998 107.4"
        stroke="#453E42"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M68.8004 66.3999H60.4004V72.3999H68.8004V66.3999Z"
        stroke="#453E42"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M98.6002 66.3999H90.2002V72.3999H98.6002V66.3999Z"
        stroke="#453E42"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default HygieneCategoryIcon;
