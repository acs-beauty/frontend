import styled from "@emotion/styled";
import Slider from "react-slick";

export const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  background-color: #453e42;

  @media screen and (min-width: ${({ theme }) => theme.tablet_768}) {
    width: auto;
    min-width: 76.8rem;
    max-width: 124rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.desktop_1440}) {
    width: auto;
    min-width: 124rem;
    max-width: 144rem;
  }
`;

export const Section = styled.section`
  margin: 0 auto;
  min-width: 32rem;
  max-width: 76.7rem;
  margin-bottom: 8rem;

  @media screen and (min-width: ${({ theme }) => theme.tablet_768}) {
    width: auto;
    min-width: 76.8rem;
    max-width: 120rem;
    margin-bottom: 10rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.desktop_1440}) {
    width: auto;
    min-width: 124rem;
    max-width: 144rem;
    margin-bottom: 16rem;
  }
`;

export const StyledSlider = styled(Slider)`
  &.banner-slider.slick-slider {
    position: relative;

    .slick-dots {
      bottom: 6.7%;

      @media screen and (min-width: ${({ theme }) => theme.tablet_768}) {
        bottom: 3.2rem;
      }

      @media screen and (min-width: ${({ theme }) => theme.desktop_1440}) {
        bottom: 4.1rem;
      }
    }
    .slick-dots li {
      width: 0.4rem;
      height: 0.4rem;
      margin: 0 0.4rem;

      @media screen and (min-width: ${({ theme }) => theme.tablet_768}) {
        width: 1.2rem;
        height: 1.2rem;
        margin: 0 1.2rem;
      }
    }

    .slick-dots li button {
      width: 0.4rem;
      height: 0.4rem;

      @media screen and (min-width: ${({ theme }) => theme.tablet_768}) {
        width: 1.2rem;
        height: 1.2rem;
      }
    }

    .slick-dots li button:before {
      position: static;
      display: inline-block;
      width: 0.4rem;
      height: 0.4rem;
      color: #d9d9d9;
      font-size: 0.4rem;
      opacity: 1;

      @media screen and (min-width: ${({ theme }) => theme.tablet_768}) {
        width: 1.2rem;
        height: 1.2rem;
        font-size: 1.2rem;
      }
    }

    .slick-dots li.slick-active button:before {
      color: #fff;
      opacity: 1;
    }
  }
`;
