import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import { IPreviewProduct } from "@/types/components";
import CardLabel from "../CardLabel";
import {
  ImageContainer,
  CardWrapper,
  ContentWrapper,
  HeartContainer,
  LabelWrapper,
  Title,
  Price,
  LinksWrapper,
  ProductLink,
  Cart,
  CartWrapper
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
        <Title>{titleName}</Title>
        <Price>{price} грн</Price>
        <LinksWrapper>
          <CartWrapper>
            <Image
              src={"/icons/shopping.svg"}
              alt={"heart"}
              width={24}
              height={24}
            />
            <Cart role="button">В кошик</Cart>
          </CartWrapper>
          <Link
            href={`/${categoryLinkKey}/${subcategoryLinkKey}/${productId}`}
            passHref
            legacyBehavior
          >
            <ProductLink>Детальніше</ProductLink>
          </Link>
        </LinksWrapper>
      </ContentWrapper>
    </CardWrapper>
  );
};

export default ProductCard;
