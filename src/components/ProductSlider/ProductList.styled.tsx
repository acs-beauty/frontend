import styled from "@emotion/styled";
import Slider from "react-slick";

export const StyledSlider = styled(Slider)`
  &.slider-goods.slick-slider {
    position: relative;
 

    .slick-slide > div {
      /* width: 17.2rem !important; */
      /* padding-right: 0.8rem;
      padding-left: 0.8rem; */
      width: 100%;
      @media screen and (min-width: ${({ theme }) => theme.tablet_768}) {
        /* display: flex;
      
      justify-content: center; */
        /* width: 36rem !important; */
    
      }
      @media screen and (min-width: ${({ theme }) => theme.desktop_1440}) {
        /* display: flex;
      
        justify-content: center; */
        width: 32.5rem !important;
        /* padding-right: 1rem;
        padding-left: 1rem; */
      }
    }
    .slick-track {
      display: flex;
      /* gap: 1.6rem; */
      /* width: 100% !important; */
      /* background-color: red; */
      @media screen and (min-width: ${({ theme }) => theme.tablet_768}) {
        /* display: flex; */
     
        /* width: 100%; */
        /* background-color: red; */
      }
      @media screen and (min-width: ${({ theme }) => theme.desktop_1440}) {
        /* gap: 2rem; */
       
      }
    }
  }
`;
