import { FC, useState, useEffect } from "react";
import Select from "react-select";

import { OptionType } from "@/types/components";
import { pageSelectStyles } from "./PageSelect.styled";
import { SORT_PAGE } from "@/constants";

const options: OptionType[] = SORT_PAGE;

const PageSelect: FC = () => {
  const [selectedOption, setSelectedOption] = useState<OptionType | null>(
    options[0]
  );

  const handleChange = (option: OptionType | null) => {
    setSelectedOption(option);
  };
  return (
    <div>
      <Select<OptionType>
        defaultValue={selectedOption}
        onChange={(option) => handleChange(option)}
        options={options}
        styles={pageSelectStyles}
      />
    </div>
  );
};

export default PageSelect;
