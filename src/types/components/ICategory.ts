import { IMenu } from ".";

export interface ICategory {
  categoryId: number;
  name: string;
  linkKey: string;
  subcategory: IMenu[];
}

export interface ICategoryData {
  categoryId: number;
  name: string;
  linkKey: string;
  imageBannerName: string;
  minPrice: string;
  maxPrice: string;
  subcategory: IMenu[];
}
