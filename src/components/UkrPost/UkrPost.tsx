import { FC } from "react";
import Image from "next/image";

import Truck from "../icons/Truck";
import { useScreen } from "@/hooks";
import { Wrapper, ImageWrapper, List, ListItem, Text } from "./UkrPost.styled";

const UkrPost: FC = () => {
  const { isMobile } = useScreen();
  return (
    <Wrapper>
      <ImageWrapper>
        <Image
          src={"icons/ukrposhta.svg"}
          alt="укрпошта"
          fill
          style={{ objectFit: "cover" }}
          sizes="(min-width: 1440px) 325px, (min-width: 768px) 325px,(min-width: 360px) 213px"
        />
      </ImageWrapper>
      <List>
        <ListItem>
          <div>
            <Truck
              width={isMobile ? "24" : "32"}
              height={isMobile ? "24" : "32"}
            />
          </div>
          <Text>Відправка здійсняюється щодня (окрім неділі)</Text>
        </ListItem>
        <ListItem>
          <div>
            <Truck
              width={isMobile ? "24" : "32"}
              height={isMobile ? "24" : "32"}
            />
          </div>
          <Text>Терміни доставки: 2-7 дні</Text>
        </ListItem>
        <ListItem>
          <div>
            <Truck
              width={isMobile ? "24" : "32"}
              height={isMobile ? "24" : "32"}
            />
          </div>
          <Text>Вартість доставки: від 40 грн</Text>
        </ListItem>
        <ListItem>
          <div>
            <Truck
              width={isMobile ? "24" : "32"}
              height={isMobile ? "24" : "32"}
            />
          </div>
          <Text>
            Замовлення на суму від 2500 грн відправляються безкоштовно
          </Text>
        </ListItem>
      </List>
    </Wrapper>
  );
};

export default UkrPost;
