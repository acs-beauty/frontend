import styled from "@emotion/styled";
import { css } from "@emotion/react";

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
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-left: 1.6rem;
  margin-top: 1.4rem;

  @media screen and (min-width: ${({ theme }) => theme.desktop_1440}) {
    position: absolute;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: space-between;
    row-gap: 5.4rem;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 99;
    padding: 3.6rem 8rem;
    font-size: 2.4rem;
    letter-spacing: 0.72px;
    font-weight: 500;
    background-color: ${({ theme }) => theme.colors.grey[500]};
    width: 100%;
    max-width: 144rem;
    padding-left: 8rem;
    padding-right: 8rem;
    height: 43rem;
  }
`;

export const NavItem = styled.li`
  display: flex;
  flex-direction: column;
`;

export const SubMenuItem = styled.li`
  font-size: 1.6rem;
  font-weight: 500;
`;

export const NavLinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
