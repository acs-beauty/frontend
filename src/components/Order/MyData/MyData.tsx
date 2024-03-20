import React, { useState } from "react"
import { OptionWrapper, OptionTitle } from "./MyData.styled"
import OpenSubMenuIcon from "@/UI/icons/OpenSubMenuIcon"
import CloseSubMenuIcon from "@/UI/icons/CloseSubMenuIcon"

const MyData = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <OptionWrapper onClick={handleToggle}>
      <OptionTitle>Мої дані</OptionTitle>
      {isOpen ? <CloseSubMenuIcon /> : <OpenSubMenuIcon />}
    </OptionWrapper>
  )
}

export default MyData
