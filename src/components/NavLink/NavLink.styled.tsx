import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { IStyledLinkProps, ILinkProps } from "@/types/components";

const linkStyles = ({ theme, isDiscount }: IStyledLinkProps) => css`
  display: block;
  width: 100%;
  height: 100%;
  font-size: 1.8rem;
  font-weight: ${isDiscount ? `700` : `500`};
  line-height: normal;
  letter-spacing: 0.09rem;
  color: ${isDiscount
    ? `${theme.colors.red[300]}`
    : `${theme.colors.grey[300]}`};

  @media screen and (min-width: ${theme.tablet_768}) {
    font-size: 2rem;
  }

  @media screen and (min-width: ${theme.desktop_1440}) {
    font-size: 2.4rem;
  }
`;

export const StyledLink = styled.a<ILinkProps>`
  ${linkStyles}
`;
