import { CategoriesState } from "@/redux/catalog/slice";

export const selectCategoryName = (state: { categories: CategoriesState }) => state.categories.categories;

export const selectCheckedCategories = (state: { categories: CategoriesState }) => state.categories.selectedSubcategory;