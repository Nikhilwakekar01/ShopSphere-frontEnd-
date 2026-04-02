import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const ShopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
   
  },
})

// Action creators are generated for each case reducer function
export const {  } = ShopSlice.actions

export default ShopSlice.reducer