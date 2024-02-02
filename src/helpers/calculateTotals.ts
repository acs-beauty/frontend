import { ICartState, IGood } from "@/types/components";

export const calculateTotals = (state: ICartState) => {
    const totalAmount = state.goods.reduce((total, item) => total + item.amount, 0);
    const totalPrice = state.goods.reduce((total, item) => {
      const price = item.discountPrice || item.price;
      return total + price * item.amount;
    }, 0);
  
    state.totalAmount = totalAmount;
    state.totalPrice = totalPrice;
  };