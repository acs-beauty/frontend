import React, { useState } from "react"
import { OptionWrapper, OptionTitle } from "./MyOrders.styled"
import OpenSubMenuIcon from "@/UI/icons/OpenSubMenuIcon"
import CloseSubMenuIcon from "@/UI/icons/CloseSubMenuIcon"
import MyOrdersList from "@/components/MyOrdersList"

const MyOrders = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <OptionWrapper onClick={handleToggle}>
        <OptionTitle>Мої замовлення</OptionTitle>
        {isOpen ? <CloseSubMenuIcon /> : <OpenSubMenuIcon />}
      </OptionWrapper>
      {isOpen && <MyOrdersList />}
    </>
  )
}

export default MyOrders
