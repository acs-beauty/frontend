import { getAllCategories } from "../operations";

export const getHomePageData = async () => {
  try {
    const categories = await getAllCategories();
    return { props: { categories }, revalidate: 120 };
  } catch (error) {
    return { props: { categories: [] } };
  }
};
