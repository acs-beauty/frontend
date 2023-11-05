import React, { useState } from "react";
import { CarouselContainer, CarouselImage, Dot, DotsContainer } from './CarouselBanner.styled';
import ButtonBanner from './../ButtonBanner/ButtonBanner'

type CarouselProps = {
  images: string[];
};

const CarouselBanner: React.FC<CarouselProps> = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <CarouselContainer>
      <CarouselImage src={images[activeIndex]} alt={`Image ${activeIndex}`} />
      <ButtonBanner />
      <DotsContainer>
        {images.map((_, index) => (
          <Dot
            key={index}
            className={index === activeIndex ? 'active' : ''}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </DotsContainer>
    </CarouselContainer>
  );
};

export default CarouselBanner
