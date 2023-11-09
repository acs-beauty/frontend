import type { NextPage } from "next";

import UserLayout from "@/components/UserLayout";
import { categories } from "@/data/categories";
import { getHomePageData } from "@/services/pageOperations";
import { HomePagePropsType } from "@/types/pages";

export const getStaticProps = async () => {
  const result = await getHomePageData();

  return result;
};

const Contacts: NextPage<HomePagePropsType> = () => {
  return (
    <UserLayout title={"Контакти"} categories={categories}>
      <p>Сторінка Контакти</p>
    </UserLayout>
  );
};

export default Contacts;
