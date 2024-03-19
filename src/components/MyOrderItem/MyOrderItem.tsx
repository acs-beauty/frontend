import React from "react"
import { IOrder } from "../MyOrdersList/orders"
import OpenSubMenuIcon from "@/UI/icons/OpenSubMenuIcon"
import {
  OrderItemWrapper,
  FlexDivSpaceBetweenMb12,
  FlexDivSpaceBetweenMb9,
  OrderItemText400Mb12,
  OrderItemText400,
  OrderItemText500,
  OrderItemText600,
  Details,
} from "./MyOrderItem.styled"

const MyOrderItem = ({ order }: { order: IOrder }) => {
  return (
    <OrderItemWrapper>
      <FlexDivSpaceBetweenMb12>
        <OrderItemText500>Замовлення № {order.id}</OrderItemText500>
        <OrderItemText600>{order.status}</OrderItemText600>
      </FlexDivSpaceBetweenMb12>
      <OrderItemText400Mb12>{order.date}</OrderItemText400Mb12>
      <FlexDivSpaceBetweenMb9>
        <OrderItemText500>{order.count} товари</OrderItemText500>
        <OrderItemText600>{order.total} грн</OrderItemText600>
      </FlexDivSpaceBetweenMb9>
      <Details>
        <OrderItemText400>Деталі</OrderItemText400>
        <OpenSubMenuIcon />
      </Details>
    </OrderItemWrapper>
  )
}

export default MyOrderItem
