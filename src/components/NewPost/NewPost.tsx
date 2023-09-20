import { FC } from "react";
import Image from "next/image";

import { Wrapper, ImageWrapper, List, ListItem, Text } from "./NewPost.styled";

const NewPost: FC = () => {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image
          src={"icons/novaposhta.svg"}
          alt="нова пошта"
          width={369}
          height={117}
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
          <Text>Терміни доставки: 1-3 дні</Text>
        </ListItem>
        <ListItem>
          <Image
            src={"icons/truck.svg"}
            alt="вантажна машина"
            width={32}
            height={32}
          />
          <Text>Вартість доставки: від 60 грн</Text>
        </ListItem>
        <ListItem>
          <Image
            src={"icons/truck.svg"}
            alt="вантажна машина"
            width={32}
            height={32}
          />
          <Text>
            Замовлення на суму від 2500 грн відправляються безкоштовно
          </Text>
        </ListItem>
      </List>
    </Wrapper>
  );
};

export default NewPost;
