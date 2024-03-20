import React, { useState } from "react"
import { OptionWrapper, OptionTitle } from "./Chosen.styled"
import OpenSubMenuIcon from "@/UI/icons/OpenSubMenuIcon"
import CloseSubMenuIcon from "@/UI/icons/CloseSubMenuIcon"

const Chosen = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <OptionWrapper onClick={handleToggle}>
      <OptionTitle>Вибране</OptionTitle>
      {isOpen ? <CloseSubMenuIcon /> : <OpenSubMenuIcon />}
    </OptionWrapper>
  )
}

export default Chosen
