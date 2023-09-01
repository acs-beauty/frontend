export const selectStyles = {
    control: (baseStyles: any) => ({
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
    container: (provided: any) => ({
      ...provided,
      "&:focus": {
        border: "none",
        borderColor: "transparent",
      },
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
    dropdownIndicator: (provided: any) => ({
      ...provided,
      padding: "4px",
      color: "#5A5757",
      "&:hover": {
        color: "#5A5757",
      },
    }),
    valueContainer: (provided: any) => ({
      ...provided,
      padding: "0",
    }),
    menu: (provided: any) => ({
      ...provided,
      width: "210px",
      margin: 0,            
      fontSize: "1.6rem",
      fontWeight: 500,
      letterSpacing: "0.6px",
      borderRadius: "0px",
      border: "1px solid #C1BABA",
      boxShadow: "none",
    }),
    menuList: (provided: any) => ({
      ...provided,            
      "& > div": {              
        backgroundColor: "#fff",
        color: "#5A5757",
        cursor: "pointer",
      },
     
      "& > div:hover": {
        cursor: "pointer",
      },
    }),
  }