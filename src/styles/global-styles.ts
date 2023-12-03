import "normalize.css";
import { css } from "@emotion/react";

import { montserrat } from "@/utils/fonts";

export const global = css`
  html,
  body {
    font-family: ${montserrat.style.fontFamily};
    max-width: 100vw;
    color: #5a5757;
    line-height: normal;
    font-size: 62.5%;
    overflow-x: hidden;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
    outline: none;
    background-color: transparent;
    border: none;
  }
`;
