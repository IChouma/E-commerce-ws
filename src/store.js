import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart-slice';
import shopCartReducer from './shpc-slice';

 const store = configureStore({
  reducer: {
    cart: cartReducer,
    sCart: shopCartReducer,

  },
});
export  default store