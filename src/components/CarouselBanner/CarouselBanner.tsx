import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

import { generateImageSizesString } from "@/helpers";
import { Section, ImageContainer, StyledSlider } from "./CarouselBanner.styled";

type Image = {
  id: string;
  path: string;
  title: string;
  link: string;
};

type CarouselProps = {
  images: Image[];
};

const CarouselBanner: FC<CarouselProps> = ({ images }) => {
  const imageSizes = generateImageSizesString("100%", "768px", "1240px");

  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    dots: true,
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 10000,
    cssEase: "linear",
    pauseOnHover: true,
    className: "banner-slider",
  };

  return (
    <Section>
      <div>
        <StyledSlider {...settings}>
          {images.map(item => (
            <Link href={item.link} key={item.id}>
              <ImageContainer>
                <Image
                  src={item.path}
                  alt={item.title}
                  width={320}
                  height={445}
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
