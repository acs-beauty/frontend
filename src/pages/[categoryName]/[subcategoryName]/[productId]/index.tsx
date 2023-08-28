import type { NextPage } from "next";

import UserLayout from "@/components/UserLayout";
import { categories } from "@/data/categories";
import { Container } from "@/components/Common/Container.styled";

const Product: NextPage = () => {
  return (
    <UserLayout title={"Один продукт"} categories={categories}>
      <Container>
        <p>Один продукт</p>
      </Container>
    </UserLayout>
  );
};

export default Product;
