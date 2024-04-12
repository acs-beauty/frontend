import React from "react"
import { IOrder, orders } from "./orders"
import MyOrderItem from "../MyOrderItem"

const MyOrdersList = () => {
  return (
    <ul>
      {orders.map((order: IOrder, index) => (
        <MyOrderItem key={index} order={order} />
      ))}
    </ul>
  )
}

export default MyOrdersList
