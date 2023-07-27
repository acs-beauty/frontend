import { FC } from "react";
import Image from "next/image";

import { ImageContainer } from "./Banner.styled";

const Banner: FC = () => {
  return (
    <ImageContainer>
      <Image
        src={"/images/hairBanner.png"}
        alt="picture"
        fill
        sizes="(min-width: 360px) 320px,(min-width: 1440px) 1280px"
      />
    </ImageContainer>
  );
};

export default Banner;
