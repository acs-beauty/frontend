import styled from "@emotion/styled";

export const MenuWrapper = styled.div`
  width: 100%;
  background-color: #fff;
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
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
`;

export const NavWrapper = styled.div`
  /* position: relative; */
  display: block;
`;
