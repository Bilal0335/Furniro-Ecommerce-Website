"use client"
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { IProduct } from '@/app/utils/Types'
import Products from '@/app/utils/Mock'

// Define the initial state using that type
const initialState:IProduct[] = Products;

export const ProductSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
  },
})

export const {  } = ProductSlice.actions
export default ProductSlice.reducer