import React from "react";
import CloseIcon from "@/UI/icons/CloseIcon";
import { Wrapper, WrapperBtn, Text} from "./SelectedElement.styled";
import { useSelector } from "react-redux";
import { selectCheckedCategories } from "@/redux/catalog/selector";


const SelectedElement = () => {

    const subcategoryNames = useSelector(selectCheckedCategories)
    console.log("subcategoryName", subcategoryNames)

    return (
        <Wrapper>
       
            { subcategoryNames && subcategoryNames.map(subcategoryName => (
                <ul key={subcategoryName.id}>
                    <li>
                    <WrapperBtn>
                    <Text>{subcategoryName.name}</Text> 
                    <CloseIcon width="24px" height="24px"/>
                    </WrapperBtn>
                    </li>

                </ul>
            ))}
            {/* */}
            

       

        </Wrapper>
    )
}

export default SelectedElement;