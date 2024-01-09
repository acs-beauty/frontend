import type { NextPage } from "next"
import Image from "next/image"
import Link from "next/link"

import { Container } from "@/styles/commonStyles"
import { deleteItem, decreaseItemAmount, increaseItemAmount } from "@/redux/cart/slice"
import RemoveItemIcon from "@/UI/icons/RemoveItemIcon"
import AddItemIcon from "@/UI/icons/AddItemIcon"
import TrashCanIcon from "@/UI/icons/TrashCanIcon"
import UserLayout from "@/components/UserLayout"
import { categories } from "@/data/categories"
import { getHomePageData } from "@/services/pageOperations"
import { HomePageProps } from "@/types/pages"
import { useAppDispatch, useCartGoods, useTotalAmount, useTotalPrice } from "@/hooks"
import { generateImageSizesString } from "@/helpers"
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
  CanButton,
} from "@/styles/CartPage.styled"

export const getStaticProps = async () => {
  const result = await getHomePageData()
  return result
}

const Cart: NextPage<HomePageProps> = () => {
  const goods = useCartGoods()
  const dispatch = useAppDispatch()
  const totalAmount = useTotalAmount()
  const totalPrice = useTotalPrice()
  const imageSizes = generateImageSizesString("86px", "105px", "109px")

  const handleDeleteItem = (id: number) => {
    dispatch(deleteItem(id))
  }

  const handleDecreaseItemAmount = (id: number) => {
    dispatch(decreaseItemAmount(id))
  }

  const handleIncreaseItemAmount = (id: number) => {
    dispatch(increaseItemAmount(id))
  }
  return (
    <UserLayout title={"Кошик"} categories={categories}>
      <section>
        <Container>
          <Title>Кошик</Title>
          {goods.length > 0 && (
            <ul>
              {goods.map(item => (
                <Item key={item.id}>
                  <ImageContainer>
                    <Image src={item.image} alt={item.title} fill sizes={imageSizes} />
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
                      <button role="button" onClick={() => handleIncreaseItemAmount(item.id)}>
                        <AddItemIcon />
                      </button>
                    </AmountWrapper>
                    <CanButton type="button" onClick={() => handleDeleteItem(item.id)}>
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
      {/* <CartPageMainBlock/> */}
    </UserLayout>
  )
}

export default Cart
