import styled from "@emotion/styled";
import Slider from "react-slick";

export const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;

  @media screen and (min-width: ${({ theme }) => theme.tablet_768}) {
    width: 76.8rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.desktop_1440}) {
    width: 144rem;
  }
`;

export const Section = styled.section`
  margin: 0 auto;
  min-width: 32rem;
  max-width: 76.7rem;
  margin-bottom: 2.1rem;

  @media screen and (min-width: ${({ theme }) => theme.tablet_768}) {
    width: 76.8rem;
    min-width: 76.8rem;
    max-width: 76.8rem;
    margin-bottom: 6rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.desktop_1440}) {
    width: 144rem;
    min-width: 144rem;
    max-width: 144rem;
    margin-bottom: 8rem;
  }
`;

export const StyledSlider = styled(Slider)`
  &.banner-slider.slick-slider {
    position: relative;

    .slick-slide > div {
      width: 100%;

      @media screen and (min-width: ${({ theme }) => theme.desktop_1440}) {
        width: 32.5rem !important;
      }
    }
    .slick-dots {
      bottom: 1.2rem;
    }

    &.slick-dots li.slick-active button:before {
      color: #fff;
    }
  }
`;
