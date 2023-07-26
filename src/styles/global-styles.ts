import "normalize.css";
import { css } from "@emotion/react";

import { montserrat } from "@/utils/fonts";

export const global = css`
  html,
  body {
    font-family: ${montserrat.style.fontFamily};
    font-weight: 400;
    max-width: 100vw;
    color: #5A5757;
    line-height: 1.2;
    font-size: 16px;
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
  }
`;