import React, { useState } from "react"
import {
  OrderBlockWrapper,
  FlexDivYourOrder,
  FlexDivGoodsNum,
  YourOrderText,
  GoodsNumText,
} from "./YourOrderBlock.styled"
import OpenSubMenuIcon from "@/UI/icons/OpenSubMenuIcon"
import YourOrderList from "../YourOrderList/YourOrderList"

const YourOrderBlock = () => {
  const [isYourOrderOpen, setisYourOrderOpen] = useState<boolean>(false)

  const handleYourOrderListToggle = () => {
    setisYourOrderOpen(!isYourOrderOpen)
  }

  return (
    <>
      <OrderBlockWrapper>
        <FlexDivYourOrder>
          <YourOrderText>Ваше замовлення</YourOrderText>
          <YourOrderText>1245 грн</YourOrderText>
        </FlexDivYourOrder>
        <FlexDivGoodsNum onClick={handleYourOrderListToggle}>
          <GoodsNumText>12 товарів</GoodsNumText>
          <OpenSubMenuIcon />
        </FlexDivGoodsNum>
      </OrderBlockWrapper>
      {isYourOrderOpen && <YourOrderList />}
    </>
  )
}

export default YourOrderBlock
