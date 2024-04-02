import CloseSubMenuIcon from "@/UI/icons/CloseSubMenuIcon"
import OpenSubMenuIcon from "@/UI/icons/OpenSubMenuIcon"
import { FC, useState } from "react"
import { StyledBlock, StyledDropDownTitle } from "./DropDownProfile.styled"
import ProfileForm from "@/components/ProfileForm/ProfileForm"

// const menuItems = ["Мої дані", "Мої замовлення", "Вибране"]

interface IProps {
  menuItems: string[]
}
const DropDownProfile: FC<IProps> = ({ menuItems }) => {
  const [openList, setOpenList] = useState<string[]>([])

  const toggleList = (index: number) => {
    if (openList.includes(`${index}`)) {
      setOpenList(openList.filter(id => id !== `${index}`))
    } else {
      setOpenList([...openList, `${index}`])
    }
  }

  return (
    <>
      {menuItems.map((item, index) => (
        <>
          <StyledDropDownTitle key={index} onClick={() => toggleList(index)}>
            <h3>{item}</h3>
            <div>{openList.includes(`${index}`) ? <CloseSubMenuIcon /> : <OpenSubMenuIcon />}</div>
          </StyledDropDownTitle>

          {openList.includes(`${index}`) ? (
            index === 0 ? (
              <ProfileForm />
            ) : (
              <StyledBlock>{index} item</StyledBlock>
            )
          ) : null}
        </>
      ))}
    </>
  )
}

export default DropDownProfile
