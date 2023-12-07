import { useAppSelector } from ".";
import { selectGoods } from "@/redux/cart/selectors";

export const useCartGoods = () => useAppSelector(selectGoods);
