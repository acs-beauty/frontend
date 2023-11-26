import { FC } from "react";

import SliderSection from "../SliderSection";
import CarouselBanner from "../CarouselBanner";
import PopularCategories from "@/UI/PopularCategories";
import { IProducts } from "@/types/components";
import { Wrapper } from "./HomePageMainBlock.styled";

const imagePaths = [
  "./images/mainBanner.webp",
  "./images/hairBanner.webp",
  "./images/hairBanner.webp",
  "./images/hairBanner.webp",
  "./images/hairBanner.webp",
];

const HomePageMainBlock: FC<{ productList: IProducts }> = ({ productList }) => {
  return (
    <Wrapper>
      <CarouselBanner images={imagePaths} />
      <PopularCategories />
      <SliderSection title="Бестселери" productList={productList} />
      <SliderSection title="Новинки" productList={productList} />
      <SliderSection title="Товари зі знижкою" productList={productList} />
    </Wrapper>
  );
};

export default HomePageMainBlock;
