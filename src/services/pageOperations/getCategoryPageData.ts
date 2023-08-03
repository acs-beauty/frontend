import { getAllCategories, getCategoryByLinkKey } from "../operations";

export const getCategoryPageData = async (categoryLink: string) => {
  try {
    const categories = await getAllCategories();
    const category = await getCategoryByLinkKey(categoryLink);
    return { props: { categories, category }, revalidate: 120 };
  } catch (error) {
    return { props: { categories: [], category: {} } };
  }
};
