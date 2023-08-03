import type { NextPage, GetStaticPropsContext, GetStaticPaths } from "next";

import UserLayout from "@/components/UserLayout";
import { categories } from "@/data/categories";
import { category } from "@/data/category";
import Banner from "@/components/Banner";
import FilterBlock from "@/components/FilterBlock/FilterBlock";
import { Container } from "@/components/Common/Container.styled";
import { SectionTitle } from "@/components/Common/SectionTitle.styled";
import { getCategoryPageData } from "@/services/pageOperations";
import { getAllCategories } from "@/services/operations";
import { CategoryPagePropsType } from "@/types/pages/CategoryPagePropsType";

// export const getStaticProps = async (context: GetStaticPropsContext) => {
//   const categoryName = context.params?.categoryName as string;
//   const result = await getCategoryPageData(categoryName);

//   return result;
// };

// export const getStaticPaths: GetStaticPaths = async () => {
//   const categories = await getAllCategories();
//   const paths = categories.map((category) => ({
//     params: { category: category.linkKey },
//   }));

//   return {
//     paths,
//     fallback: false,
//   };
// };

const Category: NextPage<CategoryPagePropsType> = () => {
  return (
    <UserLayout title={category.name} categories={categories}>
      <Container>
        <SectionTitle>{category.name}</SectionTitle>
        <Banner />
        <div>
          <FilterBlock minPrice={category.minPrice} maxPrice={category.maxPrice}/>
        </div>
      </Container>
    </UserLayout>
  );
};

export default Category;
