import type { NextPage } from "next"

import UserLayout from "@/components/UserLayout"
import { categories } from "@/data/categories"
import { getHomePageData } from "@/services/pageOperations"
import { HomePageProps } from "@/types/pages"
import { Container, SectionTitle } from "@/styles/commonStyles"
import { OptionLink, OptionTitle, OptionsWrapper } from "./ordersPage.styled"
import OpenSubMenuIcon from "@/UI/icons/OpenSubMenuIcon"
import { MyOrders } from "@/components/MyOrders"
import { Logout } from "@/components/Logout"

export const getStaticProps = async () => {
  const result = await getHomePageData()

  return result
}

const Orders: NextPage<HomePageProps> = () => {
  return (
    <UserLayout title={"Мої замовлення"} categories={categories}>
      <Container>
        <SectionTitle>ЗАМОВЛЕННЯ</SectionTitle>
        <OptionsWrapper>
          <OptionLink href="/">
            <OptionTitle>Мої дані</OptionTitle>
            <OpenSubMenuIcon />
          </OptionLink>
          <MyOrders />
          <OptionLink href="/">
            <OptionTitle>Вибране</OptionTitle>
            <OpenSubMenuIcon />
          </OptionLink>
          <Logout />
        </OptionsWrapper>
      </Container>
    </UserLayout>
  )
}

export default Orders
