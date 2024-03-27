import styled from "@emotion/styled";
import Slider from "react-slick";

export const StyledSlider = styled(Slider)`
  &.slider-goods.slick-slider {
    position: relative;

    .slick-slide > div {
      display: grid;
      grid-template-columns: 1fr;
      margin-right: 1.6rem;
      &:not(:last-child) {
    margin-right: 1.6rem;
      }
      @media screen and (min-width: ${({ theme }) => theme.tablet_768}) {
        margin-right: 2rem;
      &:not(:last-child) {
    margin-right: 2rem;
      }
      }
    
  }
}
`;
