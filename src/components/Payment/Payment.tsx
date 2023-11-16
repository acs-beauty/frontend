import { FC } from "react";

import { useScreen } from "@/hooks";
import CreditCard from "../icons/CreditCard";
import { Text, Section, Title, TitleWrapper, Wrapper } from "./Payment.styled";

const Payment: FC = () => {
  const { isMobile } = useScreen();
  return (
    <Section>
      <Wrapper>
        <TitleWrapper>
          <div>
            <CreditCard
              width={isMobile ? "24" : "32"}
              height={isMobile ? "24" : "32"}
            />
          </div>
          <Title>Оплата</Title>
        </TitleWrapper>
        <Text>
          Ми приймаємо оплату на рахунок IBAN у повному обсязі або накладений
          платіж із передплатою 100 грн.
        </Text>
      </Wrapper>
    </Section>
  );
};

export default Payment;
