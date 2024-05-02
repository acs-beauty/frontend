import { FC } from "react";
import { DescriptionContainer, TextDescription} from "../SelectOption/SelectOption.styled"
import { IProduct } from "@/types/components"

const DescriptionSection: FC<({product: IProduct})> = ( {product}) => {

    return(
        <DescriptionContainer>
        <TextDescription> {product.description} </TextDescription>
      </DescriptionContainer>
    )
}
 export default DescriptionSection;