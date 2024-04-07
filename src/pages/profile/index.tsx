import type { NextPage } from "next"
import { Container } from "@/styles/commonStyles"
import UserLayout from "@/components/UserLayout"
import { categories } from "@/data/categories"
import { getHomePageData } from "@/services/pageOperations"
import { HomePageProps } from "@/types/pages"
import { Title } from "@/styles/CartPage.styled"
import DropDownProfile from "@/components/DropDownProfile/DropDownProfile"

const menuItems = ["Мої дані", "Мої замовлення", "Вибране"]
export const getStaticProps = async () => {
  const result = await getHomePageData()
  return result
}

const Profile: NextPage<HomePageProps> = () => {
  return (
    <UserLayout title={"Профіль"} categories={categories}>
      <section>
        <Container>
          <Title>Профіль</Title>
          <DropDownProfile menuItems={menuItems} />
        </Container>
      </section>
    </UserLayout>
  )
}

export default Profile
