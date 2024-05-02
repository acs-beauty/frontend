import type { NextPage } from "next"

import UserLayout from "@/components/UserLayout"
import { categories } from "@/data/categories"
import { Container } from "@/styles/commonStyles"
import DeliverySection from "@/components/Card/DeliverySection";
import MainSection from "@/components/Card/MainSection"
import AdditionalSection from "@/components/Card/AdditionalSection"


import CardDescriptions from "@/components/Card/CardDescriptions";

const Product: NextPage = () => {
  
  return (
    <UserLayout title={"Один продукт"} categories={categories}>
      <Container>
        <MainSection/>
        <DeliverySection/>        
        <CardDescriptions/>
        <AdditionalSection/>
      </Container>
    </UserLayout>
  )
}

export default Product
