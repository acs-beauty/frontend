import { RootState, IGood } from "@/types/components";

export const calculateTotals = (state: RootState) => {
    const totalAmount = state.goods.reduce((total: number, item: IGood) => total + item.amount, 0);
    const totalPrice = state.goods.reduce((total: number, item: IGood) => {
      const price = item.discountPrice ? item.discountPrice : item.price;
      return total + price * item.amount;
    }, 0);
  
    state.totalAmount = totalAmount;
    state.totalPrice = totalPrice;
  };