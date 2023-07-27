import styled from "@emotion/styled";

export const NavList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 48px;
`;
export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;
`;

export const NavItem = styled.li`
  display: flex;
  align-items: center;
`;

export const NavWrapper = styled.div`
  display: none;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    display: block;
    margin-bottom: 42px;
  }
`;
