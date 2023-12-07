import { IGoodsItem } from ".";

export interface ICartState {
  goods: IGoodsItem[];
  totalAmount: number;
  totalPrice: number;
}
