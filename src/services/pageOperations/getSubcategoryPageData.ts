import { getCategories, getSubcategoryByLinkKey } from "../operations";

export const getSubcategoryPageData = async (subcategoryLink: string) => {
  try {
    const categories = await getCategories();
    const subcategory = await getSubcategoryByLinkKey(subcategoryLink);
    return { props: { categories, subcategory }, revalidate: 120 };
  } catch (error) {
    return { props: { categories: [], subcategory: {} } };
  }
};
