import type { NextPage } from "next";

import UserLayout from "@/components/UserLayout";
import { categories } from "@/data/categories";

import { Container } from "@/styles/commonStyles";

const Novelties: NextPage = () => {
  return (
    <UserLayout title={"Новинки"} categories={categories}>
      <Container>
        <br />
        <h1>Новинки</h1>
      </Container>
    </UserLayout>
  );
};

export default Novelties;
