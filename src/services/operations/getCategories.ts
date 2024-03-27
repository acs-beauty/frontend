import { AxiosResponse } from "axios";

import { ICategory } from "@/types/components";
import { axiosPublic } from "../axios";

// export const getCategories = async (): Promise<ICategory[]> => {
//   try {
//     const { data }: AxiosResponse = await axiosPublic.get<ICategory[]>("/category");
//     console.log("data", data);
//     return data;
//   } catch (error) {
//     console.error("Error fetching categories:", error);
//     throw error; // Можно обработать ошибку дальше или просто пробросить её дальше
//   }
// };



// import axios from "axios";
// import 'dotenv/config';

// const BASE_URL = "http://13.48.46.250:5000/api"; // Прямое указание URL
// const API_AUTH_TOKEN = process.env.NEXT_PUBLIC_API_AUTH_TOKEN;

//  const getCategoriesWithToken = async (): Promise<ICategory[]> => {
//   try {
//     const { data }: AxiosResponse = await axios.get<ICategory[]>(`${BASE_URL}/category`, {
//       headers: {
//         "Authorization": `Bearer ${API_AUTH_TOKEN}`,
//         "Content-Type": "application/json"
//       }
//     });
//     console.log("data", data);
//     return data;
//   } catch (error) {
//     console.error("Error fetching categories:", error);
//     throw error;
//   }
// };
// getCategories()
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