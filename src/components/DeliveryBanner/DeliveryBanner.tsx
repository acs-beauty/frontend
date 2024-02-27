import { FC } from "react";

import { Container } from "@/styles/commonStyles";
import { Wrapper, Title, Section } from "./DeliveryBanner.styled";

const DeliveryBanner: FC = () => {
  return (
    <Section>
      <Container>
        <Wrapper>
          <Title>Безкоштовна доставка від 2500 грн</Title>
        </Wrapper>
      </Container>
    </Section>
  );
};

export default DeliveryBanner;
