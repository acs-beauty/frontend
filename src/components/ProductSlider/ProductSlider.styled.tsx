import styled from "@emotion/styled"
import Slider from "react-slick"

export const StyledSlider = styled(Slider)`
  &.slider-goods.slick-slider {
    .slick-slide > div {
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
`
export const StyledCardSlider = styled(Slider)`
  &.slider-goods.slick-slider {
    position: relative;

    .slick-dots {
      position: absolute;
      top: -22px;
      right: 10px;
      list-style: none;
      display: flex;
      justify-content: center;
      text-align: end;
    }
    .slick-slide > div {
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
`
