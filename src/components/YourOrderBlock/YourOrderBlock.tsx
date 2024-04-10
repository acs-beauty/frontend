import React from "react"
import {
  OrderBlockWrapper,
  FlexDivYourOrder,
  FlexDivGoodsNum,
  YourOrderText,
  GoodsNumText,
} from "./YourOrderBlock.styled"
import OpenSubMenuIcon from "@/UI/icons/OpenSubMenuIcon"

const YourOrderBlock = () => {
  return (
    <OrderBlockWrapper>
      <FlexDivYourOrder>
        <YourOrderText>Ваше замовлення</YourOrderText>
        <YourOrderText>1245 грн</YourOrderText>
      </FlexDivYourOrder>
      <FlexDivGoodsNum>
        <GoodsNumText>12 товарів</GoodsNumText>
        <OpenSubMenuIcon />
      </FlexDivGoodsNum>
    </OrderBlockWrapper>
  )
}

export default YourOrderBlock
