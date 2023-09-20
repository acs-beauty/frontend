import { FC } from "react";

import DeliveryBanner from "../DeliveryBanner";
import UkrPost from "../UkrPost";
import NewPost from "../NewPost";
import SelfPickup from "../SelfPickup";
import Payment from "../Payment";
import { Container } from "../Common/Container.styled";
import {
  Title,
  TitleWrapper,
  TitleContainer,
  PostsWrapper
} from "./DeliveryPageMainBlock.styled";

const DeliveryPageMainBlock: FC = () => {
  return (
    <div>
      <TitleWrapper>
        <Container>
          <TitleContainer>
            <Title>Доставка і оплата</Title>
          </TitleContainer>
        </Container>
      </TitleWrapper>
      <DeliveryBanner />
      <Container>
        <PostsWrapper>
          <UkrPost />
          <NewPost />
        </PostsWrapper>
      </Container>
      <SelfPickup/>
      <Payment/>
    </div>
  );
};

export default DeliveryPageMainBlock;
