import type { NextPage } from "next";

import UserLayout from "@/components/UserLayout";
import { categories } from "@/data/categories";
import { getHomePageData } from "@/services/pageOperations";
import { HomePageProps } from "@/types/pages";
import CartPageMainBlock from "@/components/CartPageMainBlock";

export const getStaticProps = async () => {
  const result = await getHomePageData();

  return result;
};

const Cart: NextPage<HomePageProps> = () => {
  return (
    <UserLayout title={"Кошик"} categories={categories}>
      <CartPageMainBlock/>
    </UserLayout>
  );
};

export default Cart;
