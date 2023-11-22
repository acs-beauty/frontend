import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { IStyledLabelProps } from "@/types/components";

const wrapperStyles = ({ theme, isSale }: IStyledLabelProps) => css`
  color: ${theme.colors.white[100]};
  background-color: ${isSale
    ? `${theme.colors.red[200]}`
    : `${theme.colors.grey[600]}`};
`;

export const Wrapper = styled.div<{ isSale: boolean }>`
  ${wrapperStyles}
  /* position: absolute; */
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: ${({ theme }) => theme.tablet_768}) {
    width: 8.8rem;
    height: 4.4rem;
    font-size: 2rem;
    text-transform: uppercase;
  }
`;
