import { AxiosResponse } from "axios";

import { ISubcategoryData } from "@/types/components";
import { axiosPublic } from "../axios";

export const getSubcategoryByLinkKey = async (
  linkKey: string
): Promise<ISubcategoryData> => {
  const { data }: AxiosResponse = await axiosPublic.get<ISubcategoryData>(
    `/category/getCategoryByLinkKey/${linkKey}`
  );
  return data;
};
