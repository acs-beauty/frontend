import { FC } from "react";
import Image from "next/image";

import Truck from "../icons/Truck";
import { Wrapper, ImageWrapper, List, ListItem, Text } from "./NewPost.styled";
import { useScreen } from "@/hooks";

const NewPost: FC = () => {
  const { isMobile } = useScreen();

  return (
    <Wrapper>
      <ImageWrapper>
        <Image
          src={"icons/novaposhta.svg"}
          alt="нова пошта"
          fill
          // style={{ objectFit: "cover" }}
          sizes="(min-width: 1440px) 324px, (min-width: 768px) 324px,(min-width: 360px) 212px"
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
          <Text>Терміни доставки: 1-3 дні</Text>
        </ListItem>
        <ListItem>
          <div>
            <Truck
              width={isMobile ? "24" : "32"}
              height={isMobile ? "24" : "32"}
            />
          </div>
          <Text>Вартість доставки: від 60 грн</Text>
        </ListItem>
        <ListItem>
          <div>
            <Truck
              width={isMobile ? "24" : "32"}
              height={isMobile ? "24" : "32"}
            />
          </div>
          <Text>Замовлення на суму від 2500 грн відправляються безкоштовно</Text>
        </ListItem>
      </List>
    </Wrapper>
  );
};

export default NewPost;
