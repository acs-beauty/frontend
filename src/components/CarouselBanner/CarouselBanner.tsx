import React, { useState } from "react";
import {CarouselContainer, CarouselImage, Dot, DotsContainer} from './CarouselBanner.styled'

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
      <DotsContainer>
        {images.map((_, index) => (
          <Dot
            key={index}
            className={`dot ${index === activeIndex ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </DotsContainer>
    </CarouselContainer>
  );
};

export default CarouselBanner
