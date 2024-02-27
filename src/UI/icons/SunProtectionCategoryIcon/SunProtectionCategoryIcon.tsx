import { FC } from "react";

const SunProtectionCategoryIcon: FC<{ width: string; height: string }> = ({
  width,
  height,
}) => {
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
        d="M84.8174 104H76.8174V110.2H84.8174V104Z"
        stroke="#453E42"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M81.0172 79.1999C85.1041 79.1999 88.4172 75.8868 88.4172 71.7999C88.4172 67.713 85.1041 64.3999 81.0172 64.3999C76.9302 64.3999 73.6172 67.713 73.6172 71.7999C73.6172 75.8868 76.9302 79.1999 81.0172 79.1999Z"
        stroke="#453E42"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M91.8169 95.6H69.8169L66.0169 51.8C65.8169 49.8 67.4169 48 69.4169 48H92.2169C94.2169 48 95.817 49.8 95.617 51.8L91.8169 95.6Z"
        stroke="#453E42"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M89 110.4H73C71.4 110.4 70 109 70 107.4V95.6001H92V107.4C91.8 109.2 90.6 110.4 89 110.4Z"
        stroke="#453E42"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M66.417 55H81.217"
        stroke="#453E42"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SunProtectionCategoryIcon;
