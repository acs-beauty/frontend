import { FC } from "react";
import Image from "next/image";

import { Container } from "../Common/Container.styled";
import { Text, Section, Title, TitleWrapper, Wrapper } from "./SelfPickup.styled";

const SelfPickup: FC = () => {
  return (
    <Section>
      <Container>
        <Wrapper>
          <TitleWrapper>
            <Image
              src={"icons/truck.svg"}
              alt="вантажна машина"
              width={40}
              height={40}
            />
            <Title>Самовивіз</Title>
          </TitleWrapper>
          <Text>
            Ви маєте змогу забрати своє замовлення самостійно у м.Хмельницький
            за адресою....
          </Text>
        </Wrapper>
      </Container>
    </Section>
  );
};

export default SelfPickup;