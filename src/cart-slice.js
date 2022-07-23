
import { createSlice } from '@reduxjs/toolkit';


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
