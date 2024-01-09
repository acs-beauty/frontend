import { IGood } from ".";

export interface ICartState {
  goods: IGood[];
  totalAmount: number;
  totalPrice: number;
}
