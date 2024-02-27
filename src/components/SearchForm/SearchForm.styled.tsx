import styled from "@emotion/styled";

export const Wrapper = styled.div`
  position: relative;
`;

export const ImageWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 0.8rem;
  transform: translateY(-50%);
  z-index: 10;
`;

export const IndicatorText = styled.p`
  color: #fff;
  font-size: 1.6rem;
  font-weight: 600;
  text-transform: uppercase;

  @media screen and (min-width: ${({ theme }) => theme.desktop_1440}) {
    font-weight: 500;
  }
`;
