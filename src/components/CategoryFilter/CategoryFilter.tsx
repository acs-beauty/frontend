import MinusIcon from "@/UI/icons/MinusIcon"
import PlusIcon from "@/UI/icons/PlusIcon/PlusIcon"
import React, { useState } from "react"
import { TitleContainer, Title, Button } from "./CategoryFilter.styled"

const CategoryFilter = () => {
  const [brandOpen, setBrandOpen] = useState(false)
  const [typeOpen, setTypeOpen] = useState(false)
  const [appointmentsOpen, setAppointmentsOpen] = useState(false)

  const handleBrandClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    setBrandOpen(!brandOpen)
  }

  const handleTypeClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    setTypeOpen(!typeOpen)
  }

  const handleAppointmentsClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    setAppointmentsOpen(!appointmentsOpen)
  }
  return (
    <>
      <TitleContainer>
        <Title>Бренд</Title>
        <Button type="button" onClick={handleBrandClick}>{brandOpen ? <MinusIcon /> : <PlusIcon />}</Button>
      </TitleContainer>
      <TitleContainer>
        <Title>Тип</Title>
        <Button type="button" onClick={handleTypeClick}>{typeOpen ? <MinusIcon /> : <PlusIcon />}</Button>
      </TitleContainer>
      <TitleContainer>
        <Title>Призначення</Title>
        <Button type="button" onClick={handleAppointmentsClick}>{appointmentsOpen ? <MinusIcon /> : <PlusIcon />}</Button>
      </TitleContainer>
    </>
  )
}

export default CategoryFilter;