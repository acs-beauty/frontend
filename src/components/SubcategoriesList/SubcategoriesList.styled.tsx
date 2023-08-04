import styled from "@emotion/styled";

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
  margin-bottom: 3rem;
`;

export const Item = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.2rem 2rem;
  border: 1px solid ${({ theme }) => theme.colors.grey[600]};
  border-radius: ${({ theme }) => theme.radii.sm};
  transition: color 250ms ease-out, background-color 250ms ease-out;
  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.grey[600]};
    color: ${({ theme }) => theme.colors.white[100]};
  }
`;

export const LinkText = styled.a`
  font-size: 1.6rem;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  letter-spacing: 0.48px;
`;
