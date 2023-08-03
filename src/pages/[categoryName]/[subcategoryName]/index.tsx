import type { NextPage, GetStaticPropsContext, GetStaticPaths } from "next";

import UserLayout from "@/components/UserLayout";
import { categories } from "@/data/categories";
import { subcategory } from "@/data/subcategory";
import Banner from "@/components/Banner";
import FilterBlock from "@/components/FilterBlock/FilterBlock";
import { Container } from "@/components/Common/Container.styled";
import { SectionTitle } from "@/components/Common/SectionTitle.styled";
import { getSubcategoryPageData } from "@/services/pageOperations";
import { getAllCategories } from "@/services/operations";


// export const getStaticProps = async (context: GetStaticPropsContext) => {
//   const categoryName = context.params?.subcategoryName as string;
//   const result = await getSubcategoryPageData(subcategoryName);
//   return result;
// };

// export const getStaticPaths: GetStaticPaths = async () => {
//   const categories = await getAllCategories();
// const paths = [];
  
//   categories.forEach((category) => {
//     category.subcategory.forEach((subcategory) => {
//       paths.push({
//         params: {
//           categoryId: category.name,
//           subcategoryId: subcategory.name,
//         },
//       });
//     });
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// };

const Subcategory: NextPage = () => {
  return (
    <UserLayout title={"Шампуні"} categories={categories}>
      <Container>
        <SectionTitle>{subcategory.name}</SectionTitle>
        <Banner />
        <div>
          <FilterBlock minPrice={subcategory.minPrice} maxPrice={subcategory.maxPrice}/>
        </div>
      </Container>
    </UserLayout>
  );
};

export default Subcategory;
