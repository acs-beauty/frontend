import type { NextPage, GetStaticPropsContext, GetStaticPaths } from "next";

import UserLayout from "@/components/UserLayout";
import { categories } from "@/data/categories";
import { category } from "@/data/category";
import { subcategory } from "@/data/subcategory";
import Banner from "@/components/Banner";
import FilterBlock from "@/components/FilterBlock/FilterBlock";
import { Container, SectionTitle } from "@/styles/commonStyles";
import LinkRoute  from "@/components/LinkRoute"
// import { getSubcategoryPageData } from "@/services/pageOperations";
// import { getCategories } from "@/services/operations";


// export const getStaticProps = async (context: GetStaticPropsContext) => {
//   const categoryName = context.params?.subcategoryName as string;
//   const result = await getSubcategoryPageData(subcategoryName);
//   return result;
// };

// export const getStaticPaths: GetStaticPaths = async () => {
//   const categories = await getCategories();
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
  console.log("first", category.name)
  return (
    <UserLayout title={"Шампуні"} categories={categories}>
      <Container>
      <LinkRoute > 
      {category.name}  
      </LinkRoute>  
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
