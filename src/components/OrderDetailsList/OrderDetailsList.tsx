import React from "react"
import { IOrderDetail, orderDetails } from "./orderDetails"
import OrderDetailsItem from "../OrderDetailsItem"
import {
  DetailsList,
  TotalSumWrapper,
  TotalSumText,
  PaymentWrapper,
  PaymentText,
  PaymentDetails,
  DeliveryWrapper,
  DeliveryText,
  DeliveryService,
  DeliveryAddress,
} from "./OrderDetailsList.styled"
import CreditCardIcon from "@/UI/icons/CreditCardIcon"
import TruckIcon from "@/UI/icons/TruckIcon"

const OrderDetailsList = () => {
  const totalSum = orderDetails.reduce((acc, detail) => acc + detail.total, 0)

  return (
    <DetailsList>
      {orderDetails.map((item: IOrderDetail) => (
        <OrderDetailsItem key={item.id} item={item} />
      ))}
      <TotalSumWrapper>
        <TotalSumText>Всього {totalSum} грн</TotalSumText>
      </TotalSumWrapper>
      <PaymentWrapper>
        <CreditCardIcon width="24" height="24" fill="#453E42" />
        <PaymentText>Оплата</PaymentText>
      </PaymentWrapper>
      <PaymentDetails>На розрахунковий рахунок</PaymentDetails>
      <DeliveryWrapper>
        <TruckIcon width="24" height="24" fill="#453E42" />
        <DeliveryText>Доставка</DeliveryText>
      </DeliveryWrapper>
      <DeliveryService>Нова Пошта</DeliveryService>
      <DeliveryAddress>м.Львів, відділення 134, вул.Городоцька 3456</DeliveryAddress>
    </DetailsList>
  )
}

export default OrderDetailsList
