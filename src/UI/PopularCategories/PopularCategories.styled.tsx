import styled from "@emotion/styled";
import Link from "next/link";

export const Section = styled.section`
  padding-bottom: 2.4rem;

  @media screen and (min-width: ${({ theme }) => theme.tablet_768}) {
    padding-bottom: 5.2rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.desktop_1440}) {
    padding-bottom: 8rem;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 1.6rem;

  @media screen and (min-width: ${({ theme }) => theme.desktop_1440}) {
    flex-direction: row;
    gap: 6.1rem;
  }
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: ${({ theme }) => theme.desktop_1440}) {
    gap: 6.1rem;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const Text = styled.p`
  width: 6.8rem;
  font-size: 1.2rem;
  font-weight: 500;
  text-align: center;

  @media screen and (min-width: ${({ theme }) => theme.tablet_768}) {
    width: 16rem;
    font-size: 2.4rem;
  }
`;
