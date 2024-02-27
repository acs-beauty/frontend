import { FC } from "react";

import NavigateBeforeIcon from "../icons/NavigateBeforeIcon";
import { Button } from "./ArrowButtonPrevious.styled";

const ArrowButtonPrevious: FC<{onClick?: () => void}> = ({ onClick }) => {
    return (
      <Button
        onClick={onClick}        
      >
       <NavigateBeforeIcon />
      </Button>
    );
  };

  export default ArrowButtonPrevious