import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  foodList: [],
   cartList: [],
};

const FoodSlice = createSlice({
  name: 'food',
  initialState,
  reducers: {
    addFood: (state, action) => {
      state.foodList.push(action.payload);
    },
    submitCartId: (state, action) => {
      console.log("cartList====767576576>", action.payload)
             state.cartList.push(action.payload);
         },
    
  },
});
// const cartSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {
//     addToCart: (state, action) => {
//       state.cartList.push(action.payload);
//     },
    
//   },
// });


export const { addFood, submitCartId } = FoodSlice.actions;
// export const { addToCart } = cartSlice.actions;

export default FoodSlice.reducer;
