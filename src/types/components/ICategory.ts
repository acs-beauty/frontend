import { IMenu } from ".";

export interface ICategory {
  id: number;
  name: string;
  linkKey: string;
  subcategory: IMenu[];
}

export interface ICategoryName {
  id: number
  name: string
  slug: string
  image: string
  subcategory: IMenu[];
}
export interface ICategoryData {
  id: number;
  name: string;
  linkKey: string;
  imageBannerName: string;
  minPrice: string;
  maxPrice: string;
  subcategory: IMenu[];
}
