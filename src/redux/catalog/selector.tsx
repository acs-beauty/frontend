import { CategoriesState } from "@/redux/catalog/slice";

export const selectCategoryName = (state: { categories: CategoriesState }) => state.categories.categories;