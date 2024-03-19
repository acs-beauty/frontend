import type { NextPage } from "next"

import UserLayout from "@/components/UserLayout"
import { categories } from "@/data/categories"
import { getHomePageData } from "@/services/pageOperations"
import { HomePageProps } from "@/types/pages"
import { Container, SectionTitle } from "@/styles/commonStyles"
import { Chosen, Logout, MyData, MyOrders } from "@/components/Order"
import { OptionsWrapper } from "./orderPage.styled"

export const getStaticProps = async () => {
  const result = await getHomePageData()

  return result
}

const Order: NextPage<HomePageProps> = () => {
  return (
    <UserLayout title={"Оформити замовлення"} categories={categories}>
      <Container>
        <SectionTitle>ЗАМОВЛЕННЯ</SectionTitle>
        <OptionsWrapper>
          <MyData />
          <MyOrders />
          <Chosen />
          <Logout />
        </OptionsWrapper>
      </Container>
    </UserLayout>
  )
}

export default Order
