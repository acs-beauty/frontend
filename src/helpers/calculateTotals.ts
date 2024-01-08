import { IGood } from "@/types/components";

export const calculateTotals = (goods: IGood[]) => {
    const totalAmount = goods.reduce((total, item) => total + item.amount, 0);
    const totalPrice = goods.reduce((total, item) => {
      const price = item.discountPrice ? +item.discountPrice : +item.price;
      return total + price * item.amount;
    }, 0);
  
    return { totalAmount, totalPrice };
  };