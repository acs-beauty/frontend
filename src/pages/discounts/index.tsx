import type { NextPage } from "next";

import UserLayout from "@/components/UserLayout";
import { Container } from "@/components/Common/Container.styled";

const Discounts: NextPage = () => {
  return (
    <UserLayout title={"Акції"}>
      <Container>
        <br />
        <p>Акції</p>
      </Container>
    </UserLayout>
  );
};

export default Discounts;
