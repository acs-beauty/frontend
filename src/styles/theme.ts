export const theme = {
  breakpoints: ["360px", "769px", "1440px"],

  fontSizes: [
    "11px", //0
    "12px", //1
    "14px", //2
    "15px", //3
    "16px", //4
    "18px", //5
    "20px", //6
    "24px", //7
    "28px", //8
    "32px", //9
    "36px", //10
    "40px", //11
  ],

  fontWeights: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  radii: {
    sm: "1.2rem",
    md: "5rem",
    lg: "18rem",
  },

  colors: {
    white: {
      100: "#FFFFFF", //background, light font
    },

    grey: {
      100: "#D9D9D9", //dots in slider
      200: "#C1BABA", //cards' border color
      300: "#5A5757", //main text color
      400: "rgba(90, 87, 87, 0.80)", // footer contacts' text color
      500: "#F8F8F8",
      600: "#453E42",
    },
    black: {
      100: "#453E42", // new and hit color
    },
    red: {
      100: "#F4DCE3", //button-up background
      200: "#D7310D", // sale color
      300: "#F52323", // active link color
    },
    green: {
      100: "#56A86D",
    },
    beige: {
      100: "rgba(231, 229, 223, 0.30)", // footer background
    },
  },
};
