import { FC } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { IProducts } from "@/types/components";
import ProductCard from "../ProductCard";
import ArrowButtonNext from "@/UI/ArrowButtonNext";
import ArrowButtonPrevious from "@/UI/ArrowButtonPrevious";
import { SCREENS } from "@/constants";

console.log(parseInt(SCREENS.tablet, 10))
console.log(parseInt(SCREENS.desktop, 10))

const settings = {
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  initialSlide: 0,
  dots: false,
  infinite: true,
  arrows: true,
  nextArrow: <ArrowButtonNext />,
  prevArrow: <ArrowButtonPrevious  />,
  responsive: [
    {
      breakpoint: parseInt(SCREENS.tablet, 10),
      settings: {
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: parseInt(SCREENS.desktop, 10),
      settings: {
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
  ],
};

const ProductSlider: FC<{ productList: IProducts }> = ({ productList }) => {
  const { products } = productList;
  return (
    <div>
      <Slider {...settings}>
        {products.map((item) => (
          <ProductCard
            product={item}
            isHeartIcon={false}
            key={item.productId}
          />
        ))}
      </Slider>
    </div>
  );
};

export default ProductSlider;
