import styled from "@emotion/styled";

export const Container = styled.div`
  margin: 0 auto;
  min-width: 32rem;
  max-width: 76.7rem;
  min-height: 100%;
  padding-left: 1.6rem;
  padding-right: 1.6rem;

  @media screen and (min-width: ${({ theme }) => theme.tablet_768}) {
    width: auto;
    min-width: 76.8rem;
    max-width: 120rem;
    padding-left: 3rem;
    padding-right: 3rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.desktop_1440}) {
    width: auto;
    min-width: 124rem;
    max-width: 144rem;
    padding-left: 8rem;
    padding-right: 8rem;
  }
`;

export const SectionTitle = styled.h2`
  margin-bottom: 3.2rem;
  text-align: center;
  text-transform: uppercase;
  font-size: 1.8rem;
  font-weight: 500;
  letter-spacing: 0.9px;
  color: ${({ theme }) => theme.colors.grey[300]};

  @media screen and (min-width: ${({ theme }) => theme.tablet_768}) {
    margin-bottom: 4.8rem;
    font-size: 2.4rem;
    line-height: normal;
    letter-spacing: 3.2px;
  }

  @media screen and (min-width: ${({ theme }) => theme.desktop_1440}) {
    margin-bottom: 6.4rem;
    font-size: 2.8rem;
  }
`;

export const IconWrapper = styled.div`
  width: 2.4rem;
  height: 2.4rem;

  @media screen and (min-width: ${({ theme }) => theme.tablet_768}) {
    width: 3.2rem;
    height: 3.2rem;
  }
`;
