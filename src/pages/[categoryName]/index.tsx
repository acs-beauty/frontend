import type { NextPage, GetStaticPropsContext, GetStaticPaths } from "next"

import UserLayout from "@/components/UserLayout"

import Banner from "@/components/Banner"

import { Container, SectionTitle } from "@/styles/commonStyles"
import CategoryPageMainBlock from "@/components/CategoryPageMainBlock"
import LinkRoute from "@/components/LinkRoute"

import { CategoryPageProps } from "@/types/pages/CategoryPageProps"
import { useSelector } from "react-redux"
import { selectCategoryName } from "@/redux/catalog/selector"

const Category: NextPage<CategoryPageProps> = () => {
  const categories = useSelector(selectCategoryName)
  const category = categories[0]
  return (
    <UserLayout title={category.name} categories={categories}>
      <Container>
        <LinkRoute>{category.name}</LinkRoute>
        <SectionTitle>{category.name}</SectionTitle>
      </Container>
      <Banner />
      <CategoryPageMainBlock category={category} id={category.id} />
    </UserLayout>
  )
}

export default Category
