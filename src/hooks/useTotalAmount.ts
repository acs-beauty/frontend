import { useAppSelector } from ".";
import { selectTotalAmount } from "@/redux/cart/selectors";

export const useTotalAmount = () => useAppSelector(selectTotalAmount);
