import { FC } from "react";

import UkrPost from "../UkrPost";
import NewPost from "../NewPost";
import Payment from "../Payment";

import { Container } from "@/styles/commonStyles";
import {
  Title,
  TitleWrapper,
  TitleContainer,
  PostsWrapper,
  Section,
} from "./DeliveryPageMainBlock.styled";

const DeliveryPageMainBlock: FC = () => {
  return (
    <Section>
      <Container>
        <TitleWrapper>
          <TitleContainer>
            <Title>Доставка і оплата</Title>
          </TitleContainer>
        </TitleWrapper>
        <PostsWrapper>
          <UkrPost />
          <NewPost />
        </PostsWrapper>
        <Payment />
      </Container>
    </Section>
  );
};

export default DeliveryPageMainBlock;
