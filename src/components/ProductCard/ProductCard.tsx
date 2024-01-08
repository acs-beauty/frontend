import { FC } from "react"
import Image from "next/image"

import CartIcon from "@/UI/icons/CartIcon"
import HeartIcon from "@/UI/icons/HeartIcon"
import { IProduct } from "@/types/components"
import CardLabel from "../../UI/CardLabel"
import {
  ImageContainer,
  CardWrapper,
  ContentWrapper,
  HeartContainer,
  LabelWrapper,
  Title,
  Price,
  CartButton,
  StyledLink,
} from "./ProductCard.styled"
import { generateImageSizesString } from "@/helpers"
import { useAppDispatch } from "@/hooks"
import { addItem } from "@/redux/cart/slice"

const ProductCard: FC<{ product: IProduct; isHeartIcon: boolean }> = ({
  product,
  isHeartIcon,
}) => {
  const { productId, titleName, mainImageName, price, discountPrice, novelty, article, hit, slug } =
    product

  const iconProps = {
    width: "24",
    height: "24",
  }

  const dispatch = useAppDispatch()

  const imageSizes = generateImageSizesString("156px", "305px", "305px")

  const handleAddToCart = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    dispatch(
      addItem({
        id: productId,
        title: titleName,
        article: article,
        price: price,
        discountPrice: discountPrice,
        image: mainImageName,
        amount: 1,
      })
    )
    alert("Товар доданий в кошик!")
  }

  return (
    <CardWrapper>
      <StyledLink href={`/product/${slug}`}>
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
          <CartButton role="button" onClick={handleAddToCart}>
            <CartIcon {...iconProps} />В кошик
          </CartButton>
        </ContentWrapper>
      </StyledLink>
    </CardWrapper>
  )
}

export default ProductCard
