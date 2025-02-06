'use client'
import { Cart } from '@/app/utils/Types'
import { createSlice } from '@reduxjs/toolkit'

const initialState: Cart[] = []

export const CartSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // Add to cart functionality
    addtocart (state, action) {
      const uuid = Math.floor(1000 + Math.random() * 9000) // Use const
      const newobj = { ...action.payload, uuid } // Use const
      state.push(newobj)
    },

    // Delete from cart
    delItem (state, { payload }) {
      return state.filter(val => val.uuid !== payload)
    },

    // Addition of item
    addition (state, action) {
      const obj = state.find(
        (
          val: Cart // Use Cart type for 'val'
        ) =>
          val.id === action.payload.id &&
          val.color === action.payload.color &&
          val.size === action.payload.size
      )

      if (obj) {
        ++obj.qty
        const newState = state.filter(val => val.id !== obj.id) // Use const
        state = [...newState, obj]
        return
      }
    },

    // Subtraction of item
    subraction (state, action) {
      const obj = state.find(
        (
          val: Cart // Use Cart type for 'val'
        ) =>
          val.id === action.payload.id &&
          val.color === action.payload.color &&
          val.size === action.payload.size
      )

      if (obj !== undefined) {
        --obj.qty
        const newState = state.filter(val => val.uuid !== obj.uuid) // Use const
        state = [...newState, obj]
        return
      }
    }
  }
})

export const { addtocart, delItem, addition, subraction } = CartSlice.actions
export default CartSlice.reducer
