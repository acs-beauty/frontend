import type { NextPage } from "next";

import UserLayout from "@/components/UserLayout";
import { Container } from "@/components/Common/Container.styled";

const Brands: NextPage = () => {
  return (
    <UserLayout title={"Бренди"}>
      <Container>
        <br />
        <p>Бренди</p>
      </Container>
    </UserLayout>
  );
};

export default Brands;