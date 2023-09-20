import { NextPage } from "next";

import { categories } from "@/data/categories";

import UserLayout from "@/components/UserLayout";
import DeliveryPageMainBlock from "@/components/DeliveryPageMainBlock";

const Delivery: NextPage = () => {
  return (
    <UserLayout title={"Доставка і оплата"} categories={categories}>
      <DeliveryPageMainBlock />
    </UserLayout>
  );
};

export default Delivery;
