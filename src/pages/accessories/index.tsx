import type { NextPage } from "next";

import UserLayout from "@/components/UserLayout";
import { Container } from "@/components/Common/Container.styled";

const Accessories: NextPage = () => {
  return (
    <UserLayout title={"Аксесуари"}>
      <Container>
        <br />
        <p>Аксесуари</p>
      </Container>
    </UserLayout>
  );
};

export default Accessories;