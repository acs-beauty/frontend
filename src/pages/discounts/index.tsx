import type { NextPage } from "next";

import UserLayout from "@/components/UserLayout";
import { categories } from "@/data/categories";

import { Container } from "@/styles/commonStyles";

const Discounts: NextPage = () => {
  return (
    <UserLayout title={"Акції"} categories={categories}>
      <Container>
        <br />
        <p>Акції</p>
      </Container>
    </UserLayout>
  );
};

export default Discounts;
