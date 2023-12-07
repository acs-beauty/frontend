import { FC } from "react";
import Image from "next/image";

import { Container } from "@/styles/commonStyles";
import { useAppDispatch, useCartGoods } from "@/hooks";
import { IGoodsItem } from "@/types/components";
import { generateImageSizesString } from "@/helpers";
import {
  deleteItem,
  decreaseItemAmount,
  increaseItemAmount,
} from "@/redux/cart/slice";
import RemoveItemIcon from "@/UI/icons/RemoveItemIcon";
import AddItemIcon from "@/UI/icons/AddItemIcon";
import TrashCanIcon from "@/UI/icons/TrashCanIcon";

import {
  ImageContainer,
  Title,
  AmountWrapper,
  AmountText,
  PriceText,
  ArticleText,
  TitleText,
  Item,
  Wrapper,
} from "./CartPageMainBlock.styled";
import Link from "next/link";

const CartPageMainBlock: FC = () => {
  const goods = useCartGoods();
  const dispatch = useAppDispatch();
  const imageSizes = generateImageSizesString("86px", "105px", "109px");

  const handleDeleteItem = (id: string) => {
    dispatch(deleteItem(id));
  };

  const handleDecreaseItemAmount = (id: string) => {
    dispatch(decreaseItemAmount(id));
  };

  const handleIncreaseItemAmount = (id: string) => {
    dispatch(increaseItemAmount(id));
  };

  return (
    <section>
      <Container>
        <div>
          <Title>Кошик</Title>
        </div>
        {goods.length > 0 && (
          <ul>
            {goods.map((item: IGoodsItem) => (
              <Item key={item.id}>
                <ImageContainer>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes={imageSizes}
                  />
                </ImageContainer>
                <Wrapper>
                  <TitleText>{item.title}</TitleText>
                  <ArticleText>Артикул: {item.article}</ArticleText>
                  <PriceText>{item.price} грн</PriceText>
                  <AmountWrapper>
                    <button
                      role="button"
                      onClick={() => handleDecreaseItemAmount(item.id)}
                      disabled={item.amount <= 1}
                    >
                      <RemoveItemIcon />
                    </button>

                    <AmountText>{item.amount}</AmountText>
                    <button
                      role="button"
                      onClick={() => handleIncreaseItemAmount(item.id)}
                    >
                      <AddItemIcon />
                    </button>
                  </AmountWrapper>
                  <button
                    role="button"
                    onClick={() => handleDeleteItem(item.id)}
                  >
                    <TrashCanIcon />
                  </button>
                </Wrapper>
              </Item>
            ))}
          </ul>
        )}
        <div>
          <div>
            <p>Всього товарів</p>
            <p>3 шт</p>
          </div>
          <div>
            <p>Загальна сума</p>
            <p>996 грн</p>
          </div>
        </div>
        <Link href={"/order"}>ОФОРМИТИ ЗАМОВЛЕННЯ</Link>
      </Container>
    </section>
  );
};

export default CartPageMainBlock;
