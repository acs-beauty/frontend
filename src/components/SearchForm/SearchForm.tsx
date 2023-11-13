import { FC, useState } from "react";
import AsyncSelect from "react-select/async";
import Image from "next/image";
import axios from "axios";

import { searchSelectStyles } from "./Select.styled";
import { Wrapper, ImageWrapper } from "./SearchForm.styled";
import { IPreviewProduct, OptionType } from "@/types/components";

const SearchForm: FC = () => {
  const [selectedValue, setSelectedValue] = useState<OptionType | null>(null);
  const [inputValue, setInputValue] = useState("");

  const loadOptions = async () => {
    const response = await axios.get(
      `/api/products/searchProduct?searchWords=${inputValue}`
    );
    const result = await response.data;
    return await result.products.map((product: IPreviewProduct) => ({
      label: product.titleName,
      value: product.productId,
    }));
  };

  const handleSelect = (value: OptionType) => {
    setSelectedValue(value);
  };

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  return (
    <Wrapper>
      <ImageWrapper>
        <Image
          src={"/icons/magnify.svg"}
          alt={"search icon"}
          width={24}
          height={24}
        />
      </ImageWrapper>
      <AsyncSelect
        cacheOptions
        defaultOptions
        loadOptions={loadOptions}
        onInputChange={handleInputChange}
        onChange={(option) => handleSelect(option as OptionType)}
        value={selectedValue}
        styles={searchSelectStyles}
        noOptionsMessage={()=> "Немає пропозицій..."}
        loadingMessage={() => 'Пошук товару...'} 
      />
    </Wrapper>
  );
};

export default SearchForm;
