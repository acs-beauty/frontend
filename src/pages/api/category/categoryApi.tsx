import { instance } from "../instance";
import { ICategory } from "@/types/components";

export const categoriesApi = {
    // <---------- get ---------->
    getCategory: () =>
      instance.get<ICategory>(
       "category/"
      ),
    }