import { createAsyncThunk } from "@reduxjs/toolkit"
import { brandsApi } from "@/components/api"
import { IBrand, IGetBrandsParams, IResponseBrand } from "@/types/components"

export const getBrands = createAsyncThunk<IResponseBrand, IGetBrandsParams>(
  "brands/getBrands",
  async (params, { rejectWithValue }) => {
    try {
      const { data } = await brandsApi.getBrands(params)
console.log("brands", data)
      return data
    } catch (error: unknown) {
      return rejectWithValue(error)
    }
  }
)

