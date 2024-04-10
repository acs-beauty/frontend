import { instance } from "./instance"
import { IResponseBrand } from "@/types/components";


export const brandsApi = {
    getBrands: ({ page = 1, pageSize = 10, lookup = "" }) =>
    instance.get<IResponseBrand>(
      `brand?page=${page}&pageSize=${pageSize}${lookup ? `&lookup=${lookup}` : ""}`
    ),

}