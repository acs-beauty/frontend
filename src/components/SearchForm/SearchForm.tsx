import { FC, useState } from "react";
import AsyncSelect from "react-select/async";
import { components } from "react-select";
import axios from "axios";

import { searchSelectStyles } from "./Select.styled";
import { Wrapper, ImageWrapper, IndicatorText } from "./SearchForm.styled";
import { IPreviewProduct, OptionType } from "@/types/components";
import Magnify from "../icons/Magnify";
import { useScreen } from "@/hooks";

const CustomDropdownIndicator = (props: any) => {
  return (
    <components.DropdownIndicator {...props}>
      <IndicatorText>Пошук</IndicatorText>
    </components.DropdownIndicator>
  );
};

const SearchForm: FC = () => {
  const { isMobile } = useScreen();
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
        <Magnify
          width={isMobile ? "24" : "32"}
          height={isMobile ? "24" : "32"}
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
        noOptionsMessage={() => "Немає пропозицій..."}
        loadingMessage={() => "Пошук товару..."}
        components={{ DropdownIndicator: CustomDropdownIndicator }}
      />
    </Wrapper>
  );
};

export default SearchForm;
