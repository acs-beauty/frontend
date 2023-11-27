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
  width: 15.6rem;
  height: 28.1rem;
  border: 1px solid ${({ theme }) => theme.colors.grey[200]};

  @media screen and (min-width: ${({ theme }) => theme.tablet_768}) {
    width: 34.4rem;
    height: 43.2rem;
    padding: 0 1.9rem;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1.2rem 0.8rem 1.2rem;

  @media screen and (min-width: ${({ theme }) => theme.tablet_768}) {
    padding: 0 3.4rem 2.3rem 3.4rem;
  }
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
  width: 13.1rem;
  height: 6.5rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
  text-overflow: ellipsis;

  margin-bottom: 0.8rem;
  font-size: 1.1rem;
  font-weight: 400;
  line-height: normal;
  text-align: center;

  @media screen and (min-width: ${({ theme }) => theme.tablet_768}) {
    width: 23.6rem;
    height: 8rem;
    margin-bottom: 1.6rem;
    font-size: 1.6rem;
  }
`;

export const Price = styled.p`
  margin-bottom: 1.1rem;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: normal;
  text-align: center;
`;

export const CartButton = styled.button`
  display: flex;
  gap: 0.4rem;
  align-items: center;
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.grey[300]};
  font-size: 1.4rem;
  font-weight: 500;
  line-height: normal;
  text-align: center;
  text-transform: uppercase;
`;
