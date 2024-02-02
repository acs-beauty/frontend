import { RootState } from "@/types/components";

export const selectGoods = (state: RootState) => state.cart.goods;
export const selectTotalAmount = (state: RootState) => state.cart.totalAmount;
export const selectTotalPrice = (state: RootState) => state.cart.totalPrice;
