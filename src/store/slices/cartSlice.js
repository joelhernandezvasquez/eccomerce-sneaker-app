import { createSlice } from "@reduxjs/toolkit";
export const cartSlice = createSlice({
    name:'cart',
    initialState:{
        cart:[],
        itemsInCart:0,
        isCardDetailOpen:false
    },

    reducers:{
      addProduct:(state,action) =>{
        state.cart = [...state.cart,action.payload];
      },
      deleteProduct:(state,action) =>{
       state.cart = state.cart.filter((cart=> cart.id !==action.payload))
      },
      addItemsInCart:(state,action) =>{
        state.itemsInCart = state.itemsInCart + action.payload;
      },
      deleteItemsInCart:(state,action) =>{
        state.itemsInCart = state.itemsInCart - action.payload;
      },
      setCartDetailsOpen:(state,action) =>{
        state.isCardDetailOpen = action.payload;
      }
      

      

    }
});

export const {
  addProduct,
  deleteProduct,
  addItemsInCart,
  deleteItemsInCart,
  setCartDetailsOpen
}
   = cartSlice.actions;