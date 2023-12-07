import { RootStateType } from "@/types/components";

export const selectGoods = (state: RootStateType) => state.cart.goods;
