import type { NextPage } from "next";

import UserLayout from "@/components/UserLayout";
import { Container } from "@/components/Common/Container.styled";

const Body: NextPage = () => {
  return (
    <UserLayout title={"Тіло"}>
      <Container>
        <br />
        <p>Тіло</p>
      </Container>
    </UserLayout>
  );
};

export default Body;
