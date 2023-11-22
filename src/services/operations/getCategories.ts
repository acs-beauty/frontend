import { AxiosResponse } from "axios";

import { ICategory } from "@/types/components";
import { axiosPublic } from "../axios";

export const getCategories = async (): Promise<ICategory[]> => {
  const { data }: AxiosResponse = await axiosPublic.get<ICategory[]>(
    "/category/getNavigation"
  );
  return data;
};
