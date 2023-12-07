import styled from "@emotion/styled";

export const ImageContainer = styled.div`
  position: relative;

  overflow: hidden;
  width: 8.6rem;
  height: 8.6rem;

  @media screen and (min-width: ${({ theme }) => theme.tablet_768}) {
    width: 10.5rem;
    height: 10.9rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.desktop_1440}) {
    width: 10.9rem;
    height: 10.9rem;
  }
`;

export const Title = styled.h1`
  font-size: 1.8rem;
  text-transform: uppercase;
  text-align: center;
  font-weight: 500;
  letter-spacing: 1.8px;
`;

export const AmountWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

export const AmountText = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
`;

export const PriceText = styled.p`
  grid-row: 3;
  grid-column: 1 / span 2;
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1.15;
`;

export const ArticleText = styled.p`
  grid-row: 2;
  grid-column: 1 / span 2;
  font-size: 1.2rem;
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
`;

export const Item = styled.li`
  display: grid;
  grid-template-columns: 8.6rem auto;
  grid-template-rows: 100%;
  grid-column-gap: 1.2rem;
  padding-top: 1.6rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #c1baba;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto 2.4rem;
  grid-template-rows: repeat(4, 1fr);
  grid-row-gap: 0.8rem;
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
