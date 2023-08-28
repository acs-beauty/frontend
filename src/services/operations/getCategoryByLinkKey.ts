import { AxiosResponse } from "axios";

import { ICategoryData } from "@/types/components";
import { axiosPublic } from "../axios";

export const getCategoryByLinkKey = async (
  linkKey: string
): Promise<ICategoryData> => {
  const { data }: AxiosResponse = await axiosPublic.get<ICategoryData>(
    `/category/getCategoryByLinkKey/${linkKey}`
  );
  return data;
};
