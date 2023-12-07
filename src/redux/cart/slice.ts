import { createSlice } from "@reduxjs/toolkit";

import { ICartState } from "@/types/components";

const initialState: ICartState = {
  goods: [],
  totalAmount: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.goods.find((item) => item.id === newItem.id);
      if (existingItem) {
        existingItem.amount += 1;
      } else {
        state.goods.push(newItem);
      }
      state.totalAmount = state.goods.reduce(
        (total, item) => total + item.amount,
        0
      );
      state.totalPrice = state.goods.reduce((total, item) => {
        const price = item.discountPrice ? +item.discountPrice : +item.price;
        return total + price * item.amount;
      }, 0);
    },
    deleteItem(state, action) {
      const deleteItemId = action.payload;
      state.goods = state.goods.filter((item) => item.id !== deleteItemId);
      state.totalAmount = state.goods.reduce(
        (total, item) => total + item.amount,
        0
      );
      state.totalPrice = state.goods.reduce((total, item) => {
        const price = item.discountPrice ? +item.discountPrice : +item.price;
        return total + price * item.amount;
      }, 0);
    },
    decreaseItemAmount(state, action) {
      const itemId = action.payload;
      const item = state.goods.find((item) => item.id === itemId);
      if (item) {
        item.amount -= 1;
        state.totalAmount = state.goods.reduce(
          (total, item) => total + item.amount,
          0
        );
        state.totalPrice = state.goods.reduce((total, item) => {
          const price = item.discountPrice ? +item.discountPrice : +item.price;
          return total + price * item.amount;
        }, 0);
      }
    },
    increaseItemAmount(state, action) {
      const itemId = action.payload;
      const item = state.goods.find((item) => item.id === itemId);
      if (item) {
        item.amount += 1;
        state.totalAmount = state.goods.reduce(
          (total, item) => total + item.amount,
          0
        );
        state.totalPrice = state.goods.reduce((total, item) => {
          const price = item.discountPrice ? +item.discountPrice : +item.price;
          return total + price * item.amount;
        }, 0);
      }
    },
  },
});

export const { addItem, deleteItem, decreaseItemAmount, increaseItemAmount } =
  cartSlice.actions;

export const cartReducer = cartSlice.reducer;
