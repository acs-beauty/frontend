import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import CartIcon from "@/UI/icons/CartIcon";
import HeartIcon from "@/UI/icons/HeartIcon";
import { IPreviewProduct } from "@/types/components";
import CardLabel from "../../UI/CardLabel";
import {
  ImageContainer,
  CardWrapper,
  ContentWrapper,
  HeartContainer,
  LabelWrapper,
  Title,
  Price,
  CartButton,
} from "./ProductCard.styled";
import { generateImageSizesString } from "@/helpers";

const ProductCard: FC<{ product: IPreviewProduct; isHeartIcon: boolean }> = ({
  product,
  isHeartIcon,
}) => {
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
  } = product;

  const iconProps = {
    width: "24",
    height: "24",
  };

  const imageSizes = generateImageSizesString("156px", "344px", "305px");

  const handleAddToCart = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    alert("Товар доданий в кошик!");
  };

  return (
    <Link href={`/${categoryLinkKey}/${subcategoryLinkKey}/${productId}`}>
      <CardWrapper>
        {(novelty || hit || discountPrice) && (
          <LabelWrapper>
            {novelty && <CardLabel text="New" isSale={false} />}
            {hit && <CardLabel text="Hit" isSale={false} />}
            {discountPrice && <CardLabel text="Sale" isSale={true} />}
          </LabelWrapper>
        )}

        <ImageContainer>
          <Image src={mainImageName} alt={titleName} fill sizes={imageSizes} />
        </ImageContainer>
        {isHeartIcon && (
          <HeartContainer>
            <HeartIcon color="black" opacity="0.5" {...iconProps} />
          </HeartContainer>
        )}

        <ContentWrapper>
          <Title>{titleName}</Title>
          <Price>{price} грн</Price>
          <CartButton role="button"  onClick={handleAddToCart}>
            <CartIcon {...iconProps} />В кошик
          </CartButton>
        </ContentWrapper>
      </CardWrapper>
    </Link>
  );
};

export default ProductCard;
