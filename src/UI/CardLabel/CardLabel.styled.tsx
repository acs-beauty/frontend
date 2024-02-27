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
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4.2rem;
  height: 2.7rem;
  font-size: 1.2rem;
  font-weight: 500;
  text-transform: uppercase;

  @media screen and (min-width: ${({ theme }) => theme.tablet_768}) {
    width: 8.8rem;
    height: 4.4rem;
    font-size: 2rem;
  }
`;
