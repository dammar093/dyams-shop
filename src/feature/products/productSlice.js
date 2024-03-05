import {createSlice } from "@reduxjs/toolkit";
import products from "../../data/data";

const initialState = {
  products :[]
};

export const productSlice = createSlice({
  name:'products',
     initialState,
     reducers:{
         filtredByCate:(state,action)=>{
            state.products = state.products.filter(item=>item.category === action.payload)
         },
         filteredByPrice:(state,action)=>{
          const filteredProducts = products.filter(item => item.price <= action.payload)
          return{
            ...state,
            products:filteredProducts
          }

         }
     },
     
});

export const {filtredByCate,filteredByPrice} =productSlice.actions


export default productSlice.reducer