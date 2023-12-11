import styled from "@emotion/styled";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 2.4rem auto;
  grid-template-rows: 2.4rem 3.8rem;
  grid-row-gap: 1.6rem;
  margin: 0 auto;
  padding-left: 1.6rem;
  padding-right: 1.6rem;

  @media screen and (min-width: ${({ theme }) => theme.tablet_768}) {
    grid-template-columns: 3.2rem 53.6rem 13.6rem;
    grid-template-rows: 4.4rem;
    padding-left: 3.2rem;
    padding-right: 3.2rem;
    width: 76.8rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.desktop_1440}) {
    grid-template-columns: 10.8rem 99rem 18.2rem;
    grid-template-rows: 9.5rem;
    padding-left: 8rem;
    padding-right: 8rem;
    width: 144rem;
  }
`;

export const StyledHeader = styled.header`
  padding-top: 1.6rem;
  padding-bottom: 2rem;

  @media screen and (min-width: ${({ theme }) => theme.tablet_768}) {
    padding-top: 2rem;
    padding-bottom: 4rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.desktop_1440}) {
    padding-top: 2.4rem;
    padding-bottom: 2.4rem;
  }
`;

export const IconsWrapper = styled.div`
  position: relative;
  display: flex;
  gap: 1.6rem;
  grid-row: 1;
  grid-column: 2;
  justify-content: end;
  align-self: center;

  @media screen and (min-width: ${({ theme }) => theme.tablet_768}) {
    gap: 2rem;
    grid-row: 1;
    grid-column: 3;
  }

  @media screen and (min-width: ${({ theme }) => theme.desktop_1440}) {
    gap: 4.3rem;
    grid-row: 1;
    grid-column: 3;
  }
`;

export const MenuContainer = styled.div`
  grid-row: 1;
  grid-column: 1;
  align-self: center;

  @media screen and (min-width: ${({ theme }) => theme.desktop_1440}) {
    display: none;
  }
`;

export const SearchWrapper = styled.div`
  grid-column: 1 / span 2;
  grid-row: 2;

  @media screen and (min-width: ${({ theme }) => theme.tablet_768}) {
    grid-row: 1;
    grid-column: 2;
    justify-self: center;
    align-self: center;
  }
`;

export const ImageBox = styled.div`
  display: none;

  @media screen and (min-width: ${({ theme }) => theme.desktop_1440}) {
    position: relative;
    display: block;
    grid-row: 1;
    grid-column: 1;
    width: 10.8rem;
    height: 9.5rem;
  }
`;

export const AmountContainer = styled.div`
  position: absolute;
  top: -6px;
  right: -8px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.6rem;
  height: 1.6rem;
  background-color: #453e42;
  border-radius: 50%;

  @media screen and (min-width: ${({ theme }) => theme.tablet_768}) {
    right: -10px;
    right: -10px;
    width: 2.2rem;
    height: 2.2rem;
  }
`;

export const AmountText = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: #fff;

  @media screen and (min-width: ${({ theme }) => theme.tablet_768}) {
   font-size: 1.2rem;
  }
`;
