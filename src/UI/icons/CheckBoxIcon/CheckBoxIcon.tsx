import React, { FC } from "react";

const CheckBoxIcon: FC = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* <rect x="0.5" y="0.5" width="23" height="23" stroke="#C1BABA" /> */}
      <path id="Vector" d="M19 3H5C3.89 3 3 3.89 3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V5C21 3.89 20.1 3 19 3ZM19 5V19H5V5H19Z" fill="#5A5757"/>
    </svg>
  );
};

export default CheckBoxIcon;