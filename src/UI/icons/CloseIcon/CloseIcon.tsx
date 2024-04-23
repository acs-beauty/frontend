import { FC } from "react";

const CloseIcon: FC<{ width: string; height: string }> = ({
  width,
  height,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="CloseIcon"
    >
      <path
        d="M17.9465 15.9998L25.3332 23.3865V25.3332H23.3865L15.9998 17.9465L8.61317 25.3332H6.6665V23.3865L14.0532 15.9998L6.6665 8.61317V6.6665H8.61317L15.9998 14.0532L23.3865 6.6665H25.3332V8.61317L17.9465 15.9998Z"
        fill="#5A5757"
      />
    </svg>
  );
};

export default CloseIcon;
