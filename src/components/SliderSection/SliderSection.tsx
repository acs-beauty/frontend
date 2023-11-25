import { FC } from "react";

import ProductSlider from "../ProductSlider";
import { IProducts } from "@/types/components";
import { Container, SectionTitle } from "@/styles/commonStyles";
import { Section } from "./SliderSection.styled";

const SliderSection: FC<{ title: string; productList: IProducts }> = ({
  title,
  productList,
}) => {
  return (
    <Section>
      <Container>
        <SectionTitle>{title}</SectionTitle>
        <ProductSlider productList={productList} />
      </Container>
    </Section>
  );
};

export default SliderSection;
