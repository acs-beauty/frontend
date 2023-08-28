import styled from "@emotion/styled";

export const SectionTitle = styled.h2`
  margin-bottom: 1.6rem;
  text-align: center;
  text-transform: uppercase;
  font-size: 1.8rem;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: 1.55;
  letter-spacing: 0.9px;
  color: ${({ theme }) => theme.colors.grey[300]};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    margin-bottom: 3.6rem;
    font-size: 4rem;
    letter-spacing: 4px;
  }
`;
