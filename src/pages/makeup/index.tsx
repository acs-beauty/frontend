import type { NextPage } from "next";

import UserLayout from "@/components/UserLayout";
import { Container } from "@/components/Common/Container.styled";

const Makeup: NextPage = () => {
  return (
    <UserLayout title={"Макіяж"}>
      <Container>
        
        <br />
        <p>Макіяж</p>
      </Container>
    </UserLayout>
  );
};

export default Makeup;