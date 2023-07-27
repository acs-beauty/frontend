import type { NextPage } from "next";

import UserLayout from "@/components/UserLayout";
import { Container } from "@/components/Common/Container.styled";

const Care: NextPage = () => {
  return (
    <UserLayout title={"Догляд"}>
      <Container>
        <br />
        <p>Догляд</p>
      </Container>
    </UserLayout>
  );
};

export default Care;
