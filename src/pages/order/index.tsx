import type { NextPage } from "next"
import { getHomePageData } from "@/services/pageOperations"
import { HomePageProps } from "@/types/pages"
import UserLayout from "@/components/UserLayout"
import { Container, SectionTitle } from "@/styles/commonStyles"
import { categories } from "@/data/categories"
import { YourOrderBlock } from "@/components/YourOrderBlock"
import { YourDataBlock } from "@/components/YourDataBlock"

export const getStaticProps = async () => {
  const result = await getHomePageData()

  return result
}

const Order: NextPage<HomePageProps> = () => {
  return (
    <UserLayout title={"Оформити замовлення"} categories={categories}>
      <Container>
        <SectionTitle>ОФОРМИТИ ЗАМОВЛЕННЯ</SectionTitle>
        <YourOrderBlock />
        <YourDataBlock />
      </Container>
    </UserLayout>
  )
}

export default Order
