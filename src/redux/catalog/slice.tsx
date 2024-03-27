import { categories } from "@/data/categories";
import { getCategories } from "@/services/operations";
import { ICategoryData } from "@/types/components";


import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async () => {
    // Мы считаем, что getCategories будет возвращать Promise с массивом категорий
    const categories = await getCategories();
    console.log("categories", categories)
    return categories;
  }
);


export interface CategoriesState {
  categories: ICategoryData[];
  selectedSubcategory: { id: number; name: string }[] | null;
  isLoading: boolean;
  error: unknown | null;
}

const initialState: CategoriesState = {
  categories: [],
  selectedSubcategory: [],
  isLoading: false,
  error: null,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategories: (state, action) => {
        
      const menuId= action.payload;
      // console.log("menuId", menuId)
      const foundCategory = categories.find(category => category.categoryId === menuId);
      if (foundCategory) {
        state.categories = [foundCategory]; // Записываем найденный объект в состояние
      } else {
        state.categories = []; // Если объект не найден, очищаем состояние
      }
      console.log("state.categories", state.categories)
    },

    checkedCategories: (state, action) => {
      const { checkedSubcategories, categoryId } = action.payload;
      console.log("action.payload", action.payload);
    
      // Находим категорию по categoryId
      const foundCategory = categories.find(category => category.categoryId === categoryId);
      
      if (foundCategory) {
        // Фильтруем субкатегории, оставляя только те, у которых ключ присутствует в checkedSubcategories
        const selectedSubcategories = foundCategory.subcategory.filter(subcategory => checkedSubcategories[subcategory.subcategoryId]);
        
        // Устанавливаем выбранные субкатегории в state.selectedSubcategory
        state.selectedSubcategory = selectedSubcategories.map(subcategory => ({ id: subcategory.subcategoryId, name: subcategory.name }));
      } else {
        state.selectedSubcategory = [];
      }
      console.log("state.selectedSubcategory", state.selectedSubcategory);
    }
  },
  
});

export const { setCategories, checkedCategories } = categoriesSlice.actions;

export default categoriesSlice.reducer;