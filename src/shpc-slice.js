
import { createSlice } from '@reduxjs/toolkit';

import f1 from "./media/f1.jpg"
import f2 from "./media/f2.jpg"
import f3 from "./media/f3.jpg"
import f4 from "./media/f4.jpg"
import f5 from "./media/f5.jpg"

export const shopCartReducer = createSlice({
  name: 'cart',
  initialState : {
  value: 
  {name:"ilhamatiiii",brand:"adidas",img1:f1,price:95,h6:"Home / B-Shirts",h4:"Men's Fasion T Shirts",h4:"Men's Fasion T Shirts",span:" dolores beatae maxime? Dignissimos beatae velit commodi maxime?",quantity:1,},
  
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
