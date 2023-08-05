import { FC } from "react";

import { Wrapper } from "./CardLabel.styled";

const CardLabel: FC<{ text: string; isSale: boolean }> = ({ text, isSale }) => {
  return (
    <Wrapper isSale={isSale}>
      <p>{text}</p>
    </Wrapper>
  );
};

export default CardLabel;
