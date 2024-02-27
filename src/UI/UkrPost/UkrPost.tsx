import { FC } from "react";
import Image from "next/image";

import DeliveryList from "@/UI/DeliveryList";
import { generateImageSizesString } from "@/helpers";
import { Wrapper, ImageWrapper } from "./UkrPost.styled";

const DeliveryItems = [
  "Відправка здійсняюється щодня (окрім неділі)",
  "Терміни доставки: 2-7 дні",
  "Вартість доставки: від 40 грн",
  "Замовлення на суму від 2500 грн відправляються безкоштовно",
];

const UkrPost: FC = () => {
  const imageSizes = generateImageSizesString("213px", "325px", "325px");

  return (
    <Wrapper>
      <ImageWrapper>
        <Image
          src={"icons/ukrposhta.svg"}
          alt="укрпошта"
          fill
          style={{ objectFit: "cover" }}
          sizes={imageSizes}
        />
      </ImageWrapper>
      <DeliveryList items={DeliveryItems} />
    </Wrapper>
  );
};

export default UkrPost;
