import styled from "@emotion/styled";

export const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 15.6rem;
  height: 14.3rem;
  margin-bottom: 0.4rem;

  @media screen and (min-width: ${({ theme }) => theme.tablet_768}) {
    width: 30.5rem;
    height: 23.9rem;
  }
`;

export const CardWrapper = styled.div`
  position: relative;
  /* display: flex;
  flex-direction: column;
  justify-content: space-between; */
  border: 1px solid ${({ theme }) => theme.colors.grey[200]};
  @media screen and (min-width: ${({ theme }) => theme.tablet_768}) {
    width: 30.5rem;
    height: 43.2rem;
  }
`;

export const ContentWrapper = styled.div`
  padding: 0 1.7rem 2.3rem 1.7rem;
`;

export const HeartContainer = styled.div`
  position: absolute;
  top: 0.8rem;
  right: 0.8rem;
  width: 2.4rem;
  height: 2.4rem;

  @media screen and (min-width: ${({ theme }) => theme.tablet_768}) {
    top: 2.2rem;
    right: 4rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.desktop_1440}) {
    top: 2rem;
    right: 2rem;
  }
`;

export const LabelWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Title = styled.h3`
  min-height: 7.7rem;
  margin-bottom: 1em;
  padding: 0 1.8rem;
  font-size: 1.6rem;
  font-weight: 400;
  text-align: center;
`;

export const Price = styled.p`
  margin-bottom: 1.7rem;
  font-size: 2.4rem;
  font-weight: 500;
  text-align: center;
`;
export const LinksWrapper = styled.div`
  display: flex;
  gap: 1.6rem;
  justify-content: space-between;
  align-items: center;
`;

export const CartButton = styled.button`
  display: inline-block;
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.grey[300]};
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 1.15;
  text-align: center;
  text-transform: uppercase;
`;
