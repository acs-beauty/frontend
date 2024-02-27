import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { ICartState, IGood } from "@/types/components"
import { calculateTotals } from "@/helpers"

const initialState: ICartState = {
  goods: [],
  totalAmount: 0,
  totalPrice: 0,
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, { payload }: PayloadAction<IGood>) {
      const newItem = payload
      const existingItem = state.goods.find(item => item.id === newItem.id)
      if (existingItem) {
        existingItem.amount += 1
      } else {
        state.goods.push(newItem)
      }
      calculateTotals(state)
    },
    deleteItem(state, { payload }: PayloadAction<number>) {
      const deleteItemId = payload
      state.goods = state.goods.filter(item => item.id !== deleteItemId)
      calculateTotals(state)
    },
    decreaseItemAmount(state, { payload }: PayloadAction<number>) {
      const itemId = payload
      const item = state.goods.find(item => item.id === itemId)
      if (item) {
        item.amount -= 1
        calculateTotals(state)
      }
    },
    increaseItemAmount(state, { payload }: PayloadAction<number>) {
      const itemId = payload
      const item = state.goods.find(item => item.id === itemId)
      if (item) {
        item.amount += 1
        calculateTotals(state)
      }
    },
  },
})

export const { addItem, deleteItem, decreaseItemAmount, increaseItemAmount } = cartSlice.actions

export const cartReducer = cartSlice.reducer
