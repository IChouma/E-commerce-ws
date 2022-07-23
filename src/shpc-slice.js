
import { createSlice } from '@reduxjs/toolkit';

import f1 from "./media/f1.jpg"

export const shopCartReducer = createSlice({
  name: 'cart',
  initialState : {
  value: 
  {name:"ilhamatiiii",brand:"adidas",img1:f1,price:95,h6:"Home / B-Shirts",h4:"Men's Fasion T Shirts",span:" dolores beatae maxime? Dignissimos beatae velit commodi maxime?",quantity:1,},
  
  status: 'idle',
},
  reducers: {
   
    shopiCart: (state,action) => {
      state.value += action.payload;
    },
  },
    
  
}
);

export const { shopiCart,initialState,status } = shopCartReducer.actions;
export const shoppCart = (state) => state.sCart.value;

export default shopCartReducer.reducer;
