import { AxiosResponse } from "axios";

import { ICategory } from "@/types/components";
import { axiosPublic } from "../axios";

export const getAllCategories = async (): Promise<ICategory[]> => {
  const { data }: AxiosResponse = await axiosPublic.get<ICategory[]>(
    "/category/getNavigation"
  );
  return data;
};
