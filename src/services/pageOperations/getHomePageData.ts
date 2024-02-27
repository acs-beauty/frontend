import { getCategories } from "../operations";

export const getHomePageData = async () => {
  try {
    const categories = await getCategories();
    return { props: { categories }, revalidate: 120 };
  } catch (error) {
    return { props: { categories: [] } };
  }
};
