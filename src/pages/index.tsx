import type { NextPage } from "next";

import UserLayout from "@/components/UserLayout";
import { categories } from "@/data/categories";
import { Container } from "@/components/Common/Container.styled";

const Home: NextPage = () => {
  return (
    <UserLayout title={"Головна"} categories={categories}>
      <Container>
        <br />
        <p>Головна</p>
      </Container>
    </UserLayout>
  );
};

export default Home;
