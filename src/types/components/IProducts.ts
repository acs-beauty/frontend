import { IProduct } from ".";

export interface IProducts {
  totalProducts?: number;
  // quantityStatus?: string;
  // id?: string;
  // categoryLinkKey?: string;
  products: IProduct[];
  // productId?: number
}
