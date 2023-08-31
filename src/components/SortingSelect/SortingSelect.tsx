import { FC, useState } from "react";
import Select from "react-select";

import { OptionType } from "@/types/components";

const options: OptionType[] = [
  { value: "за популярністю", label: "за популярністю" },
  { value: "спочатку дешевше", label: "спочатку дешевше" },
  { value: "спочатку дорожче", label: "спочатку дорожче" },
  { value: "за назвою", label: "за назвою" },
];

const SortingSelect: FC = () => {
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
        styles={{
          control: (baseStyles) => ({
            ...baseStyles,
            padding: 0,
            outline: "none",
            backgroundColor: "none",
            border: "none",
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "normal",
            letterSpacing: "0.48px",
            boxShadow: "none",
          }),
          container: (provided) => ({
            ...provided,
            "&:focus": {
              border: "none",
              borderColor: "transparent",
            },
          }),
          indicatorSeparator: () => ({
            display: "none",
          }),
          dropdownIndicator: (provided) => ({
            ...provided,
            padding: "4px",
            color: "#5A5757",
            "&:hover": {
              color: "#5A5757",
            },
          }),
          valueContainer: (provided) => ({
            ...provided,
            padding: "0",
          }),
        }}
      />
    </div>
  );
};

export default SortingSelect;
