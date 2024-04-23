import { instance } from "./instance"
import { IResponseProduct } from "@/types/components";


export const productsApi = {
    getProducts: ({ page = 1, pageSize = 10, lookup = "" }) =>
    instance.get<IResponseProduct>(
      `product?page=${page}&pageSize=${pageSize}${lookup ? `&lookup=${lookup}` : ""}`
    ),

}