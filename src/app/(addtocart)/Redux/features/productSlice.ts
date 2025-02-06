"use client"
import { createSlice } from '@reduxjs/toolkit'
import { Products } from '@/app/utils/Mock'
import { IProduct } from '@/app/utils/Types'

// Define the initial state using that type
const initialState: IProduct[] = Products;

export const ProductSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // Define any reducers if needed
  },
})

export default ProductSlice.reducer;
