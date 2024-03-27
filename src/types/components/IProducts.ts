import { IProduct } from ".";

export interface IProducts {
  totalProducts: number;
  quantityStatus?: string;
  subcategoryId?: string;
  categoryLinkKey?: string;
  products: IProduct[];
  // productId?: number
}
