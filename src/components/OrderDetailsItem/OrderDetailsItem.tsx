import React from "react"
import { IOrderDetail } from "../OrderDetailsList/orderDetails"
import {
  DetailsWrapper,
  GoodImg,
  DetailsInfo,
  DetailsTitle,
  DetailsVendor,
  CountTotalWrapper,
  CountText,
  TotalText,
} from "./OrderDetailsItem.styled"

const OrderDetailsItem = ({ item }: { item: IOrderDetail }) => {
  return (
    <DetailsWrapper>
      <div>
        <GoodImg src={item.photoUrl} alt="good" width={109} height={109} />
      </div>
      <DetailsInfo>
        <DetailsTitle>{item.title}</DetailsTitle>
        <DetailsVendor>Артикул: {item.vendor}</DetailsVendor>
        <CountTotalWrapper>
          <CountText>{item.count} шт</CountText>
          <TotalText>{item.total} грн</TotalText>
        </CountTotalWrapper>
      </DetailsInfo>
    </DetailsWrapper>
  )
}

export default OrderDetailsItem
