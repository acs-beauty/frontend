import type { NextPage } from "next";

import UserLayout from "@/components/UserLayout";
import { categories } from "@/data/categories";
import { Container } from "@/components/Common/Container.styled";

const Brands: NextPage = () => {
  return (
    <UserLayout title={"Бренди"} categories={categories}>
      <Container>
        <br />
        <p>Бренди</p>
      </Container>
    </UserLayout>
  );
};

export default Brands;