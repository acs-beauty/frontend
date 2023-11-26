import { FC } from "react";

const CareCategoryIcon: FC<{ width: string; height: string }> = ({width, height}) => {
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
        d="M79.0108 104.7H61.6109L60.0108 73.6999C59.8108 70.4999 62.4109 67.8999 65.4109 67.8999H75.2108C78.4108 67.8999 80.8109 70.4999 80.6109 73.6999L79.0108 104.7Z"
        stroke="#453E42"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M76.0113 60.1001H64.6113V68.1001H76.0113V60.1001Z"
        stroke="#453E42"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M74.0107 96.3001H67.0107L65.0107 77.1001H75.8108L74.0107 96.3001Z"
        stroke="#453E42"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M79.2109 101.3H99.2109V72.1002C99.2109 69.1002 96.811 66.7002 93.811 66.7002H85.2109C82.8109 66.7002 80.6109 68.3002 80.0109 70.7002"
        stroke="#453E42"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M95.6108 66.7H83.0107V55.9C87.2107 54.7 91.4108 54.7 95.6108 55.9V66.7Z"
        stroke="#453E42"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CareCategoryIcon;
