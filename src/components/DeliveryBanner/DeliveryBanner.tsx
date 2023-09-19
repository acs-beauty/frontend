import { FC } from "react";

import { Container } from "../Common/Container.styled";
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
