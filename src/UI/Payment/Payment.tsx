import { FC } from "react";

import { useScreen } from "@/hooks";
import CreditCardIcon from "../icons/CreditCardIcon";
import { Text, Section, Title, TitleWrapper, Wrapper } from "./Payment.styled";
import { IconWrapper } from "@/styles/commonStyles";

const Payment: FC = () => {
  const { isTablet } = useScreen();
  return (
    <Section>
      <Wrapper>
        <TitleWrapper>
          <IconWrapper>
            <CreditCardIcon
              width={isTablet ? "32" : "24"}
              height={isTablet ? "32" : "24"}
            />
          </IconWrapper>
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
