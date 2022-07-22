
import { createSlice } from '@reduxjs/toolkit';

import f1 from "./media/f1.jpg"
import f2 from "./media/f2.jpg"
import f3 from "./media/f3.jpg"
import f4 from "./media/f4.jpg"
import f5 from "./media/f5.jpg"

export const cartReducer = createSlice({
  name: 'cart',
  initialState : {
  value: 0,
  status: 'idle',
},
  reducers: {
    cartt: (state,action) => {
      state.value= action.payload;
    },
    shopCart: (state,action) => {
      state.value += action.payload;
    },
    paid: (state,action) => {
      state.value = action.payload;
    },
  },
    
  
}
);

export const {paid, shopCart,cartt,initialState,status } = cartReducer.actions;
export const selectCart = (state) => state.cart.value;

export default cartReducer.reducer;
