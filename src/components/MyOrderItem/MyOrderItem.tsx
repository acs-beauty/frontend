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
  ColoredStatus,
  Details,
} from "./MyOrderItem.styled"
import { declOfNum } from "@/helpers"

const MyOrderItem = ({ order }: { order: IOrder }) => {
  return (
    <OrderItemWrapper>
      <FlexDivSpaceBetweenMb12>
        <OrderItemText500>Замовлення № {order.id}</OrderItemText500>
        <ColoredStatus $status={order.status}>{order.status}</ColoredStatus>
      </FlexDivSpaceBetweenMb12>
      <OrderItemText400Mb12>{order.date}</OrderItemText400Mb12>
      <FlexDivSpaceBetweenMb9>
        <OrderItemText500>
          {order.count} {declOfNum(order.count, ["товар", "товари", "товарів"])}
        </OrderItemText500>
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
