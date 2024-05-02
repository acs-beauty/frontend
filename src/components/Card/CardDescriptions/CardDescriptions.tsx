import React, { useState } from "react"
import { ItemStyle, TextContainer, BorderLine, LiStyle } from "./CardDescriptions.styled"
import { descriptionOptions } from "./descriptionOptions"
import  SelectOption  from "../SelectOption/SelectOption";

const CardDescriptions = () => {
  console.log("descriptionOptions", descriptionOptions)
  const [descriptionOptionsOpen, setDescriptionOptionsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(descriptionOptions[0].label)

  const handleMenuItemClick = (label: string) => {
    setSelectedOption(label)
    setDescriptionOptionsOpen(false)
  }
  return (
    <>
      <TextContainer>
        {descriptionOptions.map(option => (
          <LiStyle key={option.value}>
            <ItemStyle onClick={() => handleMenuItemClick(option.label)}
             style={{ fontWeight: selectedOption === option.label ? '600' : '400' }}
            >{option.label}
            </ItemStyle>
            <BorderLine style={{ color: selectedOption === option.label ? '#453E42' : '#DAD5D5' }}/>
          </LiStyle>
        ))}
        
      </TextContainer>
<SelectOption selectOptions={selectedOption}/>
    </>
  )
}

export default CardDescriptions
