import type { NextPage } from "next";

import UserLayout from "@/components/UserLayout";
import HomePageMainBlock from "@/components/HomePageMainBlock";
import { categories } from "@/data/categories";
import { allProducts } from "@/data/products";
import { getHomePageData } from "@/services/pageOperations";
import { HomePageProps } from "@/types/pages";

export const getStaticProps = async () => {
  const result = await getHomePageData();

  return result;
};

const Home: NextPage<HomePageProps> = () => {
  return (
    <UserLayout title={"Головна"} categories={categories}>
      <HomePageMainBlock productList={allProducts}/>
    </UserLayout>
  );
};

export default Home;
