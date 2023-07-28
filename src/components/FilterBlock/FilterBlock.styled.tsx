import styled from "@emotion/styled";

export const FilterBlockWrapper = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    display: flex;
    flex-direction: column;
    max-width: 30.5rem;
    height: 83.4rem;
    padding: 2rem 1.8rem;
    border: 1px solid ${({ theme }) => theme.colors.grey[200]};
  }
`;
