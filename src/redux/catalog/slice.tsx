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
  isLoading: boolean;
  error: unknown | null;
}

const initialState: CategoriesState = {
  categories: [],
  isLoading: false,
  error: null,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategories: (state, action) => {
        
      const menuId= action.payload;
      console.log("menuId", menuId)
      const foundCategory = categories.find(category => category.categoryId === menuId);
      if (foundCategory) {
        state.categories = [foundCategory]; // Записываем найденный объект в состояние
      } else {
        state.categories = []; // Если объект не найден, очищаем состояние
      }
      console.log("state.categories", state.categories)
    },
    
  },
  
});

export const { setCategories } = categoriesSlice.actions;

export default categoriesSlice.reducer;