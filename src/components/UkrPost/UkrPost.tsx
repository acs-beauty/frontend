import { FC } from "react";
import Image from "next/image";

import { Wrapper, ImageWrapper, List, ListItem, Text } from "./UkrPost.styled";

const UkrPost: FC = () => {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image
          src={"icons/ukrposhta.svg"}
          alt="укрпошта"
          width={369}
          height={99}
        />
      </ImageWrapper>
      <List>
        <ListItem>
          <Image
            src={"icons/truck.svg"}
            alt="вантажна машина"
            width={32}
            height={32}
          />
          <Text>Відправка здійсняюється щодня (окрім неділі)</Text>
        </ListItem>
        <ListItem>
          <Image
            src={"icons/truck.svg"}
            alt="вантажна машина"
            width={32}
            height={32}
          />
          <Text>Терміни доставки: 2-7 дні</Text>
        </ListItem>
        <ListItem>
          <Image
            src={"icons/truck.svg"}
            alt="вантажна машина"
            width={32}
            height={32}
          />
          <Text>Вартість доставки: від 40 грн</Text>
        </ListItem>
        <ListItem>
          <Image
            src={"icons/truck.svg"}
            alt="вантажна машина"
            width={32}
            height={32}
          />
          <Text>Можлива доставка закордон</Text>
        </ListItem>
        <ListItem>
          <Image
            src={"icons/truck.svg"}
            alt="вантажна машина"
            width={32}
            height={32}
          />
          <Text>Замовлення на суму від 2500 грн відправляються безкоштовно</Text>
        </ListItem>
      </List>
    </Wrapper>
  );
};

export default UkrPost;
