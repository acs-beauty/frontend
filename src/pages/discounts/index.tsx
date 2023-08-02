import type { NextPage } from "next";

import UserLayout from "@/components/UserLayout";
import { categories } from "@/data/categories";
import { Container } from "@/components/Common/Container.styled";

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
