import { FC } from "react";

import SliderSection from "../SliderSection";
import CarouselBanner from "../CarouselBanner";
import PopularCategories from "@/UI/PopularCategories";
import { IProducts } from "@/types/components";
import { Wrapper } from "./HomePageMainBlock.styled";

const imagePaths = [
  {
    id: "1",
    path: "/images/mainBanner.webp",
    title: "one",
    link: "/brands",
  },
  {
    id: "2",
    path: "/images/mainBanner.webp",
    title: "one",
    link: "/brands",
  },
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
