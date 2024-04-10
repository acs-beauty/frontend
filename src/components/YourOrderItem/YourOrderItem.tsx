import React, { useState } from "react"
import { IOrder } from "../YourOrderList/orders"
import {
  OrderItem,
  ImageWrapper,
  OrderItemTitle,
  OrderItemVendor,
  OrderItemPrice,
  ChangeCountBtn,
  ChangeCountBtnWrapper,
  CountSpan,
} from "./YourOrderItem.styled"
import Image from "next/image"

interface YourOrderItemProps {
  order: IOrder
}

const YourOrderItem = ({ order }: YourOrderItemProps) => {
  const [count, setCount] = useState<number>(1)

  return (
    <OrderItem>
      <ImageWrapper>
        <Image src={order.imgUrl} width={100} height={100} alt="product image" />
      </ImageWrapper>
      <div>
        <OrderItemTitle>{order.title}</OrderItemTitle>
        <OrderItemVendor>Артикул: {order.vendor}</OrderItemVendor>
        <OrderItemPrice>{order.price} грн</OrderItemPrice>
        <ChangeCountBtnWrapper>
          <ChangeCountBtn
            onClick={() => {
              setCount(prev => prev - 1)
            }}
            disabled={count <= 1}
          >
            -
          </ChangeCountBtn>
          <CountSpan>{count}</CountSpan>
          <ChangeCountBtn
            onClick={() => {
              setCount(prev => prev + 1)
            }}
          >
            +
          </ChangeCountBtn>
        </ChangeCountBtnWrapper>
      </div>
    </OrderItem>
  )
}

export default YourOrderItem
