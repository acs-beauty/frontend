import { FC } from "react";

import NavigateAfterIcon from "../icons/NavigateAfterIcon";
import { Button } from "./ArrowButtonNext.styled";

const ArrowButtonNext: FC<{ onClick?: () => void }> = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      <NavigateAfterIcon />
    </Button>
  );
};

export default ArrowButtonNext;
