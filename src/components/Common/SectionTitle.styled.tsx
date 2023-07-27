import styled from "@emotion/styled";

export const SectionTitle = styled.h2`
  margin-bottom: 16px;
  text-align: center;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSizes[5]};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: 1.55;
  letter-spacing: 0.9px;
  color: ${({ theme }) => theme.colors.grey[300]};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    margin-bottom: 36px;
    font-size: ${({ theme }) => theme.fontSizes[11]};
    letter-spacing: 4px;
  }
`;
