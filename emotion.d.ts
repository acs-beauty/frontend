import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    // breakpoints: string[];
    // fontSizes: string[];
    // remSizes: string[];
    // fontWeights: {
    //   light: number;
    //   regular: number;
    //   medium: number;
    //   semibold: number;
    //   bold: number;
    // };
    tablet_768: string;
    desktop_1440: string;

    radii: { sm: string; md: string; lg: string };

    colors: {
      white: {
        100: string;
      };

      grey: {
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
      };
      black: {
        100: string;
      };
      red: {
        100: string;
        200: string;
        300: string;
      };
      green: {
        100: string;
      };
      beige: {
        100: string;
      };
    };
  }
}
