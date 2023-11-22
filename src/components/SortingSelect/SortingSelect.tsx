import { FC, useState, useEffect } from "react";
import Select from "react-select";

import { OptionType } from "@/types/components";
import { selectStyles } from "./SortingSelect.styled";
import { SORTING_OPTIONS } from "@/constants";

const options: OptionType[] = SORTING_OPTIONS;

const SortingSelect: FC<{ categoryName: string }> = ({ categoryName }) => {
  const [selectedOption, setSelectedOption] = useState<OptionType | null>(
    options[0]
  );

  const handleChange = (option: OptionType | null) => {
    setSelectedOption(option);
  };
  return (
    <Select<OptionType>
      defaultValue={selectedOption}
      onChange={handleChange}
      options={options}
      styles={selectStyles}
    />
  );
};

export default SortingSelect;
