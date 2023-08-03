import styled from "@emotion/styled";

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.2rem;
  height: 3.2rem;
  border: none;
  background-color: transparent;
`;

export const DropDownList = styled.ul`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  top: 110%;
  left: auto;
  z-index: 99;
  min-width: 38.9rem;
  padding: 3.2rem 3.2rem 3.2rem 4.2rem;
  font-size: 2rem;
  letter-spacing: 0.6px;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  background-color: ${({ theme }) => theme.colors.white[100]};
  border: 1px solid ${({ theme }) => theme.colors.grey[200]};
`;
