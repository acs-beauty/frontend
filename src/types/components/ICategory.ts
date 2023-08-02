import { IMenu } from ".";

export interface ICategory {
  categoryId: number;
  name: string;
  linkKey: string;
  subcategory: IMenu[];
}
