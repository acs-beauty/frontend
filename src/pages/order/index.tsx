import type { NextPage } from "next";

import UserLayout from "@/components/UserLayout";
import { categories } from "@/data/categories";
import { getHomePageData } from "@/services/pageOperations";
import { HomePageProps } from "@/types/pages";

export const getStaticProps = async () => {
  const result = await getHomePageData();

  return result;
};

const Order: NextPage<HomePageProps> = () => {
  return (
    <UserLayout title={"Оформити замовлення"} categories={categories}>
      <p>Оформити замовлення</p>
    </UserLayout>
  );
};

export default Order;
