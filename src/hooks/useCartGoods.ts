import { IGood } from "@/types/components";
import { useAppSelector } from ".";
import { selectGoods } from "@/redux/cart/selectors";

export const useCartGoods = (): IGood[] => useAppSelector(selectGoods);
