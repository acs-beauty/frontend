import { AxiosResponse } from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { categoriesApi } from "@/components/api"
import { brandsApi } from "@/components/api"
import axios from "axios"
import { ICategory, ICategoryName } from "@/types/components"
import { axiosPublic } from "../axios"

export const getCategories = async (): Promise<ICategoryName[]> => {
  try {
    const response: AxiosResponse = await categoriesApi.getCategories()
    const data: ICategoryName[] = response.data
    //   console.log("data", data);
    return data
  } catch (error) {
    console.error("Error fetching categories:", error)
    throw error
  }
}


// const createCategoriesAsyncThunk = createAsyncThunk.withTypes<{
//   state: ICategoryName
//   rejectValue: unknown
// }>()

// export const getCategories = createCategoriesAsyncThunk(
//   "categories/getAll",
//   async (_, { rejectWithValue }) => {
//     try {
//       const {data} = await categoriesApi.getCategories()

//       console.log("res", data)
//       return data;
//     } catch (error) {
//       return rejectWithValue(error)
//     }
//   }
// )

// export const getCategories = async () => {
//   try {
//     const response = await axios.get('http://16.170.202.154:5000/api/category');
//     console.log("response", response)
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching categories:', error);
//     throw error;
//   }
// };

// import axios from "axios";
// import 'dotenv/config';

// // const BASE_URL = " http://16.170.202.154:5000/api"; // Прямое указание URL
// const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
// const API_AUTH_TOKEN = process.env.NEXT_PUBLIC_API_AUTH_TOKEN;

// console.log("API_AUTH_TOKEN ", API_AUTH_TOKEN );
//  const getCategoriesWithToken = async (): Promise<ICategory[]> => {
//   try {
//     const { data }: AxiosResponse = await axios.get<ICategory[]>(`${BASE_URL}/category`, {
//       headers: {
//         "Authorization": `Bearer ${API_AUTH_TOKEN}`,
//         "Content-Type": "application/json"
//       }
//     });
//     console.log("data12", data);
//     return data;
//   } catch (error) {
//     console.error("Error fetching categories:", error);
//     throw error;
//   }
// };
// getCategoriesWithToken()
// export const getReviews = createAsyncThunk<IResponse, IGetReviewsParams>(
//   "reviews/getReviews",
//   async (params: IGetReviewsParams = {}, { rejectWithValue }) => {
//     try {
//       const { data } = await reviewsApi.getReviews(params)
//       return data
//     } catch (error) {
//       return rejectWithValue(error)
//     }
//   }
// )
// export const getCategories = createCategoriesAsyncThunk(
//   "categories/getAll",
//   async (_, { rejectWithValue }) => {
//     try {
//       const res = await categoriesApi.getCategories()
//       return res.data
//     } catch (error) {
//       return rejectWithValue(error)
//     }
//   }
// )
