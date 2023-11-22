import { FC } from "react";
import Image from "next/image";

import DeliveryList from "@/UI/DeliveryList";
import { generateImageSizesString } from "@/helpers";
import { Wrapper, ImageWrapper } from "./NewPost.styled";

const DeliveryItems = [
  "Відправка здійсняюється щодня (окрім неділі)",
  "Терміни доставки: 1-3 дні",
  "Вартість доставки: від 60 грн",
  "Замовлення на суму від 2500 грн відправляються безкоштовно",
];

const NewPost: FC = () => {
  const imageSizes = generateImageSizesString("212px", "324px", "324px");

  return (
    <Wrapper>
      <ImageWrapper>
        <Image
          src={"icons/novaposhta.svg"}
          alt="нова пошта"
          fill
          sizes={imageSizes}
        />
      </ImageWrapper>
      <DeliveryList items={DeliveryItems} />
    </Wrapper>
  );
};

export default NewPost;
