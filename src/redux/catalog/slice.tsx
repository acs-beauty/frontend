import { categories } from "@/data/categories"
import { subcategory } from "@/data/subcategory"
import { getCategories } from "@/services/operations"
import { ICategoryData } from "@/types/components"

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { build, number } from "joi"

export const fetchCategories = createAsyncThunk("categories/fetchCategories", async () => {
  // Мы считаем, что getCategories будет возвращать Promise с массивом категорий
  const categories = await getCategories()
  console.log("categories", categories)
  return categories
})

export const deleteSubcategory = createAsyncThunk(
  "categories/deleteSubcategory",
  async (id: number, { rejectWithValue }) => {
    try {
      await deleteSubcategory(id);
      console.log("id", id);
      return { id };
    } catch (error: unknown) {
      return rejectWithValue(error);
    }
  }
);

export interface CategoriesState {
  categories: ICategoryData[]
  selectedSubcategory: { id: number; name: string }[] | null
  isLoading: boolean
  error: unknown | null
}

const initialState: CategoriesState = {
  categories: [],
  selectedSubcategory: [],
  isLoading: false,
  error: null,
}

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
   
    setCategories: (state, action) => {
      const menuId = action.payload
      const foundCategory = categories.find(category => category.categoryId === menuId)
      if (foundCategory) {
        state.categories = [foundCategory] // Записываем найденный объект в состояние
      } else {
        state.categories = [] // Если объект не найден, очищаем состояние
      }
      console.log("state.categories", state.categories)
    },

    checkedCategories: (state, action) => {
      const { checkedSubcategories, categoryId } = action.payload;
    console.log("action.payload", action.payload)
      const foundCategory = categories.find(category => category.categoryId === categoryId);
    
      if (foundCategory) {
        const selectedSubcategories = foundCategory.subcategory.filter(
          subcategory => checkedSubcategories[subcategory.subcategoryId]
        );
    
        state.selectedSubcategory = selectedSubcategories.map(subcategory => ({
          id: subcategory.subcategoryId,
          name: subcategory.name,
        }));
      } else {
        state.selectedSubcategory = [];
      }
      console.log("state.selectedSubcategory", state.selectedSubcategory);
    },
  },

  extraReducers: builder => {
    builder
      .addCase(deleteSubcategory.pending, handlePending)
      .addCase(deleteSubcategory.fulfilled, (state, action) => {
        const idToRemove = action.payload.id;
        if (state.selectedSubcategory) {
          state.selectedSubcategory = state.selectedSubcategory.filter(subcategory => subcategory.id !== idToRemove);
        }
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteSubcategory.rejected, handleRejected)
  },
})

export function handlePending(state: { isLoading: boolean }) {
  state.isLoading = true
}

export function handleRejected(
  state: { isLoading: boolean; error: unknown },
  action: { payload: unknown }
) {
  state.isLoading = false
  state.error = action.payload
}

export const { setCategories, checkedCategories } = categoriesSlice.actions

export default categoriesSlice.reducer
