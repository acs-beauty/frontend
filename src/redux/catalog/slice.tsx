import { categories } from "@/data/categories"
import { getCategories } from "@/services/operations"
import { ICategoryData, ICategoryName } from "@/types/components"

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const fetchCategories = createAsyncThunk<ICategoryName[], void>(
  "categories/fetchCategories",
  async (_, { rejectWithValue }) => {
    try {
    
      const data = await getCategories();
      return data;
    } catch (error) {
      
      return rejectWithValue(error);
    }
  }
);

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
  newCategories: ICategoryName[]
  selectedSubcategory: { id: number; name: string }[] | null
  isLoading: boolean
  error: unknown | null
}

const initialState: CategoriesState = {
  categories: [],
  newCategories: [],
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
      const foundCategory = categories.find(category => category.id === menuId)
      if (foundCategory) {
        state.categories = [foundCategory] // Записываем найденный объект в состояние
      } else {
        state.categories = [] // Если объект не найден, очищаем состояние
      }
    },

    checkedCategories: (state, action) => {
      const { checkedSubcategories, categoryId } = action.payload;
      const foundCategory = categories.find(category => category.id === categoryId);
    
      if (foundCategory) {
        const selectedSubcategories = foundCategory.subcategory.filter(
          subcategory => checkedSubcategories[subcategory.id]
        );
    
        state.selectedSubcategory = selectedSubcategories.map(subcategory => ({
          id: subcategory.id,
          name: subcategory.name,
        }));
      } else {
        state.selectedSubcategory = [];
      }
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
      .addCase(fetchCategories.pending, handlePending)
      .addCase(fetchCategories.fulfilled, (state, action) => {   
        
        state.newCategories = action.payload;
        state.isLoading = false;
        state.error = null;
      });
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
