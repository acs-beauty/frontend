import styled from "@emotion/styled";

export const NavList = styled.ul`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  column-gap: 4.8rem;
  row-gap: 1.8rem;
`;
export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.2rem;
  height: 3.2rem;
  border: none;
  background-color: transparent;
`;

export const NavItem = styled.li`
position: relative;
  display: flex;
  align-items: center;
`;

export const NavWrapper = styled.div`
  display: none;

  @media screen and (min-width: ${({ theme }) => theme.desktop_1440}) {
    position: relative;
    display: block;
    margin-bottom: 4.2rem;
  }
`;
