import styled from "@emotion/styled";
import Slider from "react-slick";

export const StyledSlider = styled(Slider)`
  &.slider-goods.slick-slider {
    position: relative;

    .slick-slide > div {
      width: 100%;

      @media screen and (min-width: ${({ theme }) => theme.desktop_1440}) {
        width: 32.5rem !important;
      }
    }
    .slick-track {
      display: flex;
      flex-grow: 1;
    }
  }
`;
