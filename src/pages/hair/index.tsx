import type { NextPage } from "next";

import UserLayout from "@/components/UserLayout";
import Banner from "@/components/Banner";
import FilterBlock from "@/components/FilterBlock/FilterBlock";
import { Container } from "@/components/Common/Container.styled";
import { SectionTitle } from "@/components/Common/SectionTitle.styled";

const Hair: NextPage = () => {
  return (
    <UserLayout title={"Волосся"}>
      <Container>
        <SectionTitle>Волосся</SectionTitle>
        <Banner />
        <div>
          <FilterBlock />
        </div>
      </Container>
    </UserLayout>
  );
};

export default Hair;
