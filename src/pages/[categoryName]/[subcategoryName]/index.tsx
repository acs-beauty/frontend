import type { NextPage, GetStaticPropsContext, GetStaticPaths } from "next";

import UserLayout from "@/components/UserLayout";
import { categories } from "@/data/categories";
import { category } from "@/data/category";
import { subcategory } from "@/data/subcategory";
import Banner from "@/components/Banner";
import FilterBlock from "@/components/FilterBlock/FilterBlock";
import { Container, SectionTitle } from "@/styles/commonStyles";
import LinkRoute  from "@/components/LinkRoute"

const Subcategory: NextPage = () => {
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
