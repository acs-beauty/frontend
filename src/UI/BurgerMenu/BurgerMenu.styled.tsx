import styled from "@emotion/styled";

export const MenuWrapper = styled.div`
  width: 100%;
  max-height: calc(100vh - 8.6rem);
  padding-bottom: 11.5rem;
  overflow-y: auto;
  background-color: #fff;

  scrollbar-width: thin;
  scrollbar-color: transparent transparent;

  @media screen and (min-width: ${({ theme }) => theme.tablet_768}) {
    max-height: calc(100vh - 14.8rem);
    padding-bottom: 15.6rem;
  }

  &::-webkit-scrollbar {
    width: 0;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
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

export const NavWrapper = styled.div``;
