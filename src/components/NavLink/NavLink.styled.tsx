import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { IStyledLinkProps, ILinkProps } from "@/types/components";

const linkStyles = ({ theme, isDiscount }: IStyledLinkProps) => css`

  font-size: 1.8rem;
  font-weight: ${isDiscount ? `700` : `500`};
  line-height: normal;
  letter-spacing: 0.05rem;
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
