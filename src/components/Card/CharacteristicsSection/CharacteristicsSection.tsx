import { FC } from "react";
import { DescriptionWrapper, ItemDescription, TextDescription, DescriptionContainer} from "../SelectOption/SelectOption.styled"
import { IProduct } from "@/types/components"

const CharacteristicsSection: FC<({product: IProduct})>= ({ product}) => {

    return(
        <DescriptionContainer>
        <DescriptionWrapper>
          <ItemDescription>Бренд</ItemDescription>
          <TextDescription>{product.brand}</TextDescription>
        </DescriptionWrapper>
        <DescriptionWrapper>
          <ItemDescription>Склад</ItemDescription>
          <TextDescription>{product.brand}</TextDescription>
        </DescriptionWrapper>
        <DescriptionWrapper>
          <ItemDescription>Об&#39;єм</ItemDescription>
          <TextDescription>{product.volume}</TextDescription>
        </DescriptionWrapper>
        <DescriptionWrapper>
          <ItemDescription>Призначення</ItemDescription>
          <TextDescription>{product.appointments}</TextDescription>
        </DescriptionWrapper>
        <DescriptionWrapper>
          <ItemDescription>Застосування</ItemDescription>
          <TextDescription>{product.application}</TextDescription>
        </DescriptionWrapper>
        <DescriptionWrapper>
          <ItemDescription>Тип шкіри</ItemDescription>
          <TextDescription>{product.skinType}</TextDescription>
        </DescriptionWrapper>
        <DescriptionWrapper>
          <ItemDescription>Вік</ItemDescription>
          <TextDescription>{product.age}</TextDescription>
        </DescriptionWrapper>
        <DescriptionWrapper>
          <ItemDescription>Країна виробник</ItemDescription>
          <TextDescription>{product.country}</TextDescription>
        </DescriptionWrapper>
      </DescriptionContainer>
    )
}

export default CharacteristicsSection

