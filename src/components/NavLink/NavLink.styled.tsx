import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { IStyledLinkProps, ILinkProps } from "@/types/components";

const linkStyles = ({ theme, isDiscount }: IStyledLinkProps) => css`
  font-size: 2.4rem;
  font-weight: ${isDiscount
    ? `${theme.fontWeights.bold}`
    : `${theme.fontWeights.medium}`};
  line-height: normal;
  letter-spacing: 0.05rem;
  color: ${isDiscount
    ? `${theme.colors.red[300]}`
    : `${theme.colors.grey[300]}`};
`;

export const StyledLink = styled.a<ILinkProps>`
  ${linkStyles}
`;
