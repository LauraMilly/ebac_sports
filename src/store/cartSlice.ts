import { createSlice } from '@reduxjs/toolkit'
import { Produto } from '../types'

type CartState = {
  items: Produto[]
  total: number
}

const initialState: CartState = {
  items: [],
  total: 0
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: { payload: Produto }) => {
      state.items.push(action.payload)
      state.total += action.payload.preco
    },
    removeItem: (state, action: { payload: number }) => {
      const index = state.items.findIndex((i) => i.id === action.payload)
      if (index !== -1) {
        state.total -= state.items[index].preco
        state.items.splice(index, 1)
      }
    },
    clearCart: (state) => {
      state.items = []
      state.total = 0
    }
  }
})

export const { addItem, removeItem, clearCart } = cartSlice.actions
export default cartSlice.reducer
