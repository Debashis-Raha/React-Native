import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    
    cartList: [],
  };
  
 
  const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
      addToCart: (state, action) => {
        state.cartList.push(action.payload);
      },
      
    },
  });
  
  
  export const { addToCart } = cartSlice.actions;
  
  export default cartSlice.reducer;
  