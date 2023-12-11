import styled from "@emotion/styled";

export const ImageContainer = styled.div`
  position: relative;

  overflow: hidden;
  width: 8.6rem;
  height: 8.6rem;

  @media screen and (min-width: ${({ theme }) => theme.tablet_768}) {
    width: 10.5rem;
    height: 10.9rem;
    align-self: center;
  }

  @media screen and (min-width: ${({ theme }) => theme.desktop_1440}) {
    width: 10.9rem;
    height: 10.9rem;
  }
`;

export const Title = styled.h1`
  margin-top: 0;
  margin-bottom: 1.6rem;
  font-size: 1.8rem;
  text-transform: uppercase;
  text-align: center;
  font-weight: 500;
  letter-spacing: 1.8px;

  @media screen and (min-width: ${({ theme }) => theme.tablet_768}) {
    margin-bottom: 2rem;
    font-size: 3.2rem;
    letter-spacing: 3.2px;
  }

  @media screen and (min-width: ${({ theme }) => theme.desktop_1440}) {
    margin-bottom: 2.4rem;
  }
`;

export const AmountWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  @media screen and (min-width: ${({ theme }) => theme.tablet_768}) {
    grid-row: 1;
    grid-column: 2;
  }
`;

export const AmountText = styled.p`
  width: 2rem;
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;

  @media screen and (min-width: ${({ theme }) => theme.tablet_768}) {
    width: 2.8rem;
    font-size: 2rem;
  }
`;

export const PriceText = styled.p`
  grid-row: 3;
  grid-column: 1 / span 2;
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1.15;

  @media screen and (min-width: ${({ theme }) => theme.tablet_768}) {
    grid-row: 3;
    grid-column: 1;
    font-size: 1.6rem;
    letter-spacing: 0.4px;
  }
`;

export const ArticleText = styled.p`
  grid-row: 2;
  grid-column: 1 / span 2;
  font-size: 1.2rem;

  @media screen and (min-width: ${({ theme }) => theme.tablet_768}) {
    grid-row: 2;
    grid-column: 1 / span 2;
  }
`;

export const TitleText = styled.p`
  grid-row: 1;
  grid-column: 1 / span 2;
  height: 2.9rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;

  font-size: 1.2rem;
  font-weight: 500;

  @media screen and (min-width: ${({ theme }) => theme.tablet_768}) {
    width: 46.1rem;
    font-size: 1.5rem;
    height: 3.8rem;
  }
`;

export const Item = styled.li`
  display: grid;
  grid-template-columns: 9.6rem auto;
  grid-template-rows: 100%;
  grid-column-gap: 1.2rem;
  padding-top: 1.6rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #c1baba;

  @media screen and (min-width: ${({ theme }) => theme.tablet_768}) {
    grid-template-columns: 10.5rem auto;
    grid-column-gap: 2rem;
    padding-top: 2rem;
    padding-bottom: 2.4rem;
  }
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto 2.4rem;
  grid-template-rows: repeat(4, 1fr);
  grid-row-gap: 0.8rem;

  @media screen and (min-width: ${({ theme }) => theme.tablet_768}) {
    grid-template-columns: auto 10rem;
    grid-template-rows: 3.8rem 1.9rem 1.9rem;
    grid-row-gap: 2.4rem;
  }
`;

export const SubTitle = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
`;

export const Text = styled.p`
  font-size: 1.4rem;
`;

export const SumWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 8rem;
  grid-template-rows: repeat(2, 1fr);
  justify-content: space-between;
  width: 100%;
`;

export const CanButton = styled.button`
  @media screen and (min-width: ${({ theme }) => theme.tablet_768}) {
    grid-row: 3;
    grid-column: 2;
    justify-self: flex-end;
  }
`;
