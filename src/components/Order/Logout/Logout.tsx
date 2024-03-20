import React from "react"
import { OptionWrapper, OptionTitle } from "./Logout.styled"
import LogoutIcon from "@/UI/icons/LogoutIcon/LogoutIcon"

const Logout = () => {
  const handleLogout = () => {}

  return (
    <OptionWrapper onClick={handleLogout}>
      <OptionTitle>Вихід</OptionTitle>
      <LogoutIcon />
    </OptionWrapper>
  )
}

export default Logout
