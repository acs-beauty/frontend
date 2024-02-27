import { StylesConfig } from "react-select";

import { OptionType } from "@/types/components";
import { SCREENS } from "@/constants";

const breakpoints = [`${SCREENS.tablet}`, `${SCREENS.desktop}`];

const mq = breakpoints.map((bp) => `@media (min-width: ${bp})`);

export const searchSelectStyles: StylesConfig<OptionType> = {
  control: (baseStyles) => ({
    ...baseStyles,
    minWidth: "28.8rem",
    width: "100%",
    maxWidth: "73.5rem",
    height: "3.2rem",
    paddingLeft: "3.6rem",
    outline: "none",
    backgroundColor: "#fff",
    border: "1px solid #C1BABA",
    boxShadow: "none",
    borderRadius: "4px",
    [mq[0]]: {
      width: "39.7rem",
      height: "4.4rem",
      borderRadius: "12px",
    },
    [mq[1]]: {
      width: "51.9rem",
      borderRadius: "12px",
    },
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
    [mq[0]]: {
      display: "block",
      backgroundColor: "#453E42",
    },
  }),
  indicatorsContainer: (provided) => ({
    ...provided,
    display: "none",
    [mq[0]]: {
      display: "block",
      backgroundColor: "#453E42",
      width: "10.5rem",
      height: "4.3rem",
      borderTopRightRadius: "12px",
      borderBottomRightRadius: "12px",
    },
    "& > div": {
      borderTopRightRadius: "12px",
      borderBottomRightRadius: "12px",
      paddingLeft: "1.9rem",
      paddingTop: "1.2rem",
      paddingRight: "0",
    },
  }),
  loadingIndicator: (provided) => ({
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
