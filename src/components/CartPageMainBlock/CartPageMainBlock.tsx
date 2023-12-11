import { FC } from "react";
import Image from "next/image";

import { Container } from "@/styles/commonStyles";
import {
  useAppDispatch,
  useCartGoods,
  useTotalAmount,
  useTotalPrice,
} from "@/hooks";
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
  SubTitle,
  Text,
  SumWrapper,
  CanButton
} from "./CartPageMainBlock.styled";
import Link from "next/link";

const CartPageMainBlock: FC = () => {
  const goods = useCartGoods();
  const dispatch = useAppDispatch();
  const totalAmount = useTotalAmount();
  const totalPrice = useTotalPrice();
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
      
          <Title>Кошик</Title>
        
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
                  <CanButton
                    type="button"
                    onClick={() => handleDeleteItem(item.id)}
                  >
                    <TrashCanIcon />
                  </CanButton>
                </Wrapper>
              </Item>
            ))}
          </ul>
        )}
        <div>
          <SumWrapper>
            <SubTitle>Всього товарів</SubTitle>
            <Text>{totalAmount}</Text>
          </SumWrapper>
          <SumWrapper>
            <SubTitle>Загальна сума</SubTitle>
            <Text>{totalPrice} грн</Text>
          </SumWrapper>
        </div>
        <Link href={"/order"}>Оформити замовлення</Link>
      </Container>
    </section>
  );
};

export default CartPageMainBlock;
