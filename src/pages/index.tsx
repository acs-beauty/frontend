import type { NextPage } from "next";

import UserLayout from "@/components/UserLayout";
import { categories } from "@/data/categories";
import { Container } from "@/components/Common/Container.styled";
import { getHomePageData } from "@/services/pageOperations";
import { HomePagePropsType } from "@/types/pages";

export const getStaticProps = async () => {
  const result = await getHomePageData();

  return result;
};

const Home: NextPage<HomePagePropsType> = () => {
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
