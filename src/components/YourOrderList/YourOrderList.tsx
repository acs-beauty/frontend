import React from "react"
import { YourOrderWrapper } from "./YourOrderList.styled"
import { IOrder, orders } from "./orders"
import { YourOrderItem } from "../YourOrderItem"

const YourOrderList = () => {
  return (
    <YourOrderWrapper>
      {orders.map((order: IOrder) => (
        <YourOrderItem key={order.id} order={order} />
      ))}
    </YourOrderWrapper>
  )
}

export default YourOrderList
