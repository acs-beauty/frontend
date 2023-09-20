import { FC } from "react";
import Image from "next/image";

import { Container } from "../Common/Container.styled";
import { Text, Section, Title, TitleWrapper, Wrapper } from "./Payment.styled";

const Payment: FC = () => {
  return (
    <Section>
      <Container>
        <Wrapper>
          <TitleWrapper>
            <Image
              src={"icons/card.svg"}
              alt="платіжна картка"
              width={40}
              height={32}
            />
            <Title>Оплата</Title>
          </TitleWrapper>
          <Text>
            Ми приймаємо оплату на рахунок IBAN у повному обсязі або накладений
            платіж із передплатою 100 грн.
          </Text>
        </Wrapper>
      </Container>
    </Section>
  );
};

export default Payment;
