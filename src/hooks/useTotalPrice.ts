import { useAppSelector } from ".";
import { selectTotalPrice } from "@/redux/cart/selectors";

export const useTotalPrice = () => useAppSelector(selectTotalPrice);
