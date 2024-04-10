import { getBrands } from "@/services/operations";
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IBrand } from "@/types/components"

export interface BrandsState {
    count: number
    brands: IBrand[]
    isLoading: boolean
    error: unknown | null
  }
  
  const initialState: BrandsState = {
    count: 0,
    brands: [],
    isLoading: false,
    error: null,
  }

  const brandsSlice = createSlice({
    name: "brands",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
    .addCase(getBrands.pending, handlePending)
    .addCase(getBrands.fulfilled, (state, action) => {
      state.count = action.payload.count
      state.brands = action.payload.rows
      console.log("state.brands", state.brands)
      state.isLoading = false
      state.error = null
    })
    .addCase(getBrands.rejected, handleRejected)

  }
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

  export const brands = brandsSlice.reducer

