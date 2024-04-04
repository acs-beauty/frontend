import React from "react";
import CloseIcon from "@/UI/icons/CloseIcon";
import { Wrapper, WrapperBtn, Text} from "./SelectedElement.styled";
import { useSelector } from "react-redux";
import { selectCheckedCategories } from "@/redux/catalog/selector";
import { useAppDispatch } from "@/hooks";
import { deleteSubcategory } from "@/redux/catalog/slice";


const SelectedElement = () => {

    const subcategoryNames = useSelector(selectCheckedCategories)
    console.log("subcategoryName", subcategoryNames)
  const dispatch = useAppDispatch()

  const handleDeleteClick = (id: number ) => {
    dispatch( deleteSubcategory (id))
  }

    return (
        <Wrapper>
       
            { subcategoryNames && subcategoryNames.map(subcategoryName => (
                <ul key={subcategoryName.id}>
                    <li>
                    <WrapperBtn>
                    <Text>{subcategoryName.name}</Text> 
                    <div onClick={() => handleDeleteClick(subcategoryName.id)}>
                    <CloseIcon width="24px" height="24px" />

                    </div>
                    </WrapperBtn>
                    </li>

                </ul>
            ))}
            {/* */}
            

       

        </Wrapper>
    )
}

export default SelectedElement;