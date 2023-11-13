import { StylesConfig } from "react-select";

import { OptionType } from "@/types/components";

export const searchSelectStyles: StylesConfig<OptionType> = {
  control: (baseStyles) => ({
    ...baseStyles,
    width: "32.8rem",
    height: "3.2rem",
    paddingLeft: "3.6rem",
    paddingRight: "0.8rem",
    paddingTop: "0.4rem",
    paddingBottom: "0.4rem",
    outline: "none",
    backgroundColor: "#fff",
    border: "1px solid #C1BABA",
    boxShadow: "none",
    borderRadius: "4px",
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
    display: "none",
  }),
  indicatorsContainer: (provided) => ({
    ...provided,
    display: "none",
  }),
  valueContainer: (provided) => ({
    ...provided,
    padding: "0",
  }),
  singleValue: (provided) => ({
    ...provided,
    fontFamily: "Roboto",
    fontSize: "1.6rem",
    color: "#5C5E60",
    fontWeight: 500,
    lineHeight: "normal",
    letterSpacing: "0.48px",
    backgroundColor: "fff",
  }),
  menu: (provided) => ({
    ...provided,
    width: "19.7rem",
    margin: 0,
    fontSize: "1.4rem",
    fontWeight: 500,
    letterSpacing: "0.6px",
    border: "1px solid #5C5E60",
    boxShadow: "none",
  }),

  input: (provided) => ({
    ...provided,
    fontFamily: "Roboto",
    fontSize: "1.6rem",
    color: "#5C5E60",
    fontWeight: 500,
    lineHeight: "normal",
    letterSpacing: "0.48px",
  }),
  placeholder: (base) => ({
    ...base,
    display: "none",
  }),
  menuList: (provided) => ({
    ...provided,
    "::-webkit-scrollbar": {
      width: "4px",
      height: "0px",
    },
    "::-webkit-scrollbar-track": {
      background: "#f1f1f1",
    },
    "::-webkit-scrollbar-thumb": {
      background: "#E1DDDD",
      backgroundOpacity: "50%",
    },
    "::-webkit-scrollbar-thumb:hover": {
      background: "#0089CD",
    },
    "& > div": {
      backgroundColor: "#fff",
      color: "#5C5E60",
      cursor: "pointer",
    },

    "& > div:hover": {
      cursor: "pointer",
      backgroundColor: "#0089CD",
      color: "#fff",
    },
  }),
};
