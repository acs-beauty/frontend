import { FC } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { IProducts } from "@/types/components";
import ProductCard from "../ProductCard";
import ArrowButtonNext from "@/UI/ArrowButtonNext";
import ArrowButtonPrevious from "@/UI/ArrowButtonPrevious";
import { SCREENS } from "@/constants";
import { StyledSlider } from "./ProductSlider.styled";

const settings = {
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  dots: false,
  infinite: true,
  arrows: true,
  nextArrow: <ArrowButtonNext />,
  prevArrow: <ArrowButtonPrevious />,
  className: "slider-goods",
  responsive: [
    {
      breakpoint: parseInt(SCREENS.desktop, 10),
      settings: {
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: false,
      },
    },
  ],
};

const ProductSlider: FC<{ productList: IProducts }> = ({ productList }) => {
  const { products } = productList;
  return (
    <StyledSlider {...settings}>
      {products.map((item, index) => (
        <ProductCard product={item} isHeartIcon={false} key={index} />
      ))}
    </StyledSlider>
  );
};

export default ProductSlider;
