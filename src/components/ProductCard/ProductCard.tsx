import { FC } from "react";
import Image from "next/image";

import { IPreviewProduct } from "@/types/components";
import CardLabel from "../CardLabel";
import {
  ImageContainer,
  CardWrapper,
  ContentWrapper,
  HeartContainer,
  LabelWrapper,
} from "./ProductCard.styled";

const ProductCard: FC<IPreviewProduct> = (props) => {
  const {
    productId,
    titleName,
    mainImageName,
    price,
    discountPrice,
    quantityStatus,
    novelty,
    hit,
    subcategoryLinkKey,
    categoryLinkKey,
  } = props;
  return (
    <CardWrapper>
      {(novelty || hit || discountPrice) && (
        <LabelWrapper>
          {novelty && <CardLabel text="New" isSale={false} />}
          {hit && <CardLabel text="Hit" isSale={false} />}
          {discountPrice && <CardLabel text="Sale" isSale={true} />}
        </LabelWrapper>
      )}

      <ImageContainer>
        <Image
          src={mainImageName}
          alt={titleName}
          fill
          sizes="(min-width: 28rem) 13.1rem,(min-width: 100rem) 30.5rem"
        />
      </ImageContainer>
      <HeartContainer>
        <Image src={"/icons/heart.svg"} alt={"heart"} width={24} height={24} />
      </HeartContainer>
      <ContentWrapper>
        <h3>{titleName}</h3>
        <p>{price}</p>
        <div>
          <div>
            <Image
              src={"/icons/shopping.svg"}
              alt={"heart"}
              width={24}
              height={24}
            />
            <button role="button">В кошик</button>
          </div>
          <button role="button">Детальніше</button>
        </div>
      </ContentWrapper>
    </CardWrapper>
  );
};

export default ProductCard;
