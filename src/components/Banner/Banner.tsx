import { FC } from "react";
import Image from "next/image";

import { ImageContainer } from "./Banner.styled";

import { Container } from "@/styles/commonStyles";

const Banner: FC = () => {
  return (
    <Container>
    <ImageContainer>
      <Image
        src={"/images/hairBanner.png"}
        alt="picture"
        fill
        sizes="(min-width: 28rem) 28rem,(min-width: 100rem) 100rem"
      />
    </ImageContainer>
    </Container>
  );
};

export default Banner;
