import React, { useState } from "react";
import Slider from "react-slick";
import Link from "next/link";
import Image from "next/image";

import { generateImageSizesString } from "@/helpers";
import { Section, ImageContainer, StyledSlider } from "./CarouselBanner.styled";

type CarouselProps = {
  images: string[];
};

const CarouselBanner: React.FC<CarouselProps> = ({ images }) => {
  const imageSizes = generateImageSizesString("100%", "768px", "1440px");

  const settings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    dots: true,
    infinite: true,
    arrows: false,
    className: "banner-slider",
  };

  return (
    <Section>
      <div>
        <StyledSlider {...settings}>
          {images.map((item, index) => (
            <Link href="/brands" key={index}>
              <ImageContainer>
                <Image
                  src={"/images/mainBanner.webp"}
                  alt="banner"
                  width={320}
                  height={445}
                  // fill
                  sizes={imageSizes}
                  layout="responsive"
                />
              </ImageContainer>
            </Link>
          ))}
        </StyledSlider>
      </div>
    </Section>
  );
};

export default CarouselBanner;
