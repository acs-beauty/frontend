import type { NextPage } from "next";

import UserLayout from "@/components/UserLayout";
import { Container } from "@/components/Common/Container.styled";

const Novelties: NextPage = () => {
  return (
    <UserLayout title={"Новинки"}>
      <Container>
        <br />
        <p>Новинки</p>
      </Container>
    </UserLayout>
  );
};

export default Novelties;
