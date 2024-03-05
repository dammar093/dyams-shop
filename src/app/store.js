import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../feature/products/productSlice'
import cartReducer from '../feature/cart/cartSlice'
export const store = configureStore({
  reducer:{
    products:productReducer,
    cart:cartReducer
  }
})