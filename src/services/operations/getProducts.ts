import { createAsyncThunk } from "@reduxjs/toolkit"
import { productsApi } from "@/components/api"
import { IBrand, IGetBrandsParams, IResponseProduct } from "@/types/components"

export const getProducts = createAsyncThunk<IResponseProduct, IGetBrandsParams>(
  "products/getProducts",
  async (params, { rejectWithValue }) => {
    try {
      const { data } = await productsApi.getProducts(params)
console.log("products", data)
      return data
    } catch (error: unknown) {
      return rejectWithValue(error)
    }
  }
)