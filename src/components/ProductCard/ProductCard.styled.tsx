import styled from "@emotion/styled";

export const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    width: 30.5rem;
    height: 23.9rem;
    margin-bottom: 0.4rem;
  }
`;

export const CardWrapper = styled.div`
  position: relative;
  /* display: flex;
  flex-direction: column;
  justify-content: space-between; */
  border: 1px solid ${({ theme }) => theme.colors.grey[200]};
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    width: 30.5rem;
    height: 43.2rem;
  }
`;

export const ContentWrapper = styled.div`
  padding: 0 1.7rem 2.3rem 1.7rem;
`;

export const HeartContainer = styled.div`
  position: absolute;
  overflow: hidden;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    width: 2.4rem;
    height: 2.4rem;
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
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  text-align: center;
`;

export const Price = styled.p`
  margin-bottom: 1.7rem;
  font-size: 2.4rem;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  text-align: center;
`;
export const LinksWrapper = styled.div`
  display: flex;
  gap: 1.6rem;
  justify-content: space-between;
  align-items: center;
`;

export const ProductLink = styled.a`
  font-size: 1.8rem;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  text-align: center;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.grey[300]};
`;

export const Cart = styled.button`
  display: inline-block;
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.grey[300]};
  font-size: 1.8rem;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: 1.15;
  text-align: center;
  text-transform: uppercase;
`;

export const CartWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;
