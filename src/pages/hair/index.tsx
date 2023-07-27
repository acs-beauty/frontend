import type { NextPage } from "next";

import UserLayout from "@/components/UserLayout";
import { Container } from "@/components/Common/Container.styled";

const Hair: NextPage = () => {
  return (
    <UserLayout title={"Волосся"}>
      <Container>
        <br />
        <p>Волосся</p>
      </Container>
    </UserLayout>
  );
};

export default Hair;
