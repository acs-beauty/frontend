import { RootStateType } from "@/types/components";

export const selectGoods = (state: RootStateType) => state.cart.goods;
export const selectTotalAmount = (state: RootStateType) => state.cart.totalAmount;
export const selectTotalPrice = (state: RootStateType) => state.cart.totalPrice;
