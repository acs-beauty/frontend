import { getProducts } from "@/services/operations";
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IProduct } from "@/types/components"

export interface ProductsState {
    count: number
    products: IProduct[]
    isLoading: boolean
    error: unknown | null
  }
  
  const initialState: ProductsState = {
    count: 0,
    products: [],
    isLoading: false,
    error: null,
  }

  const productsSlice = createSlice({
    name: "products",
  initialState,
  reducers: {

    checkedCart: (state, action) => {
      state.products = action.payload
     
    }
  },
  extraReducers: builder => {
    builder
    .addCase(getProducts.pending, handlePending)
    .addCase(getProducts.fulfilled, (state, action) => {
      state.count = action.payload.count
      state.products = action.payload.rows
      state.isLoading = false
      state.error = null
    })
    .addCase(getProducts.rejected, handleRejected)

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

  export const { checkedCart } = productsSlice.actions
  export const products = productsSlice.reducer

