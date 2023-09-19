import { FC } from "react";

import DeliveryBanner from "../DeliveryBanner";
import { Wrapper } from "./HomePageMainBlock.styled";

const HomePageMainBlock: FC = () => {
  return (
    <Wrapper>
      <DeliveryBanner />
    </Wrapper>
  );
};

export default HomePageMainBlock;
